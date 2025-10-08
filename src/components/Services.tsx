"use client";

import { Code, Wrench, Network, UserPlus } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build scalable web and mobile applications with technologies like .NET Core, Vue.js, React.js, Node.js, MongoDB, and SQL Server. Our solutions reduce development time by up to 30% while ensuring flexibility and performance.',
      tags: ['.NET Core', 'Vue.js', 'React.js', 'Node.js', 'MongoDB'],
    },
    {
      icon: Wrench,
      title: 'Software Maintenance',
      description: 'Keep your applications running smoothly with support for legacy systems (CLASSIC ASP, VB 6.0) and modern frameworks (MAUI, WPF, Angular, Twilio, Quickbooks).',
      tags: ['Legacy Support', 'MAUI', 'WPF', 'Angular', 'Twilio'],
    },
    {
      icon: Network,
      title: 'API Integrations',
      description: 'Seamlessly connect your platform with third-party APIs, specializing in health-tech solutions like iHealth, Garmin, Fitbit, Google Fit, Withings, Nutritionix, Biosense, Dexcom, KetoMojo, and Open AI.',
      tags: ['Health-Tech', 'iHealth', 'Fitbit', 'OpenAI', 'Garmin'],
    },
    {
      icon: UserPlus,
      title: 'Hire Engineers',
      description: 'Access our expert developers on an hourly basis for flexible, high-quality support across mobile, web, and desktop projects.',
      tags: ['Flexible Hiring', 'Expert Team', 'Hourly Rates', 'Full-Stack'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom software to advanced health-tech integrations, we provide end-to-end solutions to meet your business needs. Our expertise spans modern and legacy technologies, ensuring scalability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;