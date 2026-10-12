import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      // Removed portfolio item
      { source: "/portfolio/mobile-banking", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
