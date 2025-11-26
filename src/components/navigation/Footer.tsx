'use client';

import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-teal-400">AURORA9</h2>
          <p className="max-w-sm text-sm text-gray-400">
            Empowering Amazon sellers with Agentic AI automation for smarter, faster, and more profitable e-commerce operations.
          </p>
          <div className="flex items-center gap-2 text-blue-500">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/company/aurora9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm font-medium"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-2 text-sm text-gray-400 items-end">
          {[
            ['Terms', '/terms'],
            ['Privacy Policy', '/privacy-policy'],
            ['Contact Us', '/contact'],
            ['Investors', '/investors'],
            ['FAQ', '/faq'],
            ['Press', '/press'],
            ['Careers', '/careers'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
