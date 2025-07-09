'use client';

import Hero from '../components/sections/hero';
import Features from '../components/sections/features';
import CTA from '../components/sections/CTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Call to Action */}
      <CTA />
    </main>
  );
}
