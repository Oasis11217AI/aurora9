'use client';

// ✅ Route: /about — About Page
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>

        <p className="mb-4 text-gray-300">
          At <strong>AURORA9</strong>, we’re building the future of ecommerce with a bold vision: 
          to create a fully autonomous Agentic AI workforce that drives growth—without the need 
          for human micromanagement. Our platform empowers businesses to scale faster, smarter, 
          and with full confidence by deploying intelligent Agentic AI agents that act as 
          high-performing digital team members.
        </p>

        <p className="mb-4 text-gray-300">
          Our Agentic AI agents seamlessly integrate with leading marketplace platforms like 
          Amazon, Walmart, and Shopify, gaining secure, real-time access to your sales, marketing, 
          and customer data. From there, they do the heavy lifting—executing complex tasks such 
          as ad management, pricing strategy, demand forecasting, and revenue optimization with 
          zero manual input required (unless you choose otherwise).
        </p>

        <p className="mb-4 text-gray-300">
          <strong>AURORA9</strong> offers three distinct operational modes tailored to your needs:
        </p>

        <ul className="text-left text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>Autonomous Mode:</strong> Agentic AI agents operate independently and make 
            data-driven decisions on your behalf instantly and at scale.
          </li>
          <li>
            <strong>Semi-autonomous Mode:</strong> AI assists with intelligent suggestions and 
            automated execution, keeping you in control with oversight.
          </li>
          <li>
            <strong>Progressive Mode:</strong> AI Agents provide strategic recommendations, 
            leaving final decisions to your team for full control and transparency.
          </li>
        </ul>

        <p className="mb-4 text-gray-300">
          By combining Agentic AI with automation, compliance-ready governance, and deep 
          marketplace integration, AURORA9 becomes more than just a tool—it’s your next-gen 
          digital workforce. Whether you&apos;re a DTC brand, B2B operator, or enterprise retailer, 
          AURORA9 is built to help you unlock rapid growth while preserving control, compliance, 
          and trust.
        </p>

        <p className="font-semibold text-white mt-6">
          This is AI you can rely on.<br />
          This is the new era of intelligent commerce.<br />
          This is <strong>AURORA9</strong>.
        </p>
      </section>
    </main>
  );
}
