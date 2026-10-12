"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { telHref, site } from "@/config/site";
import { track } from "@/lib/analytics";

/**
 * Compact enquiry form shared by service pages and the Zoho page.
 * Posts to the hardened /api/send-email endpoint, shows success only after
 * backend confirmation, preserves input on error, includes a honeypot, and
 * fires privacy-safe analytics (no PII).
 */
export default function LeadForm({
  service,
  heading = "Discuss your project",
  location = "service",
}: {
  service?: string;
  heading?: string;
  location?: string;
}) {
  const initial = { name: "", email: "", company: "", message: "", hp_field: "" };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const started = useRef(false);

  const input =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[hsl(var(--brand))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand)/0.25)]";

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!started.current) {
      started.current = true;
      track("form_start", { location });
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid email.";
    if (form.message.trim().length < 10) errs.message = "A sentence or two helps us reply well.";
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        track("enquiry_submitted", { service: service || "unspecified", location });
        setForm(initial);
      } else {
        setStatus("error");
        if (data.fields) setFieldErrors(data.fields);
        setError(data.error || "We couldn't submit your enquiry. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or email info@arsteg.com.");
    }
  };

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-900/5">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[hsl(var(--brand))]" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-gray-600">
          A senior engineer will read your enquiry and reply by email. Prefer to talk?{" "}
          <a href={telHref} className="font-medium text-[hsl(var(--brand))] underline">{site.contact.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-900/5">
      <h3 className="mb-5 text-xl font-semibold text-gray-900">{heading}</h3>
      {error && (
        <div role="alert" className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-100">
          {error}
        </div>
      )}
      <form onSubmit={submit} noValidate className="space-y-4">
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`hp-${location}`}>Leave empty</label>
          <input id={`hp-${location}`} name="hp_field" tabIndex={-1} autoComplete="off" value={form.hp_field} onChange={onChange} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`name-${location}`} className="mb-1.5 block text-sm font-medium text-gray-700">Your name *</label>
            <input id={`name-${location}`} name="name" value={form.name} onChange={onChange} autoComplete="name" className={input} aria-invalid={!!fieldErrors.name} />
            {fieldErrors.name && <p role="alert" className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
          </div>
          <div>
            <label htmlFor={`email-${location}`} className="mb-1.5 block text-sm font-medium text-gray-700">Work email *</label>
            <input id={`email-${location}`} name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" className={input} aria-invalid={!!fieldErrors.email} />
            {fieldErrors.email && <p role="alert" className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor={`company-${location}`} className="mb-1.5 block text-sm font-medium text-gray-700">
            Company or website <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input id={`company-${location}`} name="company" value={form.company} onChange={onChange} autoComplete="organization" className={input} />
        </div>
        <div>
          <label htmlFor={`message-${location}`} className="mb-1.5 block text-sm font-medium text-gray-700">What do you need help with? *</label>
          <textarea id={`message-${location}`} name="message" rows={4} value={form.message} onChange={onChange} className={`${input} resize-y`} aria-invalid={!!fieldErrors.message} />
          {fieldErrors.message && <p role="alert" className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-60"
        >
          {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<>Send enquiry <ArrowRight className="h-4 w-4" /></>)}
        </button>
        <p className="text-center text-sm text-gray-500">
          {site.flags.responseSLA ? `We typically reply ${site.flags.responseSLA}.` : "We read every enquiry and reply personally."} No obligation.
        </p>
      </form>
    </div>
  );
}
