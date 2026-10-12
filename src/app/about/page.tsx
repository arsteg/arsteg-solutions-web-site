import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "ARSTEG Solutions is a software engineering partner based in Gurugram, India, working with small and mid-sized businesses across India, the US, UK and Europe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <About />;
}
