/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export (required for GitHub Pages)
  images: {
    unoptimized: true, // Prevents Next.js image optimization issues on static hosts
  },
  trailingSlash: true, // Ensures paths like /about/ instead of /about
};

export default nextConfig;
