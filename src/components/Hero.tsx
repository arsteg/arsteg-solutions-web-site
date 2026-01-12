"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Award, Globe, ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { Icon: Briefcase, value: "150+", label: "Projects Delivered", proof: "Global clients" },
  { Icon: Users, value: "50+", label: "Senior Engineers", proof: "10+ yrs avg." },
  { Icon: Award, value: "10+", label: "Years Experience", proof: "Since 2015" },
  { Icon: Globe, value: "20+", label: "Countries Served", proof: "USA, UK, EU, Asia" },
] as const;

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Organization + WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "description": "Your Trusted Software Development Partner in Gurugram. 50+ engineers. Custom web, mobile, AI, cloud, email marketing. 150+ projects. 4.9/5 rating.",
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
            "sameAs": [
              "https://www.facebook.com/arsteg/",
              "https://x.com/ARSTEGSolutions",
              "https://in.linkedin.com/company/arsteg-solutions-pvt--ltd",
              "https://instagram.com/arsteg"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "offers": {
              "@type": "Offer",
              "name": "Free Project Consultation",
              "url": "https://arsteg.com/contact",
              "price": "0"
            }
          })
        }}
      />

      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-32">

        {/* Blob Background Animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl animate-blob" />
          <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Left Section */}
            <div className="space-y-8 animate-slideUp">
              <div className="space-y-4">
                {/* SEO-Optimized H1 */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                  Your Trusted Software Development Partner in{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-shine">
                    Gurugram
                  </span>
                </h1>

                <p className="max-w-2xl text-lg text-gray-600 lg:text-xl">
                  <strong>Custom web, mobile, AI, cloud & email marketing</strong> solutions. 
                  <strong>50+ senior engineers</strong>. <strong>150+ projects</strong>. 
                  <strong>Free consultation</strong>.
                </p>
              </div>

              <div className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 hover:shadow-xl animate-fadeIn animation-delay-300">
                <p className="text-sm leading-relaxed text-gray-700">
                  We build <strong>scalable, secure, high-performance</strong> software for 
                  <strong> Healthcare, FinTech, E-commerce, EdTech</strong>. 
                  Certified in <strong>.NET, React, Angular, AWS, Azure, Klaviyo</strong>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-blue-500/50 animate-fadeIn animation-delay-500"
                >
                  Get Free Project Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => scrollTo("services")}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-md focus-visible:ring-4 focus-visible:ring-blue-500/50 animate-fadeIn animation-delay-700"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                </button>
              </div>
            </div>

            {/* Right Section - Hero Image */}
            <div className="relative animate-floatSlow animation-delay-300">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src="/images/hero-illustration.jpg"
                  alt="ARSTEG Solutions – Custom software development in Gurugram. Web, mobile, AI, cloud, email marketing"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-gray-200 animate-bounceSlow">
                <span className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  Trusted by 150+ clients
                </span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-7xl mx-auto">
            {stats.map(({ Icon, value, label, proof }, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-transform hover:scale-105 hover:shadow-2xl hover:ring-blue-300 animate-zoomIn"
                style={{ animationDelay: `${i * 200 + 800}ms` }}
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-blue-600 transition-all group-hover:scale-110" />
                <div className="text-3xl font-bold text-gray-900 lg:text-4xl">{value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
                <div className="mt-1 text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  {proof}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>.NET & React Certified</span>
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>AWS & Azure Partner</span>
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>Free Audit & Quote</span>
            </div>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h1>Software Development Company in Gurugram – ARSTEG Solutions</h1>
            <p>
              ARSTEG is a leading software development company in Gurugram, India. 
              50+ senior engineers. Custom web, mobile, AI, cloud, email marketing solutions. 
              150+ projects delivered in 20+ countries. Free consultation. Fixed-price. 30-day support.
            </p>
          </div>
        </div>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(30px,-20px) scale(1.1); }
            66% { transform: translate(-20px,10px) scale(0.9); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes shine {
            to { background-position: -200% center; }
          }

          .animate-slideUp { animation: slideUp 1s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
          .animate-zoomIn { animation: zoomIn 1s ease-out forwards; }
          .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
          .animate-bounceSlow { animation: bounceSlow 4s ease-in-out infinite; }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-700 { animation-delay: 0.7s; }
          .animate-shine {
            background-size: 200% auto;
            animation: shine 3s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}