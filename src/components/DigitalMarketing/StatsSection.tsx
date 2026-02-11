"use client";

import { TrendingUp, Users, Mail, Target, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  // ...
];

export const StatsSection = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "LG-048, Elan Miracle, Sector 84",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122004",
              "addressCountry": "IN"
            },
            "telephone": "+91-844-747-0101",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Email Marketing Services",
                "description": "42x ROI email marketing with Klaviyo, Mailchimp, HubSpot"
              }
            }
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                42x ROI
              </span>{" "}
              Email Marketing Results
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              <strong>500+ clients</strong> • <strong>10M+ emails/month</strong> • <strong>95% deliverability</strong> •
              <strong> Certified Klaviyo & HubSpot Partner</strong>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl hover:ring-blue-300"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                    <stat.icon className="h-8 w-8" />
                  </div>

                  {/* Value */}
                  <div className="mb-2 text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="mb-2 text-xl font-bold text-gray-900">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600 mb-3">
                    {stat.description}
                  </p>

                  {/* Proof Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                    <CheckCircle className="h-3.5 w-3.5" />
                    {stat.proof}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>Certified Klaviyo Partner</span>
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>HubSpot Solutions Partner</span>
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>95% Deliverability Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
