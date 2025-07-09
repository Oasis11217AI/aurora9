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
              href="https://www.linkedin.com/in/aurora9-ai-agent-09a253364/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm font-medium"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Right Section - Vertically stacked links */}
        <div className="flex flex-col gap-2 text-sm text-gray-400 items-end">
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white">Contact Us</Link>
          <Link href="/investors" className="hover:text-white">Investors</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/press" className="hover:text-white">Press</Link>
          <Link href="/careers" className="hover:text-white">Careers</Link>
        </div>
      </div>
    </footer>
  );
}
