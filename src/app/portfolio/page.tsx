import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Representative examples of the systems ARSTEG builds — by problem type and the technologies involved.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="pt-8">
      <Portfolio />
    </div>
  );
}
