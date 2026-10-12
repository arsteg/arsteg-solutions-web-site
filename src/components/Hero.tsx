"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/config/site";
import { track } from "@/lib/analytics";

const proofPoints = [
  "Custom software & modernization",
  "Integrations & AI automation",
  "Dedicated engineering teams",
];

const flow = [
  { step: "Discovery", note: "Map the real workflow" },
  { step: "Build", note: "Working software, in iterations" },
  { step: "Integrate", note: "Connect your existing tools" },
  { step: "Hand over", note: "Code, docs & ownership" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-gray-600 ring-1 ring-gray-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand))]" />
              {site.markets.audience} · {site.markets.regions.slice(0, 3).join(", ")} & Europe
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem]"
            >
              Software that fits how your business actually works
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-gray-600"
            >
              ARSTEG is a software engineering partner for growing businesses. We build custom
              applications, modernize legacy systems, and connect and automate the tools you already
              use — so your team stops fighting software and gets on with work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                onClick={() => track("cta_click", { id: "discuss_project", location: "hero" })}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/portfolio"
                onClick={() => track("cta_click", { id: "explore_work", location: "hero" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition-colors hover:border-gray-400"
              >
                Explore our work
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {proofPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-[hsl(var(--brand))]" />
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Conceptual engagement diagram (labeled as illustrative) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-gray-400">
                How an engagement runs
              </p>
              <ol className="space-y-4">
                {flow.map((f, i) => (
                  <li key={f.step} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{f.step}</p>
                      <p className="text-sm text-gray-500">{f.note}</p>
                    </div>
                    {i < flow.length - 1 && <span className="h-px w-6 bg-gray-200" />}
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">Illustrative — our typical delivery flow</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
