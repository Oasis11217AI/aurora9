'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-950 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Introducing <span className="text-teal-400">AURORA9</span>
      </h1>
      <p className="max-w-xl mx-auto text-lg mb-8">
        AI workforce that transforms your Amazon Seller operations—fully autonomous, always optimized.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/how-it-works"
          className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Explore the Future
        </Link>
      </div>
    </section>
  );
}
