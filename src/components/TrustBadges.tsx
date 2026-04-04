"use client";

import { motion } from "framer-motion";
import { Star, Award, Shield, CheckCircle } from "lucide-react";

// Review platforms (mock ratings)
const reviewPlatforms = [
  {
    name: "Clutch",
    rating: 4.9,
    reviews: 47,
    logo: "https://cdn.prod.website-files.com/5f3c19f18169b65578f51416/678d7e50bf8ce0ce43b3fe1f_clutch-co-logo.svg",
  },
  {
    name: "GoodFirms",
    rating: 4.8,
    reviews: 32,
    logo: "https://www.goodfirms.co/assets/images/logo.svg",
  },
  {
    name: "Google",
    rating: 4.9,
    reviews: 89,
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
  },
];

// Certifications
const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security",
    icon: Shield,
  },
  {
    name: "GDPR Compliant",
    description: "Data Protection",
    icon: CheckCircle,
  },
  {
    name: "SOC 2 Type II",
    description: "Security Standards",
    icon: Award,
  },
];

// Client logos (placeholder with company names)
const clientLogos = [
  "TechCorp",
  "FinanceHub",
  "HealthPlus",
  "RetailMax",
  "DataFlow",
  "CloudSync",
];

interface TrustBadgesProps {
  variant?: "full" | "compact";
}

export default function TrustBadges({ variant = "full" }: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 py-4">
        {reviewPlatforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className={`h-4 w-4 ${j < Math.floor(platform.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {platform.rating} on {platform.name}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Join 150+ companies who trust ARSTEG for their software development needs.
          </motion.p>
        </div>

        {/* Review Platforms */}
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-16">
          {reviewPlatforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-8 mb-4 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-800">{platform.name}</span>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`h-5 w-5 ${j < Math.floor(platform.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">{platform.rating}</div>
              <div className="text-sm text-gray-500">{platform.reviews} reviews</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm ring-1 ring-gray-100"
            >
              <cert.icon className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -50 * clientLogos.length] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12"
          >
            {/* Duplicate for seamless loop */}
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 rounded-xl bg-white ring-1 ring-gray-100"
              >
                <span className="text-lg font-bold text-gray-400">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
