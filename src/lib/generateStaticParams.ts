export const blogPosts = [
  {
    slug: 'introduction-to-agentic-ai',
    title: 'Introduction to Agentic AI',
    excerpt: 'Explore how Agentic AI is redefining autonomous ecommerce and real-time decision-making.',
    content: `<p>Agentic AI represents a new paradigm where autonomous agents operate with purpose-driven intelligence...</p>
              <p>This approach enables systems like AURORA9 to anticipate needs, react with agility, and optimize ecommerce in real-time.</p>`,
  },
  {
    slug: 'how-aurora9-transforms-operations',
    title: 'How AURORA9 Transforms Operations',
    excerpt: 'Discover how AURORA9 leverages AI agents to automate, scale, and personalize ecommerce operations.',
    content: `<p>AURORA9 is built on the foundation of Agentic AI — each agent is capable of independently managing tasks across Amazon Seller Central, inventory syncing, PPC ad optimization, and even support workflows.</p>
              <p>This modular autonomy allows brands to scale with minimal human input while improving performance over time.</p>`,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
