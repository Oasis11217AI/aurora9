import React, { JSX } from 'react';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: JSX.Element;
}

export const posts: Post[] = [
  {
    slug: 'unlock-ecommerce-growth-with-ai',
    title: 'Unlock Unprecedented E-commerce Growth: How Autonomous AI Agents are Revolutionizing Amazon Seller Operations',
    date: '2025-07-05',
    excerpt:
      'Discover how AURORA9’s intelligent AI agents are transforming Amazon Seller Central operations into fully autonomous, self-optimizing digital workforces.',
    content: (
      <>
        <p>
          In today&apos;s fiercely competitive digital marketplace, e-commerce sellers face a relentless battle for growth.
        </p>
        <p>
          Meet <strong>AURORA9</strong>: your 24/7 AI-powered digital workforce.
        </p>
        <h3>Marketing AI Agent</h3>
        <p>Autonomously handles PPC campaigns and bid optimization.</p>
        <h3>Inventory Management AI Agent</h3>
        <p>Forecasts demand, reorders stock, and prevents oversupply.</p>
        <ul>
          <li><strong>Progressive Mode:</strong> You approve actions.</li>
          <li><strong>Semi-Autonomous:</strong> Oversight only.</li>
          <li><strong>Autonomous:</strong> Full AI control.</li>
        </ul>
        <h3>Conclusion</h3>
        <p>
          AURORA9 reduces manual effort and drives measurable growth.
        </p>
      </>
    ),
  },
];
