-- Supabase SQL schema for users, subscriptions, and basic SaaS tables

-- Users (managed by Supabase Auth)
-- Subscriptions (synced by billing_service)
-- Add more tables as needed

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  status text not null,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Index for fast lookup
create index if not exists idx_subscriptions_user_id on subscriptions(user_id);
