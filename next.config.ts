import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow isolated review builds alongside a running development server.
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Baseline security headers applied to every response. CSP is intentionally
  // omitted for now — a strict policy needs to be tuned and tested against the
  // Google Maps embed, three.js/react-three-fiber and analytics first.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Consolidated standalone pages into their canonical service pages
      { source: "/zoho", destination: "/services/zoho-development", permanent: true },
      { source: "/DigitalMarketing", destination: "/services/digital-marketing-growth", permanent: true },
      // Renamed / merged service slugs
      {
        source: "/services/software-maintenance-modernization",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/api-third-party-integrations",
        destination: "/services/integrations-automation",
        permanent: true,
      },
      // Dedicated/hourly service consolidated into the hiring journey
      {
        source: "/services/dedicated-engineering-teams",
        destination: "/dedicated-teams",
        permanent: true,
      },
      // Removed portfolio item
      { source: "/portfolio/mobile-banking", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
