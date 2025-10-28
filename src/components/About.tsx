"use client";

import Image from "next/image";
import { Users, Lightbulb, Globe, Quote } from "lucide-react";

const strengths = [
  {
    Icon: Users,
    title: "Expert Team",
    description:
      "Our developers, with an average of 10+ years of experience, stay ahead of trends in .NET, Java, Angular, Vue.js, React.js, and more to deliver high-quality solutions.",
  },
  {
    Icon: Lightbulb,
    title: "Industry Knowledge",
    description:
      "We provide tailored IT consulting, collaborating closely with clients to craft industry-specific solutions that drive efficiency.",
  },
  {
    Icon: Globe,
    title: "Global Impact",
    description:
      "With 150+ projects delivered across 20+ countries, we empower businesses to achieve measurable results.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Who We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Are
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
            Founded in 2015, <strong>ARSTEG Solutions Pvt. Ltd.</strong> is a trusted technology partner for businesses seeking innovative software solutions. Our team of <strong>50+ skilled engineers</strong> combines deep industry expertise with a passion for building robust, scalable applications.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-20">
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-all hover:shadow-3xl">
            <Image
              src="/images/team-photo.jpg"
              alt="ARSTEG Solutions professional team collaborating in modern office"
              width={1200}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-8 rounded-full bg-white px-5 py-2.5 shadow-lg ring-1 ring-gray-200 transition-transform group-hover:-translate-y-1">
              <span className="text-sm font-semibold text-gray-800">50+ Engineers</span>
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {strengths.map(({ Icon, title, description }, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white/70 p-8 text-left shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
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
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 p-8 shadow-xl ring-1 ring-gray-200/50 backdrop-blur-sm md:p-12 transition-all hover:shadow-2xl">
            <Quote className="absolute -top-4 left-8 h-10 w-10 text-blue-600 opacity-20 transition-transform group-hover:scale-110" />
            <blockquote className="relative z-10 text-lg font-medium italic text-gray-800 md:text-xl">
              “ARSTEG transformed our health-tech platform with seamless API integrations, boosting user engagement by <strong>40%</strong>.”
            </blockquote>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <cite className="not-italic text-lg font-semibold text-gray-900">Health-Tech Startup Client</cite>
                <p className="text-sm text-gray-600">Platform Development Partner</p>
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
          <button
            onClick={() => (window.location.href = "/team")}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
          >
            Meet Our Team
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
  );
}