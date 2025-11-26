'use client';

import { blogPosts } from '../posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

type PageProps = {
  params: { slug: string };
};

// Used by Next.js for static generation of all slugs
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Optional SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post?.title ?? 'Post Not Found',
    description: post?.excerpt ?? '',
  };
}

// HTML Sanitization
function sanitize(html: string): string {
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  return DOMPurify.sanitize(html);
}

export default async function BlogPost({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const sanitizedContent = sanitize(post.content);

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-white">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">{post.title}</h1>
      <article
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </main>
  );
}
