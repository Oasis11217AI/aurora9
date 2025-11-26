'use client';

import { useMemo, useState } from 'react';

type Row = {
  capability: string;
  amazonTool: string;
  amazonRating: number; // 1..5
  auroraTool: string;
  auroraRating: number; // 1..5
  note?: string; // optional short note used in mobile accordion
};

const CATEGORIES: { key: string; label: string; rows: Row[] }[] = [
  {
    key: 'listings',
    label: 'Listings',
    rows: [
      {
        capability: 'Listing optimization',
        amazonTool: 'Enhance My Listing',
        amazonRating: 4,
        auroraTool: 'Creative & Listing Agent',
        auroraRating: 5,
        note: 'A/B support + brand voice control with lift tracking',
      },
      {
        capability: 'Content experiments',
        amazonTool: 'Manage Your Experiments',
        amazonRating: 4,
        auroraTool: 'Experimentation Copilot',
        auroraRating: 5,
        note: 'Multi-asset, geo/time splits, Bayesian lift',
      },
    ],
  },
  {
    key: 'ads',
    label: 'Ads',
    rows: [
      {
        capability: 'Ad creative (video)',
        amazonTool: 'Amazon Ads AI Video Generator',
        amazonRating: 3,
        auroraTool: 'Creative Studio Agent',
        auroraRating: 5,
        note: 'Iterates hooks/thumbnails, ties to incremental ROAS',
      },
      {
        capability: 'Auction/incrementality',
        amazonTool: 'Native Ads dashboards',
        amazonRating: 3,
        auroraTool: 'PPC Incrementality & Budgeting Agent',
        auroraRating: 5,
        note: 'Geo/time tests to isolate true lift vs cannibalization',
      },
    ],
  },
  {
    key: 'pricing',
    label: 'Pricing',
    rows: [
      {
        capability: 'Dynamic repricing',
        amazonTool: 'Automate Pricing',
        amazonRating: 3,
        auroraTool: 'Buy Box & Pricing Strategy Agent',
        auroraRating: 5,
        note: 'Explains “why win/loss,” optimizes for contribution margin',
      },
      {
        capability: 'Fair Pricing risk',
        amazonTool: '—',
        amazonRating: 2,
        auroraTool: 'Omnichannel Price Harmony Agent',
        auroraRating: 5,
        note: 'Models suppression risk before price changes',
      },
    ],
  },
  {
    key: 'inventory',
    label: 'Inventory',
    rows: [
      {
        capability: 'Restock guidance',
        amazonTool: 'Restock / Min. Inventory',
        amazonRating: 4,
        auroraTool: 'In-Stock Reality & Pacing Agent',
        auroraRating: 5,
        note: 'Accounts for “Reserved”/FC transfer, syncs ads and price',
      },
      {
        capability: 'FBA reimbursements',
        amazonTool: 'Manual audits/partial tooling',
        amazonRating: 2,
        auroraTool: 'FBA Audit & Reimbursement Agent',
        auroraRating: 5,
        note: 'Automates weight-dim/lost/damaged claim packets',
      },
    ],
  },
  {
    key: 'analytics',
    label: 'Analytics',
    rows: [
      {
        capability: 'Search intelligence',
        amazonTool: 'Brand Analytics + SQP',
        amazonRating: 4,
        auroraTool: 'Attribution Reconstruction Agent',
        auroraRating: 5,
        note: 'Infers missing terms, builds term cohorts',
      },
      {
        capability: 'Unified data workbench',
        amazonTool: 'Custom Analytics',
        amazonRating: 4,
        auroraTool: 'Decision Hub',
        auroraRating: 5,
        note: 'Streams insights into actions via playbooks',
      },
    ],
  },
  {
    key: 'experiments',
    label: 'Experiments',
    rows: [
      {
        capability: 'End-to-end test orchestration',
        amazonTool: 'Manage Your Experiments',
        amazonRating: 4,
        auroraTool: 'Experimentation Copilot',
        auroraRating: 5,
        note: 'Cross-asset, locale-aware, auto-promote winners',
      },
    ],
  },
  {
    key: 'crm',
    label: 'CRM/VoC',
    rows: [
      {
        capability: 'Lifecycle messaging',
        amazonTool: 'Brand Tailored Promotions',
        amazonRating: 4,
        auroraTool: 'Lifecycle & CRM Proxy Agent',
        auroraRating: 5,
        note: 'Compliant zero-party data loops, replenishment nudges',
      },
      {
        capability: 'VoC stabilization',
        amazonTool: 'Voice of the Customer',
        amazonRating: 3,
        auroraTool: 'VoC Stabilizer',
        auroraRating: 5,
        note: 'Stable thresholds + root-cause clustering',
      },
    ],
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, value));
  const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i < full), [full]);
  return (
    <div className="flex items-center gap-1" aria-label={`${full} out of 5`}>
      {stars.map((on, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${on ? 'text-yellow-400' : 'text-gray-600'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27L15.18 18l-1.64-5.03L18 9.24l-5.19-.03L10 4 7.19 9.21 2 9.24l4.46 3.73L4.82 18 10 15.27z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-400">{full}/5</span>
    </div>
  );
}

export default function HowItWorksPage() {
  const [active, setActive] = useState<string>('listings');

  const activeCategory = useMemo(
    () => CATEGORIES.find(c => c.key === active) ?? CATEGORIES[0],
    [active]
  );

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">How AURORA9 Works: Your Path to Autonomous E-commerce Growth</h1>

        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          For e-commerce sellers, SMBs, Mid-size, and Enterprise businesses, AURORA9 redefines how you operate. We deploy a fully autonomous AI workforce that acts as high-performing digital team members, empowering you to scale faster, smarter, and with full confidence—without the burden of constant human micromanagement.
        </p>

        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Our platform integrates seamlessly with your existing marketplace backends, including Amazon Seller Central, Shopify, and Walmart, to securely extract and learn from both historical and real-time data. This continuous intelligence fuels our specialized AI agents, transforming raw data into actionable growth strategies.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Modular AI Agents for Specialized E-commerce Functions</h2>
        <p className="text-gray-300 mb-6">
          At the heart of AURORA9 are specialized AI agents, each meticulously trained to manage key e-commerce functions. From PPC optimization and listing strategy (Marketing AI Agent) to dynamic inventory management and proactive stock control (Inventory Management AI Agent), our modular design ensures every aspect of your operations is covered. This allows for precise, SEO-optimized actions across your digital storefronts.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Intelligent Operation Modes for Every Level of Control</h2>
        <p className="text-gray-300 mb-4">
          AURORA9 understands that every business has unique needs for autonomy. Our platform offers three flexible modes, ensuring you retain the perfect balance of control and automation:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
          <li>
            <strong>Progressive Mode:</strong> For those who prefer ultimate oversight, our AI agents suggest data-backed decisions and wait for your explicit approval before executing any actions. You remain fully in control, with AI providing intelligent guidance.
          </li>
          <li>
            <strong>Semi-autonomous Mode:</strong> Experience the power of AI assistance. Our agents provide intelligent suggestions and automated execution for routine tasks, keeping you informed with comprehensive oversight. AI helps, but you maintain the final say.
          </li>
          <li>
            <strong>Autonomous Mode:</strong> Unleash the full potential of your digital workforce. In this mode, AURORA9&apos;s AI agents independently strategize, optimize, and execute tasks across your e-commerce channels without requiring human approval. They act as your 24/7 AI team, driving continuous growth and efficiency.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Powered by Advanced AI &amp; Data Foundations</h2>
        <p className="text-gray-300 mb-6">
          Our robust platform is built on AWS Cloud, ensuring enterprise-grade performance, AI governance, and unmatched scalability. We leverage cutting-edge Large Language Models (LLMs), a robust Retrieval Augmented Generation (RAG) system for factual accuracy, and precise prompt engineering to guide agent behavior and deliver explainable AI decisions. This powerful AI infrastructure creates a resilient and adaptive digital workforce that truly redefines e-commerce automation.
        </p>

        <p className="text-gray-300">
          With AURORA9, you&apos;re not just automating tasks; you&apos;re building a smarter, self-optimizing business that&apos;s ready to scale and outperform.
        </p>

        {/* --- INSERTED SECTION: Amazon vs AURORA9 Comparison --- */}
        <section id="comparison" className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Amazon AI tools vs. AURORA9 Autonomous Agents
          </h2>
          <p className="text-gray-300 mb-6">
            Ratings reflect capability depth for pro brands managing at scale. Use the tabs to explore by category.
          </p>

          {/* Sticky subnav pills */}
          <div className="sticky top-4 z-10 bg-gray-950/90 backdrop-blur supports-[backdrop-filter]:bg-gray-950/70 -mx-6 px-6 py-3 border-y border-gray-800">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`px-3 py-1.5 rounded-full text-sm transition ${
                    active === cat.key
                      ? 'bg-white text-gray-900'
                      : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                  }`}
                  aria-pressed={active === cat.key}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block mt-6 overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900">
                <tr className="text-gray-300">
                  <th className="px-4 py-3">Capability</th>
                  <th className="px-4 py-3">Amazon tool</th>
                  <th className="px-4 py-3">Amazon rating</th>
                  <th className="px-4 py-3">AURORA9 agent</th>
                  <th className="px-4 py-3">AURORA9 rating</th>
                </tr>
              </thead>
              <tbody>
                {activeCategory.rows.map((r, idx) => (
                  <tr key={idx} className="border-t border-gray-800">
                    <td className="px-4 py-4 font-medium text-white">{r.capability}</td>
                    <td className="px-4 py-4 text-gray-300">{r.amazonTool}</td>
                    <td className="px-4 py-4"><Stars value={r.amazonRating} /></td>
                    <td className="px-4 py-4 text-gray-300">{r.auroraTool}</td>
                    <td className="px-4 py-4"><Stars value={r.auroraRating} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden mt-4 space-y-3">
            {activeCategory.rows.map((r, idx) => (
              <details key={idx} className="rounded-xl border border-gray-800">
                <summary className="cursor-pointer px-4 py-3 font-medium text-white flex items-center justify-between">
                  <span>{r.capability}</span>
                  <span className="ml-3 text-xs text-gray-400">(tap to expand)</span>
                </summary>
                <div className="px-4 pb-4 pt-2 text-sm">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-gray-400">Amazon</span>
                    <Stars value={r.amazonRating} />
                  </div>
                  <div className="text-gray-200 mb-2">{r.amazonTool}</div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-gray-400">AURORA9</span>
                    <Stars value={r.auroraRating} />
                  </div>
                  <div className="text-gray-200">{r.auroraTool}</div>
                  {r.note && <p className="text-gray-400 mt-2">{r.note}</p>}
                </div>
              </details>
            ))}
          </div>
        </section>
        {/* --- END INSERTED SECTION --- */}
      </div>
    </main>
  );
}
