"use client";

import Image from "next/image";
import { Users, Lightbulb, Globe, Quote } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our developers, with an average of 10+ years of experience, stay ahead of trends in .NET, Java, Angular, Vue.js, React.js, and more to deliver high-quality solutions.",
    },
    {
      icon: Lightbulb,
      title: "Industry Knowledge",
      description:
        "We provide tailored IT consulting, collaborating closely with clients to craft industry-specific solutions that drive efficiency.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "With 150+ projects delivered across 20+ countries, we empower businesses to achieve measurable results.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2015, ARSTEG Solutions Pvt. Ltd. is a trusted technology partner for businesses seeking innovative software solutions. Our team of 50+ skilled engineers combines deep industry expertise with a passion for building robust, scalable applications.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16 animate-slide-up">
          <div className="relative rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
            <Image
              src="/images/team-photo.jpg"
              alt="ARSTEG Solutions professional team collaborating in modern office environment"
              className="w-full h-auto"
              width={800} // Adjust based on your image dimensions
              height={400} // Adjust based on your image dimensions
              priority // Optional: for above-the-fold images
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <strength.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{strength.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{strength.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border animate-fade-in max-w-4xl mx-auto">
          <Quote className="h-7 w-7 text-primary mb-6" />
          <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
            ARSTEG transformed our health-tech platform with seamless API integrations, boosting user engagement by 40%.
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="not-italic font-semibold text-lg text-foreground">Health-Tech Startup Client</cite>
              <p className="text-muted-foreground text-sm">Platform Development Partner</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-primary fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
            onClick={() => (window.location.href = "/team")} // Example navigation
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;