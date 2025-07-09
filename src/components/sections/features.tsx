'use client';

import { FaGlobe, FaLightbulb, FaUserShield, FaProjectDiagram, FaBolt, FaCogs, FaChartLine, FaBoxes, FaBrain } from 'react-icons/fa';

const features = [
  {
    title: 'Predictive Risk Forecaster',
    description:
      'Anticipate regulatory and geopolitical threats that may impact your listings before Amazon even announces them.',
    icon: <FaGlobe size={24} />,
  },
  {
    title: 'AI-Driven Product Innovation',
    description:
      'Leverage customer sentiment and LLMs to design high-ROI product concepts before entering saturated markets.',
    icon: <FaLightbulb size={24} />,
  },
  {
    title: 'Behavioral Nudge Engine',
    description:
      'Run real-time A/B tests and micro-interactions to boost your conversion rates based on buyer behavior simulations.',
    icon: <FaProjectDiagram size={24} />,
  },
  {
    title: 'Cross-Channel Brand Cohesion',
    description:
      'Ensure messaging consistency and optimize ad ROI across all marketing channels, not just Amazon.',
    icon: <FaUserShield size={24} />,
  },
  {
    title: 'Progressively Autonomous Mode',
    description:
      'AI recommends and executes tasks only after approval, learning user preferences over time.',
    icon: <FaCogs size={24} />,
  },
  {
    title: 'Semi-Autonomous Mode',
    description:
      'AI assists with smart suggestions and partial automation, with human oversight.',
    icon: <FaBolt size={24} />,
  },
  {
    title: 'Fully Autonomous Mode',
    description:
      'Agents independently optimize operations to meet set goals, requiring minimal human input.',
    icon: <FaBrain size={24} />,
  },
  {
    title: 'Marketing & Advertising',
    description:
      'Automated ad spend allocation and live A/B testing across channels.',
    icon: <FaChartLine size={24} />,
  },
  {
    title: 'SEO & Keywords',
    description:
      'Automated metadata management and optimization to improve rankings.',
    icon: <FaLightbulb size={24} />,
  },
  {
    title: 'UX/UI Optimization',
    description:
      'Uses simulated heatmaps and layout tests to improve user experience.',
    icon: <FaProjectDiagram size={24} />,
  },
  {
    title: 'Inventory Management',
    description:
      'Predictive restocking and smart sync across all selling platforms.',
    icon: <FaBoxes size={24} />,
  },
  {
    title: 'Data Intelligence',
    description:
      'Integrated dashboards offering actionable insights across agents.',
    icon: <FaChartLine size={24} />,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">AURORA9 Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-left hover:shadow-lg transition duration-300 border border-gray-700"
            >
              <div className="flex items-center mb-4 text-teal-400">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
