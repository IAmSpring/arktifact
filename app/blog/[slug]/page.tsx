'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug;

  // This would normally come from a CMS or API
  const post = {
    title: "The Making of Episode 1: Origins of Honor",
    date: "January 15, 2024",
    author: "Lead Writer",
    readTime: "5 min",
    category: "Behind the Scenes",
    content: `
      <p>When we first conceived the idea of Arktifact Chronicles, we knew we wanted to create something different. Not just another NFT collection, but a living, breathing alternate history that collectors could own a piece of.</p>
      
      <h2>The Beginning</h2>
      <p>Episode 1 began with a simple question: What if humanity's earliest civilizations had made different choices? What if the first tribes had united not through conquest, but through wisdom and shared purpose?</p>
      
      <h2>Crafting the Artifacts</h2>
      <p>Each NFT in Episode 1 was carefully designed to represent a crucial moment in this alternate timeline. The Honor Symbol, our first legendary artifact, represents the exact moment when two rival tribes chose cooperation over conflict.</p>
      
      <h2>The Technical Challenge</h2>
      <p>Creating NFTs that could tell a story was our biggest challenge. We wanted each piece to stand alone as beautiful art while also being part of a larger narrative tapestry.</p>
      
      <h2>Looking Forward</h2>
      <p>As we move forward with future episodes, the groundwork laid in Episode 1 will continue to influence and shape the story. Each artifact is not just a collectible—it's a piece of living history.</p>
    `
  };

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