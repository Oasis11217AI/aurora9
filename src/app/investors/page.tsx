'use client';

import { useState, FormEvent } from 'react';
import Head from 'next/head';

export default function InvestorsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xldnkbqj', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        console.error('Formspree error', res.status, body);
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Network error', err);
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>Investor Inquiry Received | AURORA9</title>
        </Head>
        <main className="max-w-3xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-teal-500 mb-6">Thank You!</h1>
          <p className="text-lg text-gray-300" aria-live="polite">
            Your interest in AURORA9 has been received. A member of our team will contact you
            shortly.
          </p>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Investor Inquiries | AURORA9</title>
        <meta
          name="description"
          content="Interested in investing in AURORA9? Fill out the form to connect and request our AI-powered ecommerce pitch deck."
        />
      </Head>

      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-teal-500 text-center">
          Invest in AURORA9
        </h1>

        <p className="text-gray-300 mb-8 text-center">
          We&apos;re building the future of e-commerce with Agentic AI. Fill out the form below to
          connect and receive our investor pitch deck.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 bg-gray-900 p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold mb-1">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold mb-1">
              Company / Fund Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-semibold mb-1">
              Role / Title
            </label>
            <input
              id="role"
              name="role"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-semibold mb-1">
              Investment Interest / Focus
            </label>
            <input
              id="interest"
              name="investmentInterest"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message / Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
              placeholder="Tell us a bit about your interest, stage, and check size."
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm" aria-live="assertive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded hover:bg-teal-600 transition duration-200 disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : 'Submit Investor Inquiry'}
          </button>
        </form>
      </main>
    </>
  );
}
