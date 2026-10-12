"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";

interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string[];
  tech: string[];
  image: string;
  representative?: boolean;
}

export default function PortfolioDetailPage({ project }: { project: Project }) {
  return (
    <>
      <section className="border-b border-gray-100 bg-gray-50 pt-12 pb-14">
        <div className="container">
          <Link href="/portfolio" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[hsl(var(--brand))]">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
              {project.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{project.summary}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
              <Image src={project.image} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900">The problem</h2>
            <p className="mt-3 text-gray-700">{project.problem}</p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">How we approach it</h2>
            <ul className="mt-4 space-y-3">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3 text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[hsl(var(--brand))]" />
                  {a}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">{t}</span>
              ))}
            </div>

            {project.representative && (
              <p className="mt-10 rounded-xl bg-gray-50 p-4 text-sm text-gray-500 ring-1 ring-gray-100">
                This is a representative example of the kind of system we build, shown to illustrate
                our approach and technology choices. It is not a specific named client engagement.
                Named case studies are published as clients approve them.
              </p>
            )}
          </div>

          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <LeadForm location={`portfolio:${project.slug}`} heading="Building something similar?" />
              <Link
                href="/portfolio"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[hsl(var(--brand))]"
              >
                Explore more work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
