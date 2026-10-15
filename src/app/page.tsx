import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Products from "@/components/Products";
import Process from "@/components/Process";
import WhyArsteg from "@/components/WhyArsteg";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/contact/ContactForm";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      {/* 1. Clear proposition + primary/secondary CTAs */}
      <Hero />

      {/* 2. Compact, verified evidence (renders only when approved assets exist) */}
      <TrustStrip />

      {/* 3. Priority customer problems and the services that address them */}
      <Services />

      {/* 4. Representative examples of our work */}
      <Portfolio limit={3} />

      {/* 5. Our own SaaS products — proof of product engineering capability */}
      <Products />

      {/* 6. Engagement process and what buyers receive */}
      <Process />

      {/* 7. Specific, evidenced reasons to choose ARSTEG */}
      <WhyArsteg />

      {/* 8. FAQs addressing buying concerns */}
      <FAQ />

      {/* 9. Short enquiry section */}
      <ContactForm />

      {/* Persistent, non-intrusive contact affordances */}
      <FloatingButtons />
    </>
  );
}
