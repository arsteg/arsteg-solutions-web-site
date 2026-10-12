import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services — custom software, integrations & AI automation",
  description:
    "What ARSTEG does: custom software and modernization, integrations and AI automation, dedicated engineering teams, plus Zoho implementation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-8">
      <Services />
    </div>
  );
}
