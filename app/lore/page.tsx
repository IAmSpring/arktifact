'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';

// Filter only lore-related posts
const lorePosts = blogPosts.filter(post => 
  ['Character Lore', 'Artifact Lore', 'World History'].includes(post.category)
);

export default function LorePage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Arktifact Lore
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delve deep into the rich history and untold stories of the Arktifact Chronicles universe
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full font-bold transition-all bg-purple-600 text-white">
              All
            </button>
            <button className="px-6 py-2 rounded-full font-bold transition-all bg-gray-800 text-gray-400 hover:bg-gray-700">
              Character Lore
            </button>
            <button className="px-6 py-2 rounded-full font-bold transition-all bg-gray-800 text-gray-400 hover:bg-gray-700">
              Artifact Lore
            </button>
            <button className="px-6 py-2 rounded-full font-bold transition-all bg-gray-800 text-gray-400 hover:bg-gray-700">
              World History
            </button>
          </motion.div>

          {/* Lore Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lorePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500/20 text-purple-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.readTime} read</span>
                  </div>
                  <h2 className="text-xl font-cinzel font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.authorAvatar}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold">{post.author}</p>
                      <p className="text-sm text-gray-400">{post.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 