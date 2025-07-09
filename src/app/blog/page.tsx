import Link from 'next/link';
import { posts } from './posts';

const BlogPage = () => {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.map((post) => (
        <article key={post.slug} className="mb-10">
          <h2 className="text-2xl font-semibold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="text-sm text-gray-400">{post.date}</p>
          <p className="mt-2 text-gray-200">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="text-teal-400 mt-2 inline-block">
            Read more →
          </Link>
        </article>
      ))}
    </main>
  );
};

export default BlogPage;
