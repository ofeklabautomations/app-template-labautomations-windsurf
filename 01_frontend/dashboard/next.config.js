/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@shared': require('path').resolve(__dirname, '../../04_shared'),
    };
    return config;
  },
};

module.exports = nextConfig;
