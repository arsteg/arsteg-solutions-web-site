"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, PlugZap, UsersRound, Settings, TrendingUp } from "lucide-react";
import servicesData from "@/data/services.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  PlugZap,
  UsersRound,
  Settings,
  TrendingUp,
};

const priority = servicesData.filter((s) => s.priority < 10).sort((a, b) => a.priority - b.priority);
const secondary = servicesData.filter((s) => s.priority >= 10);

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">What we do</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Three things we do best
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re a software engineering partner for small and mid-sized businesses. Most work
            falls into one of these — and they often combine on a single project.
          </p>
        </motion.div>

        {/* Priority services */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {priority.map((s, i) => {
            const Icon = iconMap[s.icon] || Code2;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:border-gray-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand))]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[hsl(var(--brand))]">{s.tagline}</p>
                  <p className="mt-3 flex-1 text-gray-600">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                    Explore this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary services */}
        {secondary.length > 0 && (
          <div className="mt-10 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Also offered</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {secondary.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 transition-colors hover:text-[hsl(var(--brand))] hover:ring-gray-300"
                >
                  {s.title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
