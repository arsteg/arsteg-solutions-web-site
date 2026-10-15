"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, UsersRound, ShieldCheck, Send } from "lucide-react";
import products from "@/data/products";
import { track } from "@/lib/analytics";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UsersRound,
  ShieldCheck,
  Send,
};

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">
              Our products
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SaaS products we build and run ourselves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The clearest proof of our product engineering: three live SaaS products we design,
              ship and operate end to end — the same discipline we bring to client work.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-semibold text-gray-900 hover:text-[hsl(var(--brand))]"
          >
            Explore our products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = iconMap[p.icon] || UsersRound;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--brand))]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-[hsl(var(--brand))]">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{p.summary}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("product_click", { id: p.id, location: "home" })}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[hsl(var(--brand))]"
                >
                  {p.domain}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Want a product like these for your business?{" "}
          <Link href="/contact" className="font-semibold text-gray-700 underline-offset-4 hover:text-[hsl(var(--brand))] hover:underline">
            Talk to the team that builds them.
          </Link>
        </p>
      </div>
    </section>
  );
}
