'use client';

import Image from 'next/image';
import Head from 'next/head';

export default function PressPage() {
  return (
    <>
      <Head>
        <title>Press & Media | AURORA9</title>
        <meta name="description" content="Explore media coverage, press releases, and official announcements from AURORA9. Coming soon." />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-teal-400">Press & Media</h1>
          <p className="text-lg text-gray-300">Stay tuned. Exciting announcements are on the way.</p>
          <Image
            src="/AURORA9.png"
            alt="Coming Soon Graphic"
            width={700}
            height={400}
            className="rounded-xl mx-auto border border-gray-700"
            priority
          />
          <p className="mt-6 text-xl text-gray-400 font-semibold">Coming Soon</p>
        </div>
      </main>
    </>
  );
}
