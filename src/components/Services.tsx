"use client";

import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { useRouter } from "next/navigation";

const Services = () => {
  const [services, setServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Load services from JSON
    import("../data/services.json")
      .then((data) => setServices(data.default))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End <span className="gradient-text">Technology Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At <strong>ARSTEG Solutions</strong>, we deliver enterprise-ready software,
            AI-driven solutions, and cloud-powered applications that empower businesses
            globally. Explore our services below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code;
            return (
              <div
                key={service.id}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border border-border group"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => router.push("/contact")}
                    className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    aria-label={`Contact us about ${service.title}`}
                  >
                    <IconComponent className="h-7 w-7 text-primary" />
                  </button>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {/* Approach */}
                {service.approach?.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-foreground mb-1">Our Approach:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {service.approach.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Details */}
                {service.details?.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-foreground mb-1">Details:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {service.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {service.benefits?.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
            onClick={() => router.push("/contact")}
          >
            Contact Us for Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
