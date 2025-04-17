# API Gateway Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.base.json ./
COPY tsconfig.base.json /tsconfig.base.json
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]
