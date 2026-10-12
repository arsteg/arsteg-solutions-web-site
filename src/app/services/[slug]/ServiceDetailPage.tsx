"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Phone,
  Code2,
  Wrench,
  PlugZap,
  UsersRound,
  TrendingUp,
  Settings,
  Target,
  AlertTriangle,
  Package,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { site, telHref } from "@/config/site";
import { testimonials, hasTestimonials } from "@/data/evidence";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Wrench,
  PlugZap,
  UsersRound,
  TrendingUp,
  Settings,
};

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  summary: string;
  who: string;
  problems: string[];
  deliverables: string[];
  approach: string[];
  tech?: string[];
  boundaries?: string[];
  faqs?: { q: string; a: string }[];
  slug: string;
  // legacy field (older data), optional
  description?: string;
}

export default function ServiceDetailPage({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Code2;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            provider: { "@type": "Organization", name: site.legalName, url: site.url },
            description: service.summary,
            serviceType: "Software development",
            areaServed: site.markets.regions,
            ...(service.faqs && service.faqs.length
              ? {}
              : {}),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50 pt-12 pb-16">
        <div className="container">
          <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[hsl(var(--brand))]">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <Icon className="h-7 w-7 text-[hsl(var(--brand))]" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{service.title}</h1>
            <p className="mt-3 text-lg font-medium text-[hsl(var(--brand))]">{service.tagline}</p>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#service-contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-gray-800">
                Discuss your project <ArrowRight className="h-4 w-4" />
              </a>
              <a href={telHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition-colors hover:border-gray-400">
                <Phone className="h-4 w-4" /> {site.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
              <Target className="h-4 w-4 text-[hsl(var(--brand))]" /> Who it&apos;s for
            </div>
          </div>
          <p className="text-xl leading-relaxed text-gray-800 lg:col-span-2">{service.who}</p>
        </div>
      </section>

      {/* Problems */}
      <Section title="Problems we address" icon={AlertTriangle}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {service.problems.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl bg-gray-50 p-5 text-gray-700">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[hsl(var(--brand))]" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Deliverables */}
      <Section title="What you get" icon={Package} muted>
        <ul className="grid gap-4 sm:grid-cols-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-3 text-gray-700">
              <Check className="mt-0.5 h-5 w-5 flex-none text-[hsl(var(--brand))]" />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      {/* Approach */}
      <Section title="How we work" icon={Workflow}>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.approach.map((step, i) => (
            <li key={step} className="rounded-xl border border-gray-200 p-5">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">{i + 1}</div>
              <p className="text-sm text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Verified testimonial (only if approved evidence exists) */}
      {hasTestimonials && (
        <section className="bg-gray-900 py-16">
          <div className="container max-w-3xl text-center">
            <p className="text-xl italic text-gray-100">&ldquo;{testimonials[0].quote}&rdquo;</p>
            <p className="mt-4 text-sm text-gray-400">
              {testimonials[0].author}, {testimonials[0].role}, {testimonials[0].company}
            </p>
          </div>
        </section>
      )}

      {/* Technologies — below the business case, per structure */}
      {service.tech && service.tech.length > 0 && (
        <Section title="Technologies we use" muted>
          <div className="flex flex-wrap gap-2.5">
            {service.tech.map((t) => (
              <span key={t} className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-200">{t}</span>
            ))}
          </div>
        </Section>
      )}

      {/* Boundaries + FAQ */}
      {(service.boundaries?.length || service.faqs?.length) && (
        <Section title="Good to know">
          <div className="grid gap-10 lg:grid-cols-2">
            {service.boundaries && service.boundaries.length > 0 && (
              <div>
                <h3 className="mb-4 font-semibold text-gray-900">Where we set boundaries</h3>
                <ul className="space-y-3">
                  {service.boundaries.map((b) => (
                    <li key={b} className="text-gray-600">{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.faqs && service.faqs.length > 0 && (
              <div>
                <h3 className="mb-4 font-semibold text-gray-900">Common questions</h3>
                <dl className="space-y-4">
                  {service.faqs.map((f) => (
                    <div key={f.q}>
                      <dt className="font-medium text-gray-900">{f.q}</dt>
                      <dd className="mt-1 text-gray-600">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Service-specific next step */}
      <section id="service-contact" className="scroll-mt-24 bg-gray-50 py-16 lg:py-24">
        <div className="container grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Start a conversation</h2>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your {service.title.toLowerCase()} needs. A senior engineer will read it
              and reply with honest next steps — no sales pressure.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {["We review what you need and reply by email", "If it's a fit, we book a short discovery call", "You get a written scope and estimate before committing"].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[hsl(var(--brand))] text-xs font-semibold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm service={service.id} location={`service:${service.slug}`} heading={`Discuss ${service.title.toLowerCase()}`} />
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  icon: Icon,
  muted,
  children,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`py-14 lg:py-16 ${muted ? "bg-gray-50" : ""}`}>
      <div className="container">
        <h2 className="mb-8 flex items-center gap-2.5 text-2xl font-bold tracking-tight text-gray-900">
          {Icon && <Icon className="h-6 w-6 text-[hsl(var(--brand))]" />}
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
