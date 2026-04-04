"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight, CheckCircle } from "lucide-react";

interface ExitIntentProps {
  delay?: number; // Delay before enabling exit intent (ms)
  cookieExpiry?: number; // Days before showing again
}

export default function ExitIntent({
  delay = 5000,
  cookieExpiry = 7,
}: ExitIntentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if popup was already shown
  const hasSeenPopup = useCallback(() => {
    if (typeof window === "undefined") return true;
    const seen = localStorage.getItem("exitIntentSeen");
    if (!seen) return false;
    const seenDate = new Date(seen);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - seenDate.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays < cookieExpiry;
  }, [cookieExpiry]);

  // Mark popup as seen
  const markAsSeen = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("exitIntentSeen", new Date().toISOString());
    }
  }, []);

  // Handle mouse leave (exit intent)
  useEffect(() => {
    if (!isEnabled || hasSeenPopup()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top
      if (e.clientY <= 0) {
        setIsVisible(true);
        markAsSeen();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isEnabled, hasSeenPopup, markAsSeen]);

  // Enable exit intent after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnabled(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: "Exit Intent Lead",
          description: "User subscribed via exit intent popup for free consultation",
          service: "free-consultation",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsVisible(false), 3000);
      }
    } catch (error) {
      console.error("Exit intent submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    markAsSeen();
  };

  const benefits = [
    "30-minute strategy session",
    "Custom project assessment",
    "Expert recommendations",
    "No strings attached",
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header with gradient */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Gift className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    Free Offer
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Wait! Get a Free Consultation
                </h2>
                <p className="text-blue-100">
                  Before you go, claim your complimentary 30-minute strategy session with our senior engineers.
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <CheckCircle className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      You&apos;re All Set!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll contact you within 24 hours to schedule your free consultation.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Benefits */}
                    <ul className="mb-6 space-y-3">
                      {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending..." : "Claim Free Consultation"}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>

                    {/* No spam note */}
                    <p className="mt-4 text-center text-xs text-gray-500">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
