# Deployment Configuration

## Environment Variables

```env
VITE_SUPABASE_URL=https://tzdttfpikazjmkwltdwo.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6ZHR0ZnBpa2F6am1rd2x0ZHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNTM3OTYsImV4cCI6MjA1NTcyOTc5Nn0.K2dV0Z4gVSz-GoIp6c_AylAcuKPrdonRTHEh49rhuzE
```

## Build Configuration

```js
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
        },
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
});
```

## Netlify Configuration

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Database Schema

```sql
CREATE TABLE newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active',
  ip_address text
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe" 
  ON newsletter_subscriptions
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Admins can view subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');
```