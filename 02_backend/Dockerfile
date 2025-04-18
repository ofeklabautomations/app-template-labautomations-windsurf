# Unified Backend & Microservices Dockerfile
FROM node:20-alpine
WORKDIR /app

# Copy backend package files
COPY package.json ./
COPY tsconfig.base.json ./

# Only copy Node.js microservice (auth_service) package.json if present
COPY ../03_microservices/auth_service/package.json ./03_microservices/auth_service/

# Install backend dependencies
RUN npm install

# Install Node.js microservice dependencies if present
RUN if [ -f 03_microservices/auth_service/package.json ]; then cd 03_microservices/auth_service && npm install && cd -; fi

# Copy all source code
COPY . .
COPY ../03_microservices ./03_microservices

# Remove COPY of start_microservices.sh and fallback to running backend directly
# If you want to launch the Python microservices, use docker compose for those services

EXPOSE 4000 5000 5001 5002 5003
CMD ["npm", "run", "start"]
