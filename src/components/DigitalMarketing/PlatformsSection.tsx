"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const platforms = [
  // ...
];

export const PlatformsSection = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Email Marketing Platforms – ARSTEG Certified Partners",
            "description": "ARSTEG is a certified partner of Mailchimp, Klaviyo, HubSpot, and ActiveCampaign. Expert implementation, migration, and optimization services in Gurugram.",
            "itemListElement": platforms.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": p.name,
                "applicationCategory": "Email Marketing Software",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "offeredBy": {
                    "@type": "Organization",
                    "name": "ARSTEG Solutions"
                  }
                }
              }
            }))
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20 lg:py-28">
        {/* Subtle Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO-Optimized Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Certified Experts in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Top Email Platforms
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              <strong>Official Partners</strong> of <strong>Mailchimp, Klaviyo, HubSpot, ActiveCampaign</strong> —
              guaranteed best practices, fast setup, and maximum ROI.
            </p>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={platform.href} target="_blank" className="group block">
                  <Card
                    className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                    {/* Certified Badge */}
                    {platform.certified && (
                      <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-2 py-1 text-xs font-bold text-white shadow-md">
                        Certified
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Logo */}
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/80 p-3 shadow-md ring-1 ring-gray-200 transition-all group-hover:scale-110 group-hover:shadow-lg">
                        <Image
                          src={platform.image}
                          alt={`${platform.name} Logo – ARSTEG Certified Partner`}
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
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-base text-gray-600">
              Not sure which platform is right for your business?{" "}
              <Link
                href="/contact"
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Get a free platform recommendation
              </Link>
            </p>
          </motion.div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Mailchimp, Klaviyo, HubSpot, ActiveCampaign Partners in Gurugram</h2>
            <p>
              ARSTEG is a certified partner of Mailchimp, Klaviyo, HubSpot, and ActiveCampaign.
              We offer expert setup, migration, automation, and optimization services in Gurugram, India.
              Free platform audit and recommendation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
