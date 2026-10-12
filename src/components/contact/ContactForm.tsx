"use client";

import { useState, useRef } from "react";
import { MapPin, Mail, Phone, ChevronDown, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import GoogleEmbedMap from "./GoogleEmbedMap";
import { site, telHref, mailHref } from "@/config/site";
import { track } from "@/lib/analytics";

const serviceOptions = [
  { value: "", label: "What can we help with? (optional)" },
  { value: "custom-software", label: "Custom software & modernization" },
  { value: "integrations-automation", label: "Integrations & AI automation" },
  { value: "dedicated-team", label: "Dedicated engineering team" },
  { value: "zoho", label: "Zoho implementation" },
  { value: "not-sure", label: "Not sure yet — let's talk" },
];

const budgetOptions = [
  { value: "", label: "Approximate budget (optional)" },
  { value: "not-sure", label: "Not sure yet" },
  { value: "<10k", label: "Under $10,000" },
  { value: "10-25k", label: "$10,000 – $25,000" },
  { value: "25-75k", label: "$25,000 – $75,000" },
  { value: ">75k", label: "$75,000+" },
  { value: "ongoing", label: "Ongoing / monthly team" },
];

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  message: "",
  company: "",
  service: "",
  budget: "",
  hp_field: "", // honeypot — must stay empty
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const startedRef = useRef(false);

  const inputStyles =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[hsl(var(--brand))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand)/0.25)] hover:border-gray-400";
  const selectStyles = inputStyles + " appearance-none pr-10";

  const onFirstInteraction = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("form_start", { location: "contact" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    onFirstInteraction();
    setForm({ ...form, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const validate = (): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      errs.message = "A sentence or two about your project helps us reply well.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
        track("enquiry_submitted", { service: form.service || "unspecified" });
        setForm(initialForm); // clear only on confirmed success
      } else {
        setStatus("error");
        if (data.fields) setFieldErrors(data.fields);
        setFormError(
          data.error || "We couldn't submit your enquiry. Please try again or email us directly.",
        );
        // input is preserved — we do NOT reset the form on error
      }
    } catch {
      setStatus("error");
      setFormError("Network error. Please try again, or email info@arsteg.com.");
    }
  };

  const contactInfo = [
    { Icon: Mail, title: "Email", detail: site.contact.email, href: mailHref, event: "contact_email_click" as const },
    { Icon: Phone, title: "Phone", detail: site.contact.phone, href: telHref, event: "contact_phone_click" as const },
    { Icon: MapPin, title: "Office", detail: `${site.address.city}, ${site.address.region}, ${site.address.countryName}` },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 lg:py-28 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discuss your project
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tell us what you&apos;re trying to build or fix. A senior engineer — not a
            sales rep — will read it and reply by email with next steps.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-900/5">
              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center text-center py-10"
                >
                  <CheckCircle2 className="h-12 w-12 text-[hsl(var(--brand))]" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">Thanks — we&apos;ve got it.</h3>
                  <p className="mt-2 max-w-md text-gray-600">
                    Your enquiry reached our team. We&apos;ll reply by email to review what you
                    need and suggest a first call if it&apos;s a fit. Prefer to talk now? Call{" "}
                    <a href={telHref} className="font-medium text-[hsl(var(--brand))] underline">
                      {site.contact.phone}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-gray-500 underline hover:text-gray-700"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {formError && (
                    <div role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-100">
                      {formError}
                    </div>
                  )}

                  {/* Honeypot — visually hidden, not announced to AT */}
                  <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="hp_field">Leave this field empty</label>
                    <input
                      id="hp_field"
                      name="hp_field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.hp_field}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Your name"
                      required
                      error={fieldErrors.name}
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Cooper"
                        className={inputStyles}
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      />
                    </Field>
                    <Field id="email" label="Work email" required error={fieldErrors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputStyles}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      />
                    </Field>
                  </div>

                  <Field id="message" label="What do you need help with?" required error={fieldErrors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. We run operations on spreadsheets and want a custom app to replace them, with a Zoho/accounting integration."
                      className={`${inputStyles} resize-y`}
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    />
                  </Field>

                  <Field id="company" label="Company or website" hint="Optional">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc. — acme.com"
                      className={inputStyles}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="service" label="Area of work" hint="Optional">
                      <div className="relative">
                        <select id="service" name="service" value={form.service} onChange={handleChange} className={selectStyles}>
                          {serviceOptions.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>
                    </Field>
                    <Field id="budget" label="Budget" hint="Optional">
                      <div className="relative">
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={selectStyles}>
                          {budgetOptions.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>
                    </Field>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    {site.flags.responseSLA
                      ? `We typically reply ${site.flags.responseSLA}.`
                      : "We read every enquiry and reply personally by email."}{" "}
                    No obligation. NDA available on request.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map(({ Icon, title, detail, href, event }) => (
              <div key={title} className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{title}</p>
                  <p className="text-sm font-medium text-gray-900">
                    {href ? (
                      <a href={href} onClick={() => event && track(event)} className="hover:text-[hsl(var(--brand))]">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-xl">
              <div className="h-48 w-full bg-gray-100">
                <GoogleEmbedMap />
              </div>
            </div>

            <div className="rounded-xl bg-gray-900 p-6">
              <h3 className="mb-4 font-semibold text-white">What happens next</h3>
              <ol className="space-y-3 text-sm text-gray-300">
                {[
                  "We read your enquiry and reply by email.",
                  "If it's a fit, we book a short discovery call.",
                  "You get a written scope and estimate — then decide.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[hsl(var(--brand))] text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700">
        <span>
          {label} {required && <span className="text-[hsl(var(--brand))]">*</span>}
        </span>
        {hint && <span className="text-xs font-normal text-gray-400">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
