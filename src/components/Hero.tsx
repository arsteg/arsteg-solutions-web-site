"use client";

import Image from "next/image";
import { Users, Briefcase, Globe, Award } from "lucide-react";

const Hero = () => {
 const scrollToContact = () => {
 const element = document.getElementById("contact");
 if (element) {
 element.scrollIntoView({ behavior: "smooth" });
 }
 };

 const scrollToServices = () => {
 const element = document.getElementById("services");
 if (element) {
 element.scrollIntoView({ behavior: "smooth" });
 }
 };

 const stats = [
 { icon: Briefcase, value: "150+", label: "Projects Delivered" },
 { icon: Users, value: "20+", label: "Expert Engineers" },
 { icon: Award, value: "10+", label: "Years Experience" },
 { icon: Globe, value: "10+", label: "Countries Served" },
 ];

 return (
 <section id="home" className="py-20 bg-background">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 {/* Left Content */}
 <div className="space-y-8 animate-fade-in">
 <div className="space-y-4">
 <h1 className="text-4xl md:text-5xl font-bold">
 Innovate with <span className="gradient-text">ARSTEG Solutions</span>
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl">
 Transforming ideas into powerful mobile, web, and desktop applications since 2015
 </p>
 </div>

 <div className="bg-card rounded-xl p-6 shadow-card border border-border">
 <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
 Welcome to ARSTEG Solutions Pvt. Ltd., a dynamic software services company based in Gurugram, Haryana. We specialize in custom software development, advanced API integrations, and scalable solutions that drive business success worldwide.
 </p>
 </div>

 <div className="flex flex-col sm:flex-row gap-4">
 <button
 className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
 onClick={scrollToContact}
 >
 Get a Free Quote

 </button>
 <button
 className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
 onClick={scrollToServices}
 >
 Explore Services
 </button>
 </div>
 </div>

 {/* Right Image */}
 <div className="relative animate-slide-up">
 <div className="relative rounded-2xl overflow-hidden shadow-card">
 <Image
 src="/images/hero-illustration.jpg"
 alt="Modern software development ecosystem with connected devices and applications"
 className="w-full h-auto"
 width={600} // Adjust based on your image dimensions
 height={400} // Adjust based on your image dimensions
 priority // For above-the-fold images
 />
 <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
 </div>
 </div>
 </div>

 {/* Stats Section */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
 {stats.map((stat, index) => (
 <div
 key={index}
 className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border group"
 style={{ animationDelay: `${index * 0.1}s` }}
 >
 <stat.icon className="h-7 w-7 text-primary mb-3" />
 <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
 <div className="text-sm text-muted-foreground">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Hero;