'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
  imageUrl: string;
  featured?: boolean;
  featuredImage?: string;
  authorAvatar?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Complete Timeline: Understanding Humanity's Alternative Path",
    excerpt: "An in-depth exploration of how the Arktifact Chronicles timeline diverges from known history, and what these changes mean for collectors and storytellers alike.",
    date: "2024-01-15",
    author: "Chief Lorekeeper",
    authorAvatar: "/images/avatars/lorekeeper.jpg",
    readTime: "12 min",
    category: "Featured Story",
    slug: "complete-timeline-guide",
    imageUrl: "/images/blog/placeholder.jpg",
    featuredImage: "/images/blog/featured-timeline.jpg",
    featured: true
  },
  {
    id: '2',
    title: "The Making of Episode 1: Origins of Honor",
    excerpt: "Dive deep into how we crafted the first episode of Arktifact Chronicles, from concept to final execution.",
    date: "2024-01-10",
    author: "Lead Writer",
    readTime: "5 min",
    category: "Behind the Scenes",
    slug: "making-of-episode-1",
    imageUrl: "/images/blog/placeholder.jpg"
  },
  {
    id: '3',
    title: "Understanding the Arktifact Timeline",
    excerpt: "Explore how our alternate history diverges from the known path, and what makes it unique.",
    date: "2024-01-05",
    author: "Lore Master",
    readTime: "8 min",
    category: "Lore",
    slug: "understanding-timeline",
    imageUrl: "/images/blog/placeholder.jpg"
  },
  {
    id: '4',
    title: "Collecting Guide: Episode 1 NFTs",
    excerpt: "A comprehensive guide to the NFTs available in Episode 1, their rarity, and significance.",
    date: "2024-01-05",
    author: "NFT Specialist",
    readTime: "6 min",
    category: "Guides",
    slug: "collecting-guide-ep1",
    imageUrl: "/images/blog/placeholder.jpg"
  }
];

const BlogPage = () => {
  const [filter, setFilter] = useState<string>('all');
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                Chronicles Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Insights, updates, and deep dives into the world of Arktifact
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div variants={fadeInUp} className="mb-16">
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="block bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900"
              >
                <div className="relative h-96">
                  <Image 
                    src={featuredPost.featuredImage || featuredPost.imageUrl} 
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {featuredPost.authorAvatar && (
                      <img 
                        src={featuredPost.authorAvatar} 
                        alt={featuredPost.author}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-bold text-purple-400">{featuredPost.author}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime} read</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-cinzel font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  
                  <span className="text-purple-400 font-bold">Read Full Article →</span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Featured', 'Lore', 'Behind the Scenes', 'Guides'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category.toLowerCase())}
                className={`px-6 py-2 rounded-full font-bold transition-all
                  ${filter === category.toLowerCase()
                    ? category === 'Featured'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Regular Posts Grid */}
          <motion.div variants={fadeInUp} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500/80">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  
                  <h2 className="text-xl font-cinzel font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                    <span className="text-purple-400">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPage; 