import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import PortfolioPage from './portfolio/page';
import BlogPage from './blog/page';
import FAQ from '../components/FAQ';
import ContactForm from '../components/contact/ContactForm';
import FloatingButtons from '../components/FloatingButtons';
import TrustBadges from '../components/TrustBadges';
import BookCall from '../components/BookCall';
import StickyCTA from '../components/StickyCTA';
import ExitIntent from '../components/ExitIntent';
import TawkToChat from '../components/TawkToChat';

export default function Home() {
  return (
    <main>
      {/* Hero - First impression, value proposition */}
      <Hero />

      {/* Social Proof - Establish credibility immediately */}
      <ClientLogos />

      {/* Services - What we offer (moved up for clarity) */}
      <Services />

      {/* About - Why choose us, differentiation */}
      <About />

      {/* Process - How we work, reduce uncertainty */}
      <Process />

      {/* Testimonials - Client success stories */}
      <Testimonials />

      {/* Trust Badges - Reviews & Certifications */}
      <TrustBadges />

      {/* Portfolio - Proof of capabilities */}
      <PortfolioPage />

      {/* Blog - Thought leadership */}
      <BlogPage />

      {/* FAQ - Address common questions */}
      <FAQ />

      {/* Book a Call - Calendly integration */}
      <BookCall />

      {/* Contact - Conversion point */}
      <ContactForm />

      {/* Floating Buttons - WhatsApp, Back to Top */}
      <FloatingButtons />

      {/* Mobile Sticky CTA */}
      <StickyCTA />

      {/* Exit Intent Popup */}
      <ExitIntent />

      {/* Live Chat - Tawk.to widget */}
      <TawkToChat />
    </main>
  );
}
