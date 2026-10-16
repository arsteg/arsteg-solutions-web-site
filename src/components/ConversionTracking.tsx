"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
export default function ConversionTracking() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const link = (event.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const location = window.location.pathname;
      if (href.startsWith("mailto:"))
        track("contact_email_click", { location });
      else if (href.startsWith("tel:"))
        track("contact_phone_click", { location });
      else if (href.includes("wa.me/"))
        track("contact_whatsapp_click", { location });
      else if (href === "/contact" || href === "#enquiry")
        track("cta_click", { id: "project_enquiry", location });
      else if (
        [
          "www.effortlesshrm.com",
          "effortlessinsight.in",
          "effortlesspromo.com",
        ].some((d) => href.includes(d))
      )
        track("product_click", { location });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
