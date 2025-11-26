'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head';

export default function InvestorsPage() {
  const [state, handleSubmit] = useForm('xldnkbqj');

  if (state.succeeded) {
    return (
      <>
        <Head>
          <title>Investor Inquiry Received | AURORA9</title>
        </Head>
        <main className="max-w-3xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-teal-500 mb-6">Thank You!</h1>
          <p className="text-lg text-gray-700" aria-live="polite">
            Your interest in AURORA9 has been received. A member of our team will contact you shortly.
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
        <h1 className="text-4xl font-bold mb-6 text-teal-500 text-center">Invest in AURORA9</h1>

        <p className="text-gray-700 mb-8 text-center">
          We&apos;re building the future of e-commerce with Agentic AI. Fill out the form below to connect and
          receive our investor pitch deck.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
            <input
              id="firstName"
              name="First Name"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
            <input
              id="lastName"
              name="Last Name"
              type="text"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-3 border rounded bg-gray-100 text-gray-800"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="phone" className="b
