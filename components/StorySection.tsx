'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-gray-800 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/story/season1earth.webp"
          alt="Story Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-purple-400 font-cinzel text-lg">Discover Their Journey</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-cinzel font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              An Alternative History
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12"
          >
            In a parallel timeline, humanity's path took a different turn. From ancient tribes to cosmic civilizations, 
            the Arktifact Chronicles reveals how wisdom and strength shaped their destiny through eight transformative ages. 
            This is not our history—this is their story.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">8 Pivotal Ages</h3>
              <p className="text-gray-300">
                Each episode unveils a crucial moment in their timeline, where choices and artifacts 
                forged a path different from our own.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">Sacred Arktifacts</h3>
              <p className="text-gray-300">
                Collect the relics that shaped their civilization—each NFT holds a piece of this 
                alternate history's wisdom and power.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              href="/story"
              className="btn-primary w-full sm:w-auto"
            >
              Explore Their Timeline
            </Link>
            <a 
              href="https://opensea.io/collection/arktifact"
              className="btn-secondary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collect Arktifacts
            </a>
            <Link 
              href="/how-it-was-made/1"
              className="text-purple-400 hover:text-purple-300 transition-colors underline w-full sm:w-auto text-center"
            >
              Behind Their Story
            </Link>
          </motion.div>

          {/* Timeline Navigation */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 pt-12 border-t border-gray-700"
          >
            <h3 className="text-2xl font-cinzel font-bold mb-6 text-purple-400">
              Timeline Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((episode) => (
                <Link
                  key={episode}
                  href={`/story#episode-${episode}`}
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <span className="block text-sm text-gray-400 group-hover:text-purple-400 transition-colors">Age</span>
                  <span className="font-cinzel font-bold">{episode}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* What is Arktifact Chronicles */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
              What is Arktifact Chronicles?
            </h3>
            <p className="text-gray-300 mb-6">
              A window into an alternate Earth, where humanity's journey took unexpected turns. 
              Through eight distinct ages, discover how their choices, innovations, and values created 
              a civilization both familiar and wonderfully different from our own. Each Arktifact holds 
              a story of their courage, knowledge, resilience, and unity.
            </p>
            <Link 
              href="/story"
              className="text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              Begin Their Journey →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection; 