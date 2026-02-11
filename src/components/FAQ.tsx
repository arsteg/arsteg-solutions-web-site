"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer: "We can typically onboard a dedicated team within 48 hours of signing the agreement. For larger projects requiring specific expertise, we may need up to one week to assemble the ideal team composition.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible engagement models: dedicated teams (monthly retainer), time & materials (hourly), and fixed-price projects. Most clients prefer the dedicated team model for ongoing development, while fixed-price works well for clearly defined projects with specific deliverables.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with companies of all sizes — from seed-stage startups to Fortune 500 enterprises. About 40% of our clients are growth-stage startups (Series A-C), 35% are mid-market companies, and 25% are enterprise clients.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core expertise includes React, Next.js, Vue.js, .NET Core, Node.js, Python, Flutter, and React Native. We're also experienced with cloud platforms (AWS, Azure, GCP), AI/ML (OpenAI, TensorFlow), and various third-party integrations.",
  },
  {
    question: "How do you handle communication and project management?",
    answer: "You'll have direct access to your dedicated team via Slack or Microsoft Teams. We follow Agile methodology with daily standups, weekly demos, and bi-weekly sprint reviews. You'll also get access to our project management tools for real-time visibility.",
  },
  {
    question: "What about intellectual property and confidentiality?",
    answer: "You retain 100% ownership of all code and intellectual property we create for you. We sign NDAs before any project discussion, and our contracts include comprehensive IP assignment clauses. Your data and code are yours — always.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer ongoing maintenance and support packages. Most clients opt for a retainer arrangement that includes bug fixes, security updates, performance monitoring, and feature enhancements. We also offer 24/7 support for mission-critical applications.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. Many of our engagements involve augmenting existing teams. Our engineers integrate seamlessly with your workflows, tools, and processes. We can also help upskill your team through knowledge transfer sessions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <section id="faq" className="relative overflow-hidden bg-gray-50/50 py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-32 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[100px]" />
          <div className="absolute right-1/4 bottom-32 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Everything you need to know about working with ARSTEG. Can&apos;t find the answer? Contact us directly.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between gap-4 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 transition-all ${
                    openIndex === index
                      ? "ring-blue-200 shadow-md"
                      : "ring-gray-100 hover:ring-gray-200 hover:shadow-md"
                  }`}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 rounded-full p-1 ${
                      openIndex === index ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Contact our team
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
