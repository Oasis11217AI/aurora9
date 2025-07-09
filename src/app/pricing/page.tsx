// src/app/pricing/page.tsx
'use client';

import React from 'react';

export default function PricingPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-400 mb-4">Choose Your Plan</h1>
        <p className="text-gray-400 mb-12">Flexible pricing plans designed to fit every stage of your business journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Freemium Plan */}
          <div className="border border-gray-700 rounded-xl p-8 bg-gray-900 hover:border-teal-400 transition">
            <h2 className="text-2xl font-semibold mb-4 text-white">Freemium</h2>
            <p className="text-3xl font-bold text-teal-400 mb-2">To Be Announced</p>
            <p className="text-gray-400 mb-6">Perfect for individuals or small teams just getting started.</p>
            <ul className="text-sm space-y-2 text-left">
              <li>✅ Basic AI features</li>
              <li>✅ Community Support</li>
              <li>✅ Limited Access</li>
            </ul>
          </div>

          {/* Standard Plan */}
          <div className="border border-teal-400 rounded-xl p-8 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Standard</h2>
            <p className="text-3xl font-bold text-teal-400 mb-2">To Be Announced</p>
            <p className="text-gray-400 mb-6">Ideal for growing businesses that want more features and control.</p>
            <ul className="text-sm space-y-2 text-left">
              <li>✅ Everything in Freemium</li>
              <li>✅ Advanced Analytics</li>
              <li>✅ Email Support</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-700 rounded-xl p-8 bg-gray-900 hover:border-teal-400 transition">
            <h2 className="text-2xl font-semibold mb-4 text-white">Enterprise</h2>
            <p className="text-3xl font-bold text-teal-400 mb-2">To Be Announced</p>
            <p className="text-gray-400 mb-6">For large organizations needing tailored solutions and premium support.</p>
            <ul className="text-sm space-y-2 text-left">
              <li>✅ All Standard Features</li>
              <li>✅ Dedicated Account Manager</li>
              <li>✅ 24/7 Priority Support</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
