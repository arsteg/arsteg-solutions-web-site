"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "You send an enquiry",
    description: "Tell us what you're trying to build or fix. A senior engineer reads it — not a sales rep.",
  },
  {
    number: "02",
    title: "Discovery call",
    description: "A short call to understand your goals, constraints and what success looks like.",
  },
  {
    number: "03",
    title: "Written scope & estimate",
    description: "You get a clear first milestone, approach and estimate before committing to anything larger.",
  },
  {
    number: "04",
    title: "Build in iterations",
    description: "We work in short cycles with working software you can review, and regular demos.",
  },
  {
    number: "05",
    title: "Launch & handover",
    description: "We deploy to infrastructure you control and hand over code, documentation and knowledge.",
  },
];

const youGet = [
  "Full source code and IP ownership",
  "Deployment to your own cloud account",
  "Automated tests and a deployment pipeline",
  "Documentation your team can operate from",
  "Direct access to the engineers doing the work",
  "NDA available on request",
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-gray-50 py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">How we work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From first enquiry to a working system
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A straightforward process designed so you can judge fit early and never commit blind.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Steps */}
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-5"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200">
                  {s.number}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-fit rounded-2xl bg-gray-900 p-8"
          >
            <h3 className="text-xl font-semibold text-white">What you receive</h3>
            <ul className="mt-6 space-y-3">
              {youGet.map((g) => (
                <li key={g} className="flex items-center gap-3 text-gray-200">
                  <Check className="h-5 w-5 flex-none text-[hsl(var(--brand))]" />
                  {g}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
