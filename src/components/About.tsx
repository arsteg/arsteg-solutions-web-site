"use client";

import { Users, Lightbulb, Globe, Quote } from "lucide-react";



const About = () => {
  const strengths = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our developers, with an average of 10+ years of experience, stay ahead of trends in .NET, Vue.js, React.js, and more to build robust, scalable solutions.",
    },
    {
      icon: Lightbulb,
      title: "Industry Knowledge",
      description:
        "We provide tailored IT consulting, collaborating closely with clients to create efficient, industry-specific applications.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "With 200+ projects delivered across 20+ countries, we empower businesses to achieve their goals through technology.",
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
            Founded in 2015, ARSTEG Solutions Pvt. Ltd. is a trusted partner for businesses seeking innovative software solutions. Based in Gurugram, Haryana, our team of over 50 skilled engineers combines deep industry expertise with a passion for technology to deliver exceptional results.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16 animate-slide-up">
          <div className="relative rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
            <img
              src="/images/team-photo.jpg "
              alt="ARSTEG Solutions professional team collaborating in modern office environment"
              className="w-full h-auto"
             
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <strength.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{strength.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
          <Quote className="h-12 w-12 text-primary mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
            ARSTEG transformed our health-tech platform with seamless API integrations, boosting user engagement by 40%.
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="not-italic font-semibold text-lg">Health-Tech Startup Client</cite>
              <p className="text-muted-foreground text-sm">Platform Development Partner</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-6 w-6 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="gradient-hero text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-medium"
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