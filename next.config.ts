import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel auto-detects, but explicit for clarity
  output: undefined, // default: server-side rendering

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "**.tamel.fr" },
    ],
  },

  // i18n via next-intl (app router)
  // Locales handled in middleware.ts

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
