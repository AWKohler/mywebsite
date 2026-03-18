/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Allow longer API calls (Oracle ATP free-tier can cold-start slowly)
  maxDuration: 60,
};

module.exports = withBundleAnalyzer(nextConfig);
