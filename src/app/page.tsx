import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import PortfolioPage from './portfolio/page';
import BlogPage from './blog/page';
import ContactForm from '../components/contact/ContactForm';

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

      {/* Portfolio - Proof of capabilities */}
      <PortfolioPage />

      {/* Blog - Thought leadership */}
      <BlogPage />

      {/* Contact - Conversion point */}
      <ContactForm />
    </main>
  );
}
