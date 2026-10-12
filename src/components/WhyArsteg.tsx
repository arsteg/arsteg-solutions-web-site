"use client";

import { motion } from "framer-motion";
import { UserCheck, FileCheck2, GitBranch, Plug, MessagesSquare, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Senior engineers do the work",
    body: "You work directly with experienced engineers, not a layer of account managers passing messages to a junior team.",
  },
  {
    icon: FileCheck2,
    title: "We scope before we quote",
    body: "Engagements start with discovery or a small milestone, so you get a written plan and estimate before any big commitment.",
  },
  {
    icon: GitBranch,
    title: "Modernize without the risk",
    body: "We replace legacy systems incrementally and build alongside what you have — no big-bang rewrites that stall your operations.",
  },
  {
    icon: Plug,
    title: "We fit your existing tools",
    body: "Integrations and automation that connect the systems you already run, rather than forcing you onto something new.",
  },
  {
    icon: MessagesSquare,
    title: "Clear, direct communication",
    body: "Regular demos, honest status, and a straight answer when something is harder or simpler than expected.",
  },
  {
    icon: ShieldCheck,
    title: "You own everything",
    body: "Full source code and IP, deployed to infrastructure you control. NDA available on request.",
  },
];

export default function WhyArsteg() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">Why ARSTEG</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Specific reasons teams choose us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Not &ldquo;we&apos;re innovative and excellent.&rdquo; Here&apos;s what&apos;s actually different about working with us.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--brand-light))]">
                <r.icon className="h-5 w-5 text-[hsl(var(--brand))]" />
              </div>
              <h3 className="font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-gray-600">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
