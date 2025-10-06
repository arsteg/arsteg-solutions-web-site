// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  border: '2px solid #e5e7eb', // Light gray border for a clean look
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Subtle shadow
};

const center = {
  lat: 28.4157267,
  lng: 76.9630135,
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      let fileData = null;
      if (file) {
        const base64File = await fileToBase64(file);
        fileData = {
          data: base64File.split(',')[1],
          name: file.name,
          type: file.type,
        };
      }

      await axios.post('/api/send-email', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        file: fileData,
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setFile(null);
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Contact Us
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Our Address</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              LG-048, Elan Miracle, Northern Peripheral Rd,<br />
              Sector 84, Gurugram, Haryana 122012
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Email:{' '}
              <a href="mailto:info@arsteg.com" className="text-blue-600 hover:underline">
                info@arsteg.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+918447470101" className="text-blue-600 hover:underline">
                +91 844 747 0101
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                  Attachment
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p
                  className={`text-sm text-center ${
                    status.includes('successfully') ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
            Find Us on the Map
          </h2>
          <div className="w-full">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} title="ARSTEG Solutions Pvt Ltd - Gurugram Office" />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}