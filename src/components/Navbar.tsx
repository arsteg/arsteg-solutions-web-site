'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-blue-500 text-white p-4 rounded-lg shadow-md m-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-left">
          <Image
            src="/images/logo.png" // Ensure this path is correct
            alt="Site Logo"
            width={100}
            height={30}
            className="mr-3"
          />
          
        </div>

        {/* Right: Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-gray-200">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-gray-200">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
