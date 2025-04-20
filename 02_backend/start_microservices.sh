#!/bin/sh
# Start all microservices in the background

# Start AI Service
node ../03_microservices/ai_service/dist/index.js &

# Start Analytics Service
node ../03_microservices/analytics_service/dist/index.js &

# Start Billing Service
node ../03_microservices/billing_service/dist/index.js &

# Start Auth Service
node ../03_microservices/auth_service/dist/index.js &

# Start Luma Service
bun run ../03_microservices/luma_service/index.ts &

# Wait for all background jobs
wait
