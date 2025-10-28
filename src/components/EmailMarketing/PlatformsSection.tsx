"use client"; // Add only if imported in a Server Component

import Card from "@/components/ui/Card";
import Image from "next/image";

const platforms = [
  {
    name: "Mailchimp",
    image: "/logos/mailchimp.png",
    description: "Perfect for small to medium businesses, offering intuitive automation and detailed analytics.",
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    name: "Klaviyo",
    image: "/logos/klaviyo.png",
    description: "E-commerce powerhouse with advanced segmentation and personalization capabilities.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    name: "HubSpot",
    image: "/logos/hubspot.png",
    description: "All-in-one CRM and email marketing solution for seamless customer relationship management.",
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    name: "ActiveCampaign",
    image: "/logos/activecampaign.png",
    description: "Sophisticated automation platform ideal for complex customer journeys and workflows.",
    color: "from-blue-500/20 to-blue-600/20"
  }
] as const;

export const PlatformsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20 lg:py-28">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Powered by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Industry-Leading Platforms
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
            We are certified experts in the most powerful email marketing tools, ensuring you get the best results.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
            
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Logo */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/80 p-3 shadow-md ring-1 ring-gray-200 transition-all group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    width={120}
                    height={120}
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {platform.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {platform.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-base text-gray-600">
            Not sure which platform is right for you?{" "}
            <span className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline cursor-pointer">
              Let us help you choose
            </span>
          </p>
        </div>
      </div>

      {/* Optional: Staggered fade-up */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [style] { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};