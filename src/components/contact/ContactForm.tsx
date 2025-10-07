"use client";

import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

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
      detail: 'Gurugram, Haryana, India',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@arsteg.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91-XXX-XXX-XXXX',
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Let us Build Something <span className="text-accent">Great</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Contact our team to discuss your project or get a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
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
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent text-black rounded-md hover:bg-accent/90 transition-colors flex items-center justify-center"
              >
                Submit Your Inquiry
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-black/10 backdrop-blur-md rounded-xl p-6 border border-black/20 hover:bg-black/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                      <p className="text-black/80">{info.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-4 border border-black/20 h-64">
              <div className="w-full h-full bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-black/60">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-accent" />
                  <p className="font-medium">Gurugram, Haryana, India</p>
                  <p className="text-sm">Interactive map integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;