"use client"; // Add only if imported in a Server Component

import Card from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "Strategy & Planning",
    description: "We analyze your business goals, target audience, and competitors to create a customized email marketing strategy."
  },
  {
    number: "02",
    title: "List Building & Segmentation",
    description: "Build and organize your subscriber lists with advanced segmentation for targeted, personalized campaigns."
  },
  {
    number: "03",
    title: "Template Design & Content",
    description: "Create stunning, mobile-responsive templates and compelling content that resonates with your audience."
  },
  {
    number: "04",
    title: "Automation Setup",
    description: "Implement automated workflows for welcome series, nurture campaigns, and behavioral triggers."
  },
  {
    number: "05",
    title: "Campaign Execution",
    description: "Launch campaigns at optimal times with proper testing, scheduling, and quality assurance."
  },
  {
    number: "06",
    title: "Analytics & Optimization",
    description: "Monitor performance metrics, analyze results, and continuously optimize for better outcomes."
  }
] as const;

export const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20 lg:py-28">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Proven Process
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
            A systematic approach to email marketing success, from strategy to execution.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
             
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Step Number */}
                <div className="mb-5 flex items-start">
                  <span className="text-7xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent opacity-30 transition-opacity group-hover:opacity-50">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Optional: Connector line (visual flow) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-l from-blue-300 to-transparent lg:block" />
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Optional: Staggered fade-up */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [style] { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};