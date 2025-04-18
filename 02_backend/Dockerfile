# Unified Backend & Microservices Dockerfile
FROM node:20-alpine
WORKDIR /app

# Copy backend package files
COPY package.json ./
COPY tsconfig.base.json ./

# Copy microservices package files (if present)
COPY ../03_microservices/ai_service/package.json ./03_microservices/ai_service/
COPY ../03_microservices/analytics_service/package.json ./03_microservices/analytics_service/
COPY ../03_microservices/billing_service/package.json ./03_microservices/billing_service/
COPY ../03_microservices/auth_service/package.json ./03_microservices/auth_service/

# Install backend dependencies
RUN npm install

# Install microservices dependencies
RUN cd 03_microservices/ai_service && npm install && cd - \
 && cd 03_microservices/analytics_service && npm install && cd - \
 && cd 03_microservices/billing_service && npm install && cd - \
 && cd 03_microservices/auth_service && npm install && cd -

# Copy all source code
COPY . .
COPY ../03_microservices ./03_microservices

# Copy microservice launcher script
COPY start_microservices.sh ./
RUN chmod +x ./start_microservices.sh

EXPOSE 4000 5000 5001 5002 5003
CMD ["./start_microservices.sh"]
