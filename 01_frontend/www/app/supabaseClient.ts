import { createClient } from '@supabase/supabase-js';
import { Clerk } from '@clerk/clerk-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    accessToken: () => Clerk.session?.getToken(),
  }
);

export default supabase;
