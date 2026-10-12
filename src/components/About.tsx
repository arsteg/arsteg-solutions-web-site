"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Target, Compass } from "lucide-react";
import { site, formattedAddress } from "@/config/site";

const values = [
  {
    icon: Target,
    title: "We scope before we sell",
    body: "We'd rather lose a deal than oversell one. Engagements start small so you can judge fit before committing.",
  },
  {
    icon: Compass,
    title: "Honest engineering",
    body: "Clear status, realistic timelines, and a straight answer when something is harder — or genuinely simpler — than it looks.",
  },
  {
    icon: Building2,
    title: "You own what we build",
    body: "Source code, IP and infrastructure stay yours. We build so your own team can maintain and extend the work.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      {/* Intro */}
      <div className="border-b border-gray-100 bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">About ARSTEG</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              A software engineering partner, not a vendor
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {site.legalName} is a software engineering company based in {site.address.city},
              {" "}{site.address.countryName}. We work with small and mid-sized businesses across
              India, the US, the UK and Europe — building custom applications, modernizing legacy
              systems, and connecting and automating the tools teams already rely on.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Most of our work falls into three areas: custom software and modernization,
              integrations and AI automation, and dedicated engineering teams. We take on work we
              can do well and are honest about what we can&apos;t.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What we focus on */}
      <div className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">How we work</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--brand-light))]">
                  <v.icon className="h-5 w-5 text-[hsl(var(--brand))]" />
                </div>
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Company facts + CTA */}
      <div className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Where we are</h2>
            <p className="mt-4 flex items-start gap-3 text-gray-700">
              <MapPin className="mt-1 h-5 w-5 flex-none text-[hsl(var(--brand))]" />
              {formattedAddress()}
            </p>
            <p className="mt-6 text-gray-600">
              Registered as {site.legalName}. We work remotely with clients worldwide and keep
              communication direct between you and the engineers doing the work.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-900 p-8 text-white">
            <h3 className="text-xl font-semibold">Think we might be a fit?</h3>
            <p className="mt-2 text-gray-300">
              Tell us what you&apos;re working on. A senior engineer will read your enquiry and reply
              with honest next steps.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
