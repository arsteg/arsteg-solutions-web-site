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
