'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-teal-500">Contact Us</h1>

      <p className="text-gray-700 mb-10 text-center">
        We’d love to hear from you! Fill out the form below or email us at{' '}
        <a href="mailto:aurora9ai@gmail.com" className="text-teal-500 hover:underline">
          aurora9ai@gmail.com
        </a>
      </p>

      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">
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
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="How can we help you?"
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded hover:bg-teal-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
