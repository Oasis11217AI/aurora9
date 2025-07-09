'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function InvestorsPage() {
  const [state, handleSubmit] = useForm('xldnkbqj');

  if (state.succeeded) {
    return (
      <main className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-teal-500 mb-6">Thank You!</h1>
        <p className="text-lg text-gray-700">
          Your interest in AURORA9 has been received. A member of our team will contact you shortly.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-teal-500 text-center">Invest in AURORA9</h1>

      <p className="text-gray-700 mb-8 text-center">
        We&#39;re building the future of e-commerce with Agentic AI. Fill out the form below to connect and
        receive our investor pitch deck.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
          <input id="firstName" name="First Name" type="text" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
          <input id="lastName" name="Last Name" type="text" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email Address</label>
          <input id="email" name="email" type="email" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone Number</label>
          <input id="phone" name="Phone Number" type="text" className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold mb-1">Company/Investment Firm (optional)</label>
          <input id="company" name="Company" type="text" className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-semibold mb-1">Investment Interest Area</label>
          <input id="interest" name="Interest Area" type="text" className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label htmlFor="referral" className="block text-sm font-semibold mb-1">How did you hear about AURORA9?</label>
          <input id="referral" name="Referral Source" type="text" className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Questions or Areas to Discuss</label>
          <textarea id="message" name="message" rows={5} className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-teal-500 text-white font-bold py-3 px-6 rounded hover:bg-teal-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
