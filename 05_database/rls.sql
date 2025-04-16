-- Supabase Row-Level Security Policies

-- Enable RLS on subscriptions table
alter table subscriptions enable row level security;

-- Policy: Only allow users to view their own subscription
create policy "Users can view their subscriptions" on subscriptions
  for select using (auth.uid() = user_id);

-- Policy: Only allow users to update their own subscription
create policy "Users can update their subscriptions" on subscriptions
  for update using (auth.uid() = user_id);
