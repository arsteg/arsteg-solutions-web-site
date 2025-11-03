"use client";

import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  approach?: string[];
  details?: string[];
  benefits?: string[];
  result?: string;
  slug: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    import("../data/services.json")
      .then((data) => setServices(data.default))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  return (
    <>
      {/* Service ItemList + Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Custom Software Development Services – ARSTEG Gurugram",
            "description": "Full-stack software development: .NET, React, Vue.js, Node.js, AWS, Azure, AI, mobile apps, email marketing. 50+ engineers. 150+ projects. Free audit.",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "url": `https://arsteg.com/services/${s.slug}`,
                "provider": {
                  "@type": "Organization",
                  "name": "ARSTEG Solutions Pvt. Ltd.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "LG-048, Elan Miracle, Sector 84",
                    "addressLocality": "Gurugram",
                    "addressRegion": "Haryana",
                    "postalCode": "122004",
                    "addressCountry": "IN"
                  },
                  "telephone": "+91-844-747-0101"
                },
                "offers": {
                  "@type": "Offer",
                  "name": "Free Project Audit",
                  "price": "0"
                }
              }
            }))
          })
        }}
      />

      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO-Optimized Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Custom{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Software Development
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
              <strong>50+ senior engineers</strong> build <strong>scalable, secure, enterprise-grade</strong> solutions using 
              <strong> .NET, React, Vue.js, Node.js, AWS, Azure, AI</strong>. 
              <strong>150+ projects</strong>. <strong>Free audit</strong>.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Code;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl hover:ring-blue-300">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                        <IconComponent className="h-8 w-8" />
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-5 text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Result Badge */}
                      {service.result && (
                        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                          <CheckCircle className="h-3.5 w-3.5" />
                          {service.result}
                        </div>
                      )}

                      {/* Approach (Limited) */}
                      {service.approach && service.approach.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">
                            Our Approach
                          </h4>
                          <ul className="space-y-1 text-xs text-gray-600">
                            {service.approach.slice(0, 3).map((step, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{step}</span>
                              </li>
                            ))}
                            {service.approach.length > 3 && (
                              <li className="text-xs text-blue-600 font-medium">
                                +{service.approach.length - 3} more
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Micro CTA */}
                      <div className="mt-4 flex items-center text-blue-600 opacity-0 transition-all group-hover:opacity-100">
                        <span className="text-sm font-semibold">Explore Service</span>
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-800 ring-2 ring-emerald-200">
              <CheckCircle className="h-5 w-5" />
              Free Audit • Fixed Price • 30-Day Support
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Ready to build your next enterprise solution?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get Your Free Project Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Custom Software Development Services in Gurugram – ARSTEG Solutions</h2>
            <p>
              ARSTEG is a top software development company in Gurugram offering custom web & mobile apps, 
              AI solutions, cloud migration, and email marketing. 
              Expertise in .NET, React, Vue.js, Node.js, AWS, Azure. 
              50+ engineers. 150+ global projects. Free consultation.
            </p>
          </div>
        </div>

        {/* Fade-up Animation */}
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
};

export default Services;