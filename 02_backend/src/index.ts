import express from 'express';
import pino from 'pino';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const logger = pino();
const app = express();
app.use(cors());
app.use(express.json());

// Example global auth middleware (stub, replace with Supabase session check)
app.use((req, res, next) => {
  logger.info({ path: req.path, method: req.method }, 'Incoming request');
  next();
});

// Proxy routes (replace targets with docker service names or localhost:port)
app.use('/billing', createProxyMiddleware({ target: 'http://billing_service:8000', changeOrigin: true, pathRewrite: {'^/billing': ''} }));
app.use('/analytics', createProxyMiddleware({ target: 'http://analytics_service:8001', changeOrigin: true, pathRewrite: {'^/analytics': ''} }));
app.use('/ai', createProxyMiddleware({ target: 'http://ai_service:8002', changeOrigin: true, pathRewrite: {'^/ai': ''} }));

// Next.js apps (dashboard, www)
app.use('/dashboard', createProxyMiddleware({ target: 'http://dashboard:3001', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://www:3000', changeOrigin: true }));

// OpenAPI stub
app.get('/openapi.json', (req, res) => {
  res.json({ openapi: '3.0.0', info: { title: 'API Gateway', version: '0.1.0' } });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  logger.info(`API Gateway listening on port ${port}`);
});
