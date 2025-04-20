# luma_service

A lightweight backend microservice (no frontend/UI). Exposes HTTP endpoints for use by other services in the system.

## Endpoints

- `GET /health` — Health check endpoint.
- `GET /events` — Returns a list of Luma events.
- `GET /event-users/:eventId` — Returns approved users/guests for a given event.

## Usage

- Install dependencies: `bun install`
- Start in dev mode: `bun run index.ts`
- Exposes endpoints like `/events`, `/health`, `/event-users/:eventId`.

## Conventions

- No frontend/UI code.
- All business logic exposed via HTTP API.
- Use environment variables for secrets/config.
- Keep dependencies minimal.
- Document all endpoints in this README.

---

This project was created using `bun init` in bun v1.2.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
