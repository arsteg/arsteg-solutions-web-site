"use client";

import { motion } from "framer-motion";

// Technology and platform logos that ARSTEG works with
// These represent the ecosystem, not necessarily clients
const techPartners = [
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: ".NET", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "OpenAI", category: "AI" },
];

const industries = [
  "Health-Tech",
  "FinTech",
  "E-Commerce",
  "SaaS",
  "EdTech",
  "Logistics",
];

export default function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Trusted Technology Stack
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Building with industry-leading platforms
          </h2>
        </motion.div>

        {/* Tech Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mb-12"
        >
          {techPartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center"
            >
              <div className="flex h-16 w-32 items-center justify-center rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-blue-100">
                <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </span>
              </div>
              <span className="mt-2 text-[10px] font-medium uppercase tracking-wider text-gray-400">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-4">Industries we specialize in:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-100"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-500">Products Shipped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">90%</div>
              <div className="text-sm text-gray-500">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-500">Client Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-500">Years in Business</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
