import Hero from '../components/Hero';
import About from '../components/About';
import PortfolioPage from './portfolio/page';
import ContactForm from '../components/contact/ContactForm';
import Careers from '../components/Careers';
import ServicesPage from './services/page';
import BlogPage from './blog/page';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServicesPage />
      <PortfolioPage />  
      <BlogPage />
      <ContactForm />
      <Careers />
    </div>
  );
}