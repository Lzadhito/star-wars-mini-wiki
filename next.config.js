/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/films",
        permanent: true,
      },
    ];
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
};

module.exports = withPWA(nextConfig);
