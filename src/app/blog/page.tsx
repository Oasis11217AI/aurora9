'use client';

import { blogPosts } from './posts';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogIndexPage() {
  return (
    <>
      <Head>
        <title>Blog | AURORA9</title>
        <meta
          name="description"
          content="Explore the latest updates, insights, and advancements in agentic AI for ecommerce. Read AURORA9 blog posts here."
        />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 text-white">
        <h1 className="text-4xl font-bold text-teal-400 mb-10">AURORA9 Blog</h1>

        {blogPosts.length === 0 ? (
          <p className="text-gray-400">No posts available at the moment.</p>
        ) : (
          <ul className="space-y-6">
            {blogPosts.map((post) => (
              <li key={post.slug} className="border-b border-gray-700 pb-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-2xl text-blue-400 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
