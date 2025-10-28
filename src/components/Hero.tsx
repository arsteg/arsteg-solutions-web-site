"use client";

import Image from "next/image";
import { Briefcase, Users, Award, Globe } from "lucide-react";

const stats = [
  { Icon: Briefcase, value: "150+", label: "Projects Delivered" },
  { Icon: Users, value: "20+", label: "Expert Engineers" },
  { Icon: Award, value: "10+", label: "Years Experience" },
  { Icon: Globe, value: "10+", label: "Countries Served" },
] as const;

export default function Hero() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Innovate with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-shine">
                  ARSTEG Solutions
                </span>
              </h1>

              <p className="max-w-2xl text-lg text-gray-600 lg:text-xl">
                Transforming ideas into powerful mobile, web, and desktop applications since 2015.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 hover:shadow-xl animate-fadeIn animation-delay-300">
              <p className="text-sm leading-relaxed text-gray-700">
                We are a software development company based in Gurugram offering custom applications, advanced integrations, and scalable digital solutions for global businesses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-blue-500/50 animate-fadeIn animation-delay-500"
              >
                Get a Free Quote
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-md focus-visible:ring-4 focus-visible:ring-blue-500/50 animate-fadeIn  animation-delay-700"
              >
                Explore Services
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className="relative animate-floatSlow animation-delay-300">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Modern software ecosystem – connected devices and applications"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-gray-200 animate-bounceSlow">
              <span className="text-sm font-semibold text-gray-800">Trusted by 150+ clients</span>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-7xl mx-auto">
          {stats.map(({ Icon, value, label }, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-transform hover:scale-105 hover:shadow-2xl animate-zoomIn"
              style={{ animationDelay: `${i * 200 + 800}ms` }}
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-blue-600 transition-all group-hover:scale-110" />
              <div className="text-3xl font-bold text-gray-900 lg:text-4xl">{value}</div>
              <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
            </div>
          ))}
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
  );
}
