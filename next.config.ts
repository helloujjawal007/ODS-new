import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  devIndicators: false,
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://www.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/crm-integration",
        destination: "/salesforce/",
        permanent: true,
      },
      {
        source: "/services/salesforce-support",
        destination: "/salesforce/",
        permanent: true,
      },
      {
        source: "/services/salesforce-development-support",
        destination: "/salesforce/",
        permanent: true,
      },
      {
        source: "/services/crm-management-integration",
        destination: "/salesforce/",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/portfolio/",
        permanent: true,
      },
      {
        source: "/work/:slug",
        destination: "/portfolio/:slug/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
