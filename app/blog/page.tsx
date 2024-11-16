'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getFeaturedPosts, getRegularPosts } from '../../data/blog-posts';

const BlogPage = () => {
  const featuredPost = getFeaturedPosts()[0]; // Get the first featured post
  const regularPosts = getRegularPosts();

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Featured Post */}
          <motion.div variants={fadeInUp} className="mb-24">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block relative h-[600px] rounded-xl overflow-hidden group"
            >
              <Image
                src={featuredPost.featuredImage}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-purple-500/20 text-purple-400 mb-4 inline-block">
                    Featured
                  </span>
                  <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-4 text-white">
                    {featuredPost.title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-6 max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold text-white">{featuredPost.author}</p>
                      <p className="text-gray-400">{featuredPost.date} • {featuredPost.readTime} read</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Latest Posts */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-cinzel font-bold mb-8">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
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
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500/20 text-purple-400 mb-4 inline-block">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-cinzel font-bold mb-2">{post.title}</h3>
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPage; 