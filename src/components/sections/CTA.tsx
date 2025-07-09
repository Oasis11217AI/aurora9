'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function CTA() {
  useEffect(() => {
    const scriptId = 'mailerlite-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.mailerlite.com/js/universal.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openMailerLiteModal = () => {
    // @ts-expect-error MailerLite modal global function
    if (typeof window.MailerLite !== 'undefined' && window.MailerLite.showPopup) {
      // @ts-expect-error MailerLite modal global function
      window.MailerLite.showPopup('1239222', {
        uid: '4z9z7k2t0m',
      });
    } else {
      alert('Popup is still loading. Please wait a moment and try again.');
    }
  };

  return (
    <section className="bg-teal-600 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Activate Your AI Workforce?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-white/90 mb-8"
        >
          Join the future of autonomous ecommerce. Let AURORA9 optimize your marketing, listings, and operations while you focus on scaling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {/* Request Early Access triggers modal */}
          <button
            onClick={openMailerLiteModal}
            className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Request Early Access
          </button>

          {/* Book a Demo is disabled and shows tooltip */}
          <div className="relative group">
            <button
              disabled
              className="border border-white px-6 py-3 rounded-full font-semibold text-white opacity-50 cursor-not-allowed"
            >
              Book a Demo
            </button>
            <div className="absolute w-64 left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
              Coming soon. Subscribe for launch notification.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
