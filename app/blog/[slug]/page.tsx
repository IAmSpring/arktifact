'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { BlogPost } from '@/types/blog';
import { blogPosts } from '../../../data/blog';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Link 
              href="/blog"
              className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-cinzel font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 transition-all">
                Twitter
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 transition-all">
                Discord
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPost; 