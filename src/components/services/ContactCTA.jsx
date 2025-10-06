// components/ContactCTA.jsx
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="text-center mt-12 bg-blue-600 text-white py-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Ideas?</h2>
      <p className="text-lg mb-6">Let’s build something extraordinary together! Contact us for a free consultation.</p>
      <Link href="/contact">
        <p className="inline-block bg-white text-blue-600 font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition">
          Contact Us Today
        </p>
      </Link>
    </section>
  );
};

export default ContactCTA;