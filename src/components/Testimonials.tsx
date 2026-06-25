"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "ARSTEG delivered our FinTech platform in 3 months with zero downtime. Their engineering precision reduced our operational cost by 40%.",
    author: "Managing Director",
    company: "FinTech Venture",
    location: "Singapore",
    result: "40% cost reduction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
  },
  {
    quote: "We needed to scale from 10K to 500K users. ARSTEG rebuilt our architecture and we haven't had a single performance issue since.",
    author: "CTO",
    company: "Health-Tech Startup",
    location: "USA",
    result: "50x user scale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&fit=crop",
  },
  {
    quote: "Their team integrated seamlessly with ours. It felt like having a true extension of our engineering department, not an outsourced vendor.",
    author: "VP of Engineering",
    company: "SaaS Platform",
    location: "UK",
    result: "3 products shipped",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&q=80&fit=crop",
  },
  {
    quote: "The legacy migration was complex, but ARSTEG handled it flawlessly. Our 15-year-old system now runs on modern cloud infrastructure.",
    author: "IT Director",
    company: "Insurance Company",
    location: "Germany",
    result: "Zero downtime migration",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&fit=crop",
  },
  {
    quote: "From day one, communication was exceptional. Daily updates, quick responses, and they actually understood our business needs.",
    author: "Product Manager",
    company: "E-Commerce Platform",
    location: "Australia",
    result: "Launched in 4 months",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
  },
  {
    quote: "We've worked with many development agencies. ARSTEG is the only one we've retained for over 3 years. That says everything.",
    author: "Founder & CEO",
    company: "EdTech Startup",
    location: "Canada",
    result: "3+ year partnership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&q=80&fit=crop",
  },
];

const stats = [
  { value: "4.9/5", label: "Client Rating" },
  { value: "90%", label: "Client Retention" },
  { value: "150+", label: "Projects Delivered" },
  { value: "20+", label: "Countries Served" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Client Stories
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by teams{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Card */}
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 min-h-[350px]">
            <Quote className="absolute top-8 left-8 h-16 w-16 text-white/5" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white text-lg">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentIndex].company} &bull; {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-500/20 px-4 py-2 rounded-full">
                    {testimonials[currentIndex].result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
