"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const steps = [
  // ...
];

export const ProcessSection = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "6-Step Email Marketing Process for 42x ROI",
            "description": "ARSTEG’s proven 6-step email marketing process: Strategy, List Building, Design, Automation, Execution, Optimization. Used by 500+ clients.",
            "step": steps.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": s.title,
              "itemListElement": {
                "@type": "HowToDirection",
                "text": s.description
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
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                6-Step Email Process
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              From audit to <strong>42x ROI in 6 months</strong> — our battle-tested process delivers predictable revenue growth.
            </p>
          </motion.div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="group h-full relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="mb-5 flex items-start">
                      <span className="text-7xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent opacity-30 transition-opacity group-hover:opacity-50">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>

                    {/* Result Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                      {step.highlight}
                    </div>
                  </div>
                </Card>
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
              Ready to implement this process for your business?{" "}
              <Link
                href="/contact"
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Get your free email audit
              </Link>
            </p>
          </motion.div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>6-Step Email Marketing Process – 42x ROI in 6 Months</h2>
            <p>
              ARSTEG’s 6-step email marketing process: Strategy, List Building, Design, Automation, Execution, Optimization.
              Used by 500+ clients to achieve 42x ROI. Free audit includes 90-day roadmap and revenue forecast.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
