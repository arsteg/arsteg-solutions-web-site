// app/services/page.tsx
"use client";

import { Code, Wrench, Network, UserPlus } from 'lucide-react';
import Link from 'next/link';

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
    <section id="services" className="py-20 section-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            From custom software to advanced health-tech integrations, we provide end-to-end solutions to meet your business needs. Our expertise spans modern and legacy technologies, ensuring scalability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/5 backdrop-blur-sm rounded-xl p-8 border border-black/10 hover:bg-black/10 hover:border-black/20 transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
              <p className="text-black/80 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-black/10 border border-black/20 rounded-full text-sm text-black/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#portfolio">
            <button
              className="bg-accent text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Explore Our Solutions
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;