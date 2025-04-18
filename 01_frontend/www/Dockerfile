# www (Landing) Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
# Copy the entire monorepo into the container
COPY ../../ .
WORKDIR /app/01_frontend/www
# Install all dependencies from the monorepo root
RUN npm install --legacy-peer-deps
# Copy base TS config from monorepo root for Docker build
COPY ../../tsconfig.base.json ./tsconfig.base.json
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app/01_frontend/www
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/01_frontend/www .
EXPOSE 3000
CMD ["npm", "start"]
