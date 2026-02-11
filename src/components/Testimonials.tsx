"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "ARSTEG delivered our FinTech platform in 3 months with zero downtime. Their engineering precision reduced our operational cost by 40%.",
    author: "Managing Director",
    company: "FinTech Venture",
    location: "Singapore",
    result: "40% cost reduction",
    rating: 5,
  },
  {
    quote: "We needed to scale from 10K to 500K users. ARSTEG rebuilt our architecture and we haven't had a single performance issue since.",
    author: "CTO",
    company: "Health-Tech Startup",
    location: "USA",
    result: "50x user scale",
    rating: 5,
  },
  {
    quote: "Their team integrated seamlessly with ours. It felt like having a true extension of our engineering department, not an outsourced vendor.",
    author: "VP of Engineering",
    company: "SaaS Platform",
    location: "UK",
    result: "3 products shipped",
    rating: 5,
  },
  {
    quote: "The legacy migration was complex, but ARSTEG handled it flawlessly. Our 15-year-old system now runs on modern cloud infrastructure.",
    author: "IT Director",
    company: "Insurance Company",
    location: "Germany",
    result: "Zero downtime migration",
    rating: 5,
  },
  {
    quote: "From day one, communication was exceptional. Daily updates, quick responses, and they actually understood our business needs.",
    author: "Product Manager",
    company: "E-Commerce Platform",
    location: "Australia",
    result: "Launched in 4 months",
    rating: 5,
  },
  {
    quote: "We've worked with many development agencies. ARSTEG is the only one we've retained for over 3 years. That says everything.",
    author: "Founder & CEO",
    company: "EdTech Startup",
    location: "Canada",
    result: "3+ year partnership",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
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

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-300 mb-6">
            Client Stories
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by teams{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 p-8 md:p-12 min-h-[320px]">
            <Quote className="absolute top-6 left-6 h-16 w-16 text-white/5" />

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
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex].company} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-400">
                    {testimonials[currentIndex].result}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-blue-500"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-gray-400 mt-1">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">90%</div>
            <div className="text-sm text-gray-400 mt-1">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">150+</div>
            <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-sm text-gray-400 mt-1">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
