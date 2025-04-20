# Backend Microservice Template (No Frontend)

A lightweight backend microservice template for services that do NOT expose any user interface. Use this for data fetchers, background jobs, or API-only services.

## Directory Structure

```
/microservice_name/
  |- index.ts           # Entry point, sets up HTTP API
  |- package.json       # Service-specific dependencies/scripts
  |- tsconfig.json      # TypeScript config (optional, if needed)
  |- README.md          # Service documentation
  |- .env               # (optional) Service-specific env vars
```

## package.json Example

```json
{
  "name": "microservice_name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "bun run index.ts",
    "start": "bun run index.ts"
  },
  "dependencies": {},
  "devDependencies": {
    "@types/bun": "latest",
    "typescript": "^5"
  }
}
```

## index.ts Example (Minimal Bun HTTP API)

```typescript
import { serve } from "bun";

serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), { headers: { "Content-Type": "application/json" } });
    }

    // Example: /events endpoint
    if (url.pathname === "/events" && req.method === "GET") {
      // Call your fetch logic here
      // const events = await getEvents();
      return new Response(JSON.stringify([]), { headers: { "Content-Type": "application/json" } });
    }

    return new Response("Not found", { status: 404 });
  }
});
```

## README.md Example

```
# microservice_name

A lightweight backend microservice (no frontend/UI).  
Exposes HTTP endpoints for use by other services in the system.

## Usage

- Start in dev mode: `bun run index.ts`
- Exposes endpoints like `/events`, `/health`, etc.

## Conventions

- No frontend/UI code.
- All business logic exposed via HTTP API.
- Use environment variables for secrets/config.
- Keep dependencies minimal.
- Document all endpoints in this README.
```

## Documentation/Guidelines

- **No UI code:** Do not include React, Next.js, or any frontend framework.
- **API Only:** Expose business logic/data via HTTP endpoints.
- **Minimal dependencies:** Use Bun’s built-in HTTP server unless you require more features.
- **Environment variables:** Store secrets/config in `.env` and access via `process.env`.
- **Consistent scripts:** Use `bun run index.ts` for dev/start.
- **Endpoint docs:** Document all API endpoints in the README.

## When to Use This Template

- Use for all backend microservices that do NOT require user interaction or UI.
- Example: data fetchers, data transformers, notification services, background jobs, etc.

## Exception: Microservices with a Frontend

- Example: `auth_service` (shows Clerk login modal).
- These should use Next.js (or another frontend framework), and expose both API and UI as needed.
