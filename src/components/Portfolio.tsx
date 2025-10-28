"use client";

import Image from "next/image";
import {
  Activity,
  Smartphone,
  Brain,
  MessageSquare,
  BarChart3,
  FileEdit,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: Activity,
      title: "Dynamic User Dashboard",
      description:
        "Implemented a responsive dashboard using Vue.js components, enabling users to visually track health metrics and progress in real‑time.",
      tech: ["Vue.js", "ChartJS", "Real‑time Data"],
    },
    {
      icon: Smartphone,
      title: "Health Device Integrations",
      description:
        "Integrated APIs for iHealth, Garmin, Withings, Google Fit, Fitbit, Biosense, Dexcom, and KetoMojo, creating a unified platform to fetch and display health data.",
      tech: ["Vue.js", "API Integration", "Multi‑Device"],
    },
    {
      icon: Brain,
      title: "AI‑Powered Food Planner",
      description:
        "Developed a Vue.js‑based Add Food Planner with Open AI integration. Users snap photos of food, and AI scans to list ingredients and nutritional information instantly.",
      tech: ["Vue.js", "OpenAI", "Computer Vision", "Nutrition AI"],
    },
    {
      icon: MessageSquare,
      title: "Messaging System",
      description:
        "Built a communication module using Vue.js and Twilio, allowing users to connect with healthcare providers and receive automated health goal reminders.",
      tech: ["Vue.js", "Twilio", "Real‑time Messaging"],
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description:
        "Leveraged Vue ChartJS to create customized summary reports, enabling users to visualize health data through interactive charts and graphs.",
      tech: ["Vue.js", "ChartJS", "Data Analytics"],
    },
    {
      icon: FileEdit,
      title: "Custom Form Builder",
      description:
        "Designed a Vue.js‑based Form Builder for healthcare providers to create tailored data collection forms for specific patient needs.",
      tech: ["Vue.js", "Form Builder", "Customization"],
    },
  ] as const;

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Health‑Tech{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Innovations
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
            At ARSTEG, we specialize in building cutting‑edge health‑tech
            solutions that empower users and providers. Our portfolio showcases
            seamless integrations and intuitive interfaces that drive real‑world
            impact.
          </p>
        </div>

        {/* Featured Dashboard */}
        <div className="mb-20">
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-all hover:shadow-3xl">
            <Image
              src="/images/dashboard-mockup.jpg"
              alt="Health‑tech dashboard showing fitness metrics and data visualizations"
              width={1200}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Health Metrics Dashboard
              </h3>
              <p className="text-white/90">
                Real‑time data visualization powered by Vue.js and Chart.js
              </p>
            </div>
            <div className="absolute -top-5 -right-5 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-gray-200 transition-transform group-hover:scale-105">
              <span className="text-sm font-bold text-gray-800">
                Featured Project
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <project.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-gradient-to-r from-blue-100/70 to-indigo-100/70 px-3 py-1.5 text-xs font-medium text-blue-700 transition-all group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50">
            See More Projects
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Fade‑up animation */}
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
};

export default Portfolio;