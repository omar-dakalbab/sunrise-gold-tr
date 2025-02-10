/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
