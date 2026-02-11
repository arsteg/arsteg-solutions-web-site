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
    outcome: "Clear project scope & team recommendation",
  },
  {
    number: "02",
    icon: Search,
    title: "Technical Assessment",
    description: "Our architects review your existing systems, identify opportunities, and design the optimal approach.",
    duration: "Days 2-3",
    outcome: "Architecture proposal & detailed estimate",
  },
  {
    number: "03",
    icon: FileCode2,
    title: "Team Assembly",
    description: "We assign the right senior engineers based on your tech stack and industry. Direct communication from day one.",
    duration: "Day 4-5",
    outcome: "Dedicated team ready to deploy",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Agile Delivery",
    description: "Two-week sprints with daily standups, weekly demos, and transparent progress tracking.",
    duration: "Ongoing",
    outcome: "Continuous delivery & rapid iteration",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Launch & Support",
    description: "Production deployment, monitoring setup, and dedicated support with guaranteed response times.",
    duration: "Post-launch",
    outcome: "99.9% uptime & ongoing partnership",
  },
];

const guarantees = [
  "48-hour team onboarding",
  "Direct access to senior engineers",
  "No hidden fees or surprise costs",
  "Flexible engagement models",
  "Full IP ownership transfer",
  "30-day satisfaction guarantee",
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-50/40 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-50/40 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            How We Work
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            From first call to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              production
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            A streamlined process designed to get your project moving fast — without sacrificing quality or communication.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6 md:gap-8">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                      <step.icon className="h-7 w-7" />
                    </div>
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 shadow-sm ring-1 ring-gray-200">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 max-w-2xl">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                      {step.outcome}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gray-900 p-10 md:p-12 lg:p-16"
        >
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Our commitment to you
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                We believe great partnerships are built on transparency and trust. Here&apos;s what you can expect when working with ARSTEG.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-blue-50"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guarantees.map((guarantee, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-white">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
