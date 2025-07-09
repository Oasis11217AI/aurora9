'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAboutOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 200); // delay prevents flicker
  };

  return (
    <header className="bg-gray-950 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        <Link href="/" className="text-2xl font-bold text-teal-400">
          AURORA9
        </Link>

        <ul className="flex space-x-8 text-sm font-medium relative">
          {/* About with Dropdown */}
          <li
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about" className="hover:text-teal-400 transition duration-200">
              About
            </Link>

            <ul
              className={`absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded shadow-lg z-50 transition-opacity duration-200 ${
                aboutOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <li>
                <Link
                  href="/about/mission"
                  className="block px-4 py-2 hover:bg-gray-800 text-white whitespace-nowrap"
                >
                  Mission Statement
                </Link>
              </li>
              <li>
                <Link
                  href="/about/vision"
                  className="block px-4 py-2 hover:bg-gray-800 text-white whitespace-nowrap"
                >
                  Vision
                </Link>
              </li>
            </ul>
          </li>

          {/* How it Works */}
          <li>
            <Link href="/how-it-works" className="hover:text-teal-400">
              How it Works
            </Link>
          </li>
<li>
  <Link href="/pricing" className="hover:text-teal-400">
    Pricing
  </Link>
</li>

          {/* Blog */}
          <li>
            <Link href="/blog" className="hover:text-teal-400">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
