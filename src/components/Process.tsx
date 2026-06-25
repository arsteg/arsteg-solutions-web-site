"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  FileCode2,
  Rocket,
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "30-minute strategy session to understand your goals, technical requirements, and timeline.",
    duration: "Day 1",
    outcome: "Clear project scope",
  },
  {
    number: "02",
    icon: Search,
    title: "Technical Assessment",
    description: "Our architects review existing systems, identify opportunities, and design the optimal approach.",
    duration: "Days 2-3",
    outcome: "Architecture proposal",
  },
  {
    number: "03",
    icon: FileCode2,
    title: "Team Assembly",
    description: "We assign the right senior engineers based on your tech stack. Direct communication from day one.",
    duration: "Day 4-5",
    outcome: "Dedicated team ready",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Agile Delivery",
    description: "Two-week sprints with daily standups, weekly demos, and transparent progress tracking.",
    duration: "Ongoing",
    outcome: "Continuous delivery",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Launch & Support",
    description: "Production deployment, monitoring setup, and dedicated support with guaranteed response times.",
    duration: "Post-launch",
    outcome: "99.9% uptime",
  },
];

const guarantees = [
  "48-hour onboarding",
  "Direct senior access",
  "No hidden fees",
  "Flexible engagement",
  "Full IP ownership",
  "30-day guarantee",
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            How We Work
          </div>

          <h2 className="text-headline text-gray-900 mb-6">
            From first call to{" "}
            <span className="gradient-text">production</span>
          </h2>

          <p className="text-body-lg">
            A streamlined process designed to get your project moving fast —
            without sacrificing quality or communication.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex gap-5">
                  {/* Icon & Line */}
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm ring-1 ring-gray-900/5 transition-all group-hover:bg-gray-900 group-hover:text-white">
                      <step.icon className="h-5 w-5" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex-1 w-px bg-gray-200 my-3" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-gray-400">{step.number}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 max-w-xl">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                      <CheckCircle className="h-4 w-4" />
                      {step.outcome}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-gray-900 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Our commitment to you
                </h3>
                <p className="text-gray-400 mb-6">
                  Great partnerships are built on transparency and trust.
                  Here&apos;s what you can expect working with ARSTEG.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 transition-all hover:bg-gray-100"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {guarantees.map((guarantee, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
