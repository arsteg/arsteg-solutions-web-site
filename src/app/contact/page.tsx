import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import BookCall from "@/components/BookCall";

export const metadata: Metadata = {
  title: "Discuss your project",
  description:
    "Tell ARSTEG what you're trying to build or fix. A senior engineer reads every enquiry and replies personally.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <ContactForm />
      <BookCall />
    </div>
  );
}
