'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-20 text-center"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to ARSTEG Solutions Pvt. Ltd</h1>

          
        <p className="text-xl text-gray-600 mb-6">
          A dynamic IT solutions company specializing in web development, mobile app development, and digital marketing.
          The company is committed to delivering innovative and customized solutions that drive business growth and enhance online presence.
          Founded in 2015, ARSTEG Solutions Pvt. Ltd has a proven track record of excellence and customer satisfaction.
 </p>
 <p className="text-xl text-gray-600 mb-6">
          We specialize in creating cutting edge mobile, web, and desktop applications that are tailored to meet the unique needs of our clients.
          Our team of experienced developers, designers, and marketers work collaboratively to deliver high-quality solutions that exceed expectations.
          At ARSTEG Solutions Pvt. Ltd, we believe in building long-term relationships with our clients based on trust, transparency, and mutual success.
    </p>   
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Get in Touch
        </a>
      </div>
    </motion.section>
  );
}