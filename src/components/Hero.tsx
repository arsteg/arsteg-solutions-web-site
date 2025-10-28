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
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl animate-pulse" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left – Text & CTAs */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Innovate with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  ARSTEG Solutions
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-gray-600 lg:text-xl">
                Transforming ideas into powerful mobile, web, and desktop applications since 2015.
              </p>
            </div>

            {/* Company Intro Card */}
            <div className="rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:shadow-xl">
              <p className="text-sm leading-relaxed text-gray-700">
                Welcome to <strong>ARSTEG Solutions Pvt. Ltd.</strong>, a dynamic software services company based in Gurugram, Haryana. We specialize in custom software development, advanced API integrations, and scalable solutions that drive business success worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              >
                Get a Free Quote
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-transparent px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              >
                Explore Services
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right – Hero Image */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-all hover:shadow-3xl">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Modern software ecosystem – connected devices and applications"
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-gray-200 transition-transform group-hover:-translate-y-1">
              <span className="text-sm font-bold text-gray-800">Trusted by 150+ clients</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-7xl mx-auto">
          {stats.map(({ Icon, value, label }, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

              <div className="relative z-10">
                <Icon className="mx-auto mb-4 h-10 w-10 text-blue-600 transition-all group-hover:scale-110 group-hover:text-blue-700" />
                <div className="text-3xl font-bold text-gray-900 lg:text-4xl">{value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staggered fade-up animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [style] { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}