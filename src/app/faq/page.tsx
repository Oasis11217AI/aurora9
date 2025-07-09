'use client';

import React, { useState } from 'react';
import Head from 'next/head';

const faqs = [
  {
    question: 'How does AURORA9 integrate with Amazon Seller Central?',
    answer:
      "AURORA9 connects securely through Amazon's SP-API, allowing our AI agents to access and optimize listings, ads, inventory, and customer service workflows automatically.",
  },
  {
    question: 'What are Agentic AI Agents and how are they different from regular automation tools?',
    answer:
      'Agentic AI Agents are intelligent autonomous systems capable of making strategic decisions without manual input. Unlike basic automation scripts, they operate with high adaptability, learning from performance data to optimize continuously.',
  },
  {
    question: 'Is AURORA9 suitable for small to medium-sized Amazon sellers?',
    answer:
      'Absolutely. AURORA9 offers flexible subscription tiers including a freemium plan, making it accessible to businesses of all sizes while still offering enterprise-grade automation capabilities.',
  },
  {
    question: 'What types of tasks can AURORA9 handle?',
    answer:
      'AURORA9 can manage inventory, pricing, keyword optimization, PPC advertising, product listing improvements, and customer service interactions automatically.',
  },
  {
    question: 'Can I retain control over certain tasks while using AURORA9?',
    answer:
      'Yes. AURORA9 supports multiple operating modes: Suggestive (AI recommends), Semi-Autonomous (AI assists with oversight), and Fully Autonomous (AI acts independently).',
  },
  {
    question: 'How secure is my data when using AURORA9?',
    answer:
      'We use advanced encryption and secure integration through Amazon SP-API protocols. Our platform is hosted on AWS with robust security layers to protect your business data.',
  },
  {
    question: 'Does AURORA9 provide performance insights and analytics?',
    answer:
      'Yes. Our dashboard offers real-time analytics, AI-generated insights, and visual reports on sales, traffic, inventory levels, and campaign performance.',
  },
  {
    question: 'Is AURORA9 compatible with marketplaces beyond Amazon?',
    answer:
      'While we are currently focused on Amazon Seller Central, future updates will include integrations with Walmart, eBay, and Shopify.',
  },
  {
    question: 'Do I need technical expertise to use AURORA9?',
    answer:
      'No technical background is required. AURORA9 is designed with a user-friendly interface and onboarding system that simplifies setup and management.',
  },
  {
    question: 'When is the AURORA9 platform launching?',
    answer:
      'Our MVP (Minimum Viable Product) is scheduled to launch by early Q4 2025 with freemium access for early adopters.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Head>
        <title>FAQ | AURORA9</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about AURORA9's autonomous AI platform for Amazon sellers."
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ question, answer }) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: answer,
              },
            })),
          }),
        }} />
      </Head>
      <h1 className="text-4xl font-bold text-center text-teal-500 mb-12">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow">
            <button
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="ml-2 text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
