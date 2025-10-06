import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/contact/ContactForm';
import Careers from '../components/Careers';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />  
      <ContactForm />
      <Careers />
    </div>
  );
}