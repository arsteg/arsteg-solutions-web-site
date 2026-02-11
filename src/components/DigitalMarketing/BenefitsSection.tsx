"use client";

import {
  DollarSign,
  Users,
  Globe,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const benefits = [
  // ...
];

export const BenefitsSection = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Benefits of Email Marketing for Business Growth",
            "description": "Discover why email marketing delivers 42x ROI, drives revenue, enables precise targeting, and builds customer loyalty. ARSTEG Solutions helps businesses grow with email automation.",
            "itemListElement": benefits.map((b, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Thing",
                "name": b.title,
                "description": b.description
              }
            }))
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* SEO-Optimized Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Email Marketing?
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              <strong>42x average ROI</strong> — email marketing is the #1 channel for customer acquisition, retention, and revenue growth.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className="group h-full rounded-3xl p-6 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl hover:border-primary/40 border-2 border-transparent"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                        <benefit.icon className="h-7 w-7" />
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Email Marketing Benefits: 42x ROI, Revenue Growth, Customer Loyalty</h2>
            <p>
              Email marketing delivers the highest ROI of any digital channel.
              With precise targeting, instant analytics, and automated workflows,
              businesses using email grow revenue 3x faster. ARSTEG helps you launch
              high-converting email campaigns with Klaviyo, Mailchimp, and custom automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
