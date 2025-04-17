import { createServerClient } from "@updatedev/ssr/supabase";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
  const cookieStore = await cookies();

  const client = createServerClient(
    process.env.NEXT_PUBLIC_UPDATE_PUBLIC_KEY!,
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      billing: {
        environment: process.env.NODE_ENV === "production" ? "live" : "test",
      },
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing sessions.
          }
        },
      },
    }
  );

  // You may want to refresh session or handle auth here
  // For now, just return the NextResponse
  return NextResponse.next();
}

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Match all request paths except:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - images - .svg, .png, .jpg, .jpeg, .gif, .webp
    // Feel free to modify this pattern to include more paths.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
