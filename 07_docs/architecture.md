# Architecture Diagram

```
Browser
  │
  ▼
API Gateway (Node/Express)
  │         │         │
  ▼         ▼         ▼
Supabase  Update.dev  Python Microservices
  │           │        │
  └───────────┴────────┘

Sequence:
1. Browser → Gateway → /auth, /billing, /analytics, /ai
2. Gateway authenticates via Supabase, proxies to correct service
3. Billing webhooks from Update.dev → billing_service → Supabase
4. Analytics → analytics_service → PostHog
5. AI stub → ai_service
```

---

- All business logic is in backend/microservices, not Next.js apps.
- Supabase service-role key used only in backend/microservices.
- Each service is isolated (runs in its own container).
