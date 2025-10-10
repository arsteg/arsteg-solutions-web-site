"use client";

import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import GoogleEmbedMap from './GoogleEmbedMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success message
    alert("Thank you for your inquiry. We'll get back to you within 24 hours.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      description: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      detail: 'LG-048, Elan Miracle, Hayatpur, Sector 84, Near Sector 83, Gurgaon, Haryana 122004, India',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@arsteg.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91-844-747-0101',
    },
  ];

  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let us Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Contact our team to discuss your project or get a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in border border-border"
            style={{ animationDelay: '0s' }}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-3 py-2 border border-border rounded-[var(--radius)] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-3 py-2 border border-border rounded-[var(--radius)] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-3 py-2 border border-border rounded-[var(--radius)] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground">
                  Budget Range
                </label>
                <input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Enter budget range (e.g., $5,000 - $10,000)"
                  className="w-full px-3 py-2 border border-border rounded-[var(--radius)] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2 text-foreground">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-border rounded-[var(--radius)] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)] flex items-center justify-center"
              >
                Submit Your Inquiry
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in border border-border group"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-card animate-slide-up">
  <div className="w-full h-96 bg-card rounded-2xl flex items-center justify-center border border-border">
    <GoogleEmbedMap />
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;