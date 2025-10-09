"use client";

import { Code, Wrench, Network, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "We build tailor-made applications that meet your business goals using the latest technologies across web, mobile, and cloud platforms.",
      details: [
        "Frontend: React.js, Angular, Vue.js, Svelte, Flutter Web, Blazor",
        "Backend: .NET Core, ASP.NET MVC, Node.js, Express.js, Django, Spring Boot",
        "Mobile: Flutter, React Native, MAUI, Swift, Kotlin",
        "Databases: SQL Server, PostgreSQL, MySQL, MongoDB, Firebase, Redis",
        "Cloud & DevOps: Azure, AWS, Google Cloud, Docker, Kubernetes, CI/CD pipelines",
        "AI & Data: OpenAI, TensorFlow, PyTorch, Power BI, Apache Kafka, Elasticsearch",
        "Emerging Tech: Blockchain, AR/VR, IoT, Chatbots, Voice Assistants",
      ],
      benefits: [
        "Faster development with modern frameworks",
        "Scalable, high-performance applications",
        "Integration with AI, IoT, and cloud services for smarter solutions",
      ],
    },
    {
      icon: Wrench,
      title: "Software Maintenance",
      description:
        "Keep your systems running smoothly while upgrading legacy applications to modern, secure, and high-performance platforms.",
      details: [
        "Support for Classic ASP, VB6, WinForms, WPF",
        "Migration to .NET Core, MAUI, Angular, React, Blazor",
        "Application performance optimization and security enhancements",
        "Cloud migration and multi-platform deployment",
      ],
      benefits: [
        "Reduced downtime and extended application lifespan",
        "Enhanced performance and security",
      ],
    },
    {
      icon: Network,
      title: "API Integrations",
      description:
        "Seamlessly connect your platform with third-party services and automate workflows across industries.",
      details: [
        "Health & Fitness: iHealth, Garmin, Fitbit, Google Fit, Withings, Dexcom, Biosense",
        "Finance & Accounting: QuickBooks, Stripe, PayPal, Moneris",
        "Messaging & Communication: Twilio, Firebase Cloud Messaging, SendGrid",
        "AI & ML: OpenAI, Google AI",
        "Custom Integrations: IoT devices, blockchain networks, AR/VR platforms",
      ],
      benefits: [
        "Unified platforms and real-time insights",
        "Automated, efficient workflows",
      ],
    },
    {
      icon: Users,
      title: "Hire Expert Developers",
      description:
        "Access our team of full-stack engineers, AI specialists, mobile developers, and DevOps professionals on an hourly or project basis.",
      details: [
        "Flexible engagement models",
        "Deep expertise across 50+ technologies",
        "Proven track record with 150+ projects in 10+ countries",
      ],
      benefits: [
        "Reliable and scalable engineering talent",
        "Transparent communication and delivery",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End <span className="gradient-text">Technology Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At <strong>ARSTEG Solutions</strong>, we deliver enterprise-ready software,
            AI-driven solutions, and cloud-powered applications that empower businesses
            globally. Our expertise spans web, mobile, desktop, cloud, AI, IoT, and
            blockchain technologies — enabling you to stay ahead in the digital era.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Details */}
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-3">
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Benefits */}
              {service.benefits && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Benefits:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
