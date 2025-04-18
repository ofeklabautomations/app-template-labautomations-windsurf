# SaaS Micro-Services Template

A fork-ready, production-grade SaaS monorepo template. Built for micro-services, not monoliths.

## Features
- Next.js 15 (App Router), TypeScript, Turborepo
- Multi-zone: `/` → marketing, `/dashboard` → authenticated dashboard
- Supabase Auth, Update.dev billing (Stripe), analytics, email, AI stub
- Express API Gateway, Python microservices
- Quality CI/CD, Docker Compose, docs, and more

## Quick Start
1. Copy `.env.example` to `.env` and fill in secrets.
2. Run: `docker compose up --build`
3. Visit http://localhost

See `07_docs/architecture.md` for architecture details.

---

## 📁 Folder Structure

```
├── 01_frontend/            # Next.js apps
│   ├── www/                # landing site (public)
│   └── dashboard/          # authenticated app
├── 02_backend/             # Node.js/Express API gateway
├── 03_microservices/       # Python services (billing, analytics, ai, …)
├── 04_shared/              # TS types, UI kit, helpers
├── 05_database/            # Supabase SQL schema + RLS + storage rules
├── 06_scripts/             # Dev & CI utility scripts
├── 07_docs/                # Architecture & runbooks
├── 08_github/              # Issue / PR templates
├── 09_config/              # Infra config (nginx, redis, k8s, etc.)
├── docker-compose.yml      # Local orchestration
├── jest.config.js          # Root Jest config
├── .eslintrc.js, .prettierrc, .gitignore
└── README.md
```

---

## 🏗️ Monorepo Overview
- **Turborepo** orchestrates all apps/services.
- **Next.js 15** (App Router) for www & dashboard (multi-zone routing).
- **Supabase** for auth, Postgres, and RLS (see `05_database/`).
- **API Gateway** (Express, TS) proxies to microservices and frontends.
- **Python microservices**: billing (Stripe/Update.dev), analytics (PostHog), AI stub.
- **Shared UI/types** in `04_shared/`.
- **Quality**: ESLint, Prettier, Jest, Playwright, CI via GitHub Actions.

---

## 🚀 Quick Start
1. Copy `.env.example` to `.env` and fill in secrets.
2. Run: `docker compose up --build`
3. Visit http://localhost

---

## 📚 Documentation
- [07_docs/architecture.md](07_docs/architecture.md): Sequence diagram, architecture overview.
- Each folder contains a `README.md` with details and usage.
- [08_github/](08_github/): Issue/PR templates for project hygiene.
- [06_scripts/](06_scripts/): Scripts for dev, build, lint, test.

---

## 🛠️ Key Features
- **Supabase Auth**: Secure, RLS-protected, service-role key only in backend.
- **Update.dev Billing**: Stripe webhooks handled in billing_service.
- **Analytics**: PostHog via analytics_service.
- **Beautiful UI**: Tailwind, Radix UI, shadcn/ui, Lucide, Sonner, dark mode.
- **CI/CD**: Lint, test, build, push Docker images to GHCR.

---

## 📝 Contributing
- Open issues/PRs using templates in `08_github/`.
- Run all checks before submitting.

---

## 📦 Service Details
- See each service's folder for a `README.md` explaining its purpose, environment variables, and local dev notes.
- SQL schema and RLS policies are fully documented in `05_database/`.

---

## 🗺️ Architecture
See [`07_docs/architecture.md`](07_docs/architecture.md) for a flow diagram and sequence breakdown.

---

## 💡 Fork & Extend
This template is designed for rapid SaaS prototyping. Add new microservices, swap out providers, or extend the UI as needed!

---

## TypeScript Base Config

This repo requires a `tsconfig.base.json` at the root for builds to work.
If you create a new package or app, extend from this base config in your `tsconfig.json`, for example:

```json
"extends": "../../tsconfig.base.json"
```

**Docker builds for www and dashboard automatically copy this file into the build context.**
If you encounter errors about missing `tsconfig.base.json`, ensure this file exists at the root.
