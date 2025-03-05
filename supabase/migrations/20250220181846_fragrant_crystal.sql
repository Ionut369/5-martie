/*
  # Create newsletter subscriptions table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text) - for tracking subscription status
      - `ip_address` (text) - for compliance and security
      
  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for inserting new subscriptions
    - Add policy for admin to read all subscriptions
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active',
  ip_address text
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe" 
  ON newsletter_subscriptions
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated admins can view subscriptions
CREATE POLICY "Admins can view subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');