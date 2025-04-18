import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// This function checks if the user is visiting /dashboard or any subpage (like /dashboard/settings)
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // If the user is trying to access a protected route...
  if (isProtectedRoute(req)) {
    // ...require them to be logged in. If not, Clerk will redirect to sign-in.
    await auth().protect();
  }
});

export const config = {
  matcher: [
    // Protect dashboard and its subpages
    '/dashboard(.*)',
    // Always run for API routes (optional, can remove if not needed)
    '/(api|trpc)(.*)',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
