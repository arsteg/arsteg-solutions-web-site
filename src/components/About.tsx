"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Lightbulb, Globe, Quote, CheckCircle, ArrowRight } from "lucide-react";

const strengths = [
  {
    Icon: Users,
    title: "50+ Senior Engineers",
    description:
      "10+ years average experience in .NET, Java, React.js, Angular, Vue.js, Node.js, Python, AWS, Azure. Full-stack & DevOps certified.",
    result: "99% on-time delivery",
  },
  {
    Icon: Lightbulb,
    title: "Deep Industry Expertise",
    description:
      "Custom solutions for Healthcare, FinTech, E-commerce, EdTech, Logistics. HIPAA, PCI-DSS, GDPR compliant.",
    result: "40% efficiency gain",
  },
  {
    Icon: Globe,
    title: "150+ Global Projects",
    description:
      "Delivered across 20+ countries: USA, UK, Germany, Singapore, UAE. Enterprise-grade, scalable, secure.",
    result: "4.9/5 client rating",
  },
] as const;

export default function About() {
  return (
    <>
      {/* Organization + LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "description": "Top software development company in Gurugram. 50+ engineers. 150+ projects. .NET, Java, React, Angular, AWS, Azure. Healthcare, FinTech, E-commerce.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "LG-048, Elan Miracle, Sector 84",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122004",
              "addressCountry": "IN"
            },
            "telephone": "+91-844-747-0101",
            "email": "info@arsteg.com",
            "foundingDate": "2015",
            "numberOfEmployees": "50",
            "areaServed": "Worldwide",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development"
              }
            }
          })
        }}
      />

      <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
        {/* Decorative Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO-Optimized Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Top Software Company in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Gurugram
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
              Founded in <strong>2015</strong>, <strong>ARSTEG Solutions</strong> is a <strong>50+ engineer</strong> software development firm 
              specializing in <strong>.NET, Java, React, Angular, AWS, Azure</strong>. 
              <strong>150+ projects</strong> delivered globally. <strong>4.9/5 rating</strong>.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-20">
            <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-all hover:shadow-3xl">
              <Image
                src="/images/team-photo.jpg"
                alt="ARSTEG Solutions team of 50+ senior engineers in Gurugram office – .NET, Java, React, Angular experts"
                width={1200}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Floating Badge */}
              <div className="absolute -bottom-5 left-8 rounded-full bg-white px-5 py-2.5 shadow-lg ring-1 ring-gray-200 transition-transform group-hover:-translate-y-1">
                <span className="text-sm font-semibold text-gray-800">50+ Senior Engineers</span>
              </div>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="mb-20 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {strengths.map(({ Icon, title, description, result }, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/70 p-8 text-left shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl hover:ring-blue-300"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 mb-3">
                  {description}
                </p>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                  <CheckCircle className="h-3.5 w-3.5" />
                  {result}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mx-auto max-w-4xl mb-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 p-8 shadow-xl ring-1 ring-gray-200/50 backdrop-blur-sm md:p-12 transition-all hover:shadow-2xl">
              <Quote className="absolute -top-4 left-8 h-10 w-10 text-blue-600 opacity-20 transition-transform group-hover:scale-110" />
              <blockquote className="relative z-10 text-lg font-medium italic text-gray-800 md:text-xl">
                “ARSTEG delivered our <strong>FinTech platform</strong> in <strong>3 months</strong> with <strong>zero downtime</strong>. 
                Their <strong>.NET + React</strong> team reduced our operational cost by <strong>40%</strong>.”
              </blockquote>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <cite className="not-italic text-lg font-semibold text-gray-900">FinTech Startup, Singapore</cite>
                  <p className="text-sm text-gray-600">Full-Stack Development Partner</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-blue-600 transition-transform group-hover:scale-110"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-800 ring-2 ring-emerald-200">
              <CheckCircle className="h-5 w-5" />
              Free Consultation • Fixed Price • 30-Day Support
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Ready to build your next software product?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get Your Free Project Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Software Development Company in Gurugram – ARSTEG Solutions</h2>
            <p>
              ARSTEG is a leading software development company in Gurugram, India. 
              50+ senior engineers. 150+ projects delivered globally. 
              Expertise in .NET, Java, React.js, Angular, Node.js, Python, AWS, Azure. 
              Specializing in Healthcare, FinTech, E-commerce, EdTech. 
              Free consultation. Fixed-price projects. 30-day post-launch support.
            </p>
          </div>
        </div>

        {/* Staggered fade-up animation */}
        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          [style] {
            animation: fadeUp 0.6s ease-out forwards;
          }
        `}</style>
      </section>
    </>
  );
}