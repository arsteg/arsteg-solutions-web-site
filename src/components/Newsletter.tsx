"use client";
import { useState } from "react";
import Link from "next/link";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  return (
    <div className="newsletter">
      <div>
        <h2>Occasional engineering notes</h2>
        <p>Product thinking and practical software insights.</p>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setStatus("loading");
          try {
            const { supabase } = await import("@/lib/supabase");
            const { error } = await supabase
              .from("subscriptions")
              .insert([{ email: email.trim() }]);
            if (error) throw error;
            setStatus("success");
            setEmail("");
          } catch {
            setStatus("error");
          }
        }}
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email for engineering notes
        </label>
        <div className="newsletter-fields">
          <input
            id="newsletter-email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button disabled={status === "loading"} type="submit">
            {status === "loading" ? "Subscribing…" : "Subscribe →"}
          </button>
        </div>
        <p>
          Subscribe to email updates.{" "}
          <Link href="/privacy">Privacy notice</Link>.
        </p>
        {status === "success" && (
          <p role="status">Subscription accepted. Thank you.</p>
        )}
        {status === "error" && (
          <p role="alert">
            We could not save your subscription. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
