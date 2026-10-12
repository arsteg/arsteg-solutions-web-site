"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Portfolio({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <section id="portfolio" className="scroll-mt-24 bg-gray-50 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">Our work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The kinds of systems we build
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Representative examples of our engineering work, shown by problem type and the
              technologies involved.
            </p>
          </div>
          {typeof limit === "number" && (
            <Link href="/portfolio" className="inline-flex items-center gap-1.5 font-semibold text-gray-900 hover:text-[hsl(var(--brand))]">
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand))]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          These are representative examples of our capabilities, not specific named client
          engagements. Named case studies are published here as clients approve them.
        </p>
      </div>
    </section>
  );
}
