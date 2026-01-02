import Hero from '../components/Hero';
import About from '../components/About';
import PortfolioPage from './portfolio/page';
import ContactForm from '../components/contact/ContactForm';
import ServicesPage from './services/page';
import BlogPage from './blog/page';
import DigitalMarketingPage from './DigitalMarketing/page';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServicesPage />
      <DigitalMarketingPage />
      <PortfolioPage />
      <BlogPage />
      <ContactForm />

    </div>
  );
}