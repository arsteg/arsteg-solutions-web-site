import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import products from "@/data/products";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Our products — EffortlessHRM, EffortlessInsight & EffortlessPromo",
  description:
    "SaaS products built and operated by ARSTEG: EffortlessHRM for HR operations, EffortlessInsight for GST notice compliance, and EffortlessPromo for AI outbound sales.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Our products | ARSTEG Solutions",
    description:
      "Three live SaaS products we design, ship and operate end to end — the same discipline we bring to client work.",
    url: `${site.url}/products`,
  },
};

// SoftwareApplication structured data for each product, published under the
// ARSTEG organization so search engines connect the products to the company.
const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: p.summary,
      publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />

      {/* Page header */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand))]">
              Our products
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              We don&apos;t just build software for clients. We build our own.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              These three SaaS products are designed, engineered and operated entirely by ARSTEG —
              from product strategy and UX through AI integration, infrastructure and support.
              Running our own products keeps us honest: every practice we recommend to clients is
              one we rely on ourselves, in production, every day.
            </p>
          </div>
        </div>
      </section>

      {/* Product detail sections */}
      {products.map((p, i) => (
        <section
          key={p.id}
          className={`py-20 lg:py-24 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  {p.category}
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{p.name}</h2>
                <p className="mt-1 text-base font-medium text-[hsl(var(--brand))]">{p.tagline}</p>
                <p className="mt-4 leading-relaxed text-gray-600">{p.description}</p>
                <p className="mt-4 text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Built for:</span> {p.audience}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand))] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[hsl(var(--brand-dark))]"
                  >
                    Visit {p.domain}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  {p.trialNote && <span className="text-sm text-gray-500">{p.trialNote}</span>}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  What it does
                </h3>
                <ul className="mt-4 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-700">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(var(--brand))]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Capability bridge: products as proof of client-work quality */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The same team can build your product
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Shipping and operating our own SaaS means we&apos;ve solved the hard parts —
              multi-tenant architecture, AI integration, billing, compliance, reliability — in
              production. If you&apos;re planning a product, you can hire the team that already
              does this for itself.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand))] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[hsl(var(--brand-dark))]"
              >
                Discuss your product idea
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services/custom-software-development"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-white"
              >
                See our development services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
