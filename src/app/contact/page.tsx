'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mvgrjgjp', {
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
        // Helpful logging so you can see exact Formspree errors in DevTools
        const body = await res.json().catch(() => null);
        console.error('Formspree error', res.status, body);
        setError('Something went wrong sending your message. Please try again.');
      }
    } catch (err) {
      console.error('Network error', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | AURORA9</title>
        <meta
          name="description"
          content="Have questions or need support? Contact AURORA9 — we’d love to hear from you."
        />
      </Head>

      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-500">Contact Us</h1>

        <p className="text-gray-300 mb-10 text-center">
          We’d love to hear from you! Fill out the form below or email us at{' '}
          <a href="mailto:aurora9@aurora9.ai" className="text-teal-400 hover:underline">
            aurora9@aurora9.ai
          </a>
        </p>

        {submitted ? (
          <p
            className="text-green-400 text-center text-lg font-semibold"
            aria-live="polite"
          >
            ✅ Your message has been sent successfully!
          </p>
        ) : (
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full p-3 border rounded bg-gray-900 text-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full p-3 border rounded bg-gray-900 text-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="How can we help you?"
                className="w-full p-3 border rounded bg-gray-900 text-gray-100"
              ></textarea>
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
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </main>
    </>
  );
}
