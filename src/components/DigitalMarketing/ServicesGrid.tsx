"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MousePointer2,
  Share2,
  PenTool,
  Mail,
  Smartphone,
  BarChart3,
  Globe,
  CheckCircle
} from "lucide-react";
import Card from "@/components/ui/Card";

const services = [
  // ...
];

export const ServicesGrid = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Digital Marketing Services – ARSTEG Solutions",
            "description": "Full-service digital marketing: SEO, PPC, Social Media, Content, Email, Web Design. Growth-focused strategies.",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "url": `https://arsteg.com/services/${s.slug}`,
                "provider": {
                  "@type": "Organization",
                  "name": "ARSTEG Solutions"
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
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              Everything you need to <strong>grow your brand</strong>, <strong>attract customers</strong>, and <strong>drive revenue</strong> online.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <Card
                    className="group h-full relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                        <service.icon className="h-8 w-8" />
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>

                      {/* Result Badge */}
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                        <CheckCircle className="h-3.5 w-3.5" />
                        {service.result}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-base text-gray-600">
              Not sure where to start?{" "}
              <Link
                href="/contact"
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Get a free digital audit
              </Link>
            </p>
          </motion.div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Digital Marketing Solutions: SEO, PPC, SMM, Email, Content</h2>
            <p>
              ARSTEG provides end-to-end digital marketing services. From ranking #1 on Google to
              managing high-ROI ad campaigns and building engaging social media communities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
