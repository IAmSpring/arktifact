'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { EpisodeFile } from '@/data/episode-files/index';

// Dynamically import CodeViewer with no SSR to prevent hydration issues
const DynamicCodeViewer = dynamic(() => import('@/components/CodeViewer'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded-lg h-96"></div>
  ),
});

interface EpisodeContentProps {
  episode: string;
  files: EpisodeFile[];
}

const EpisodeContent = ({ episode, files }: EpisodeContentProps) => {
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
                Behind Episode {episode}
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore how this episode was crafted, from character development to final script
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-8">
            {files.map((file) => (
              <div key={file.name} className="bg-gray-800 rounded-lg p-6 overflow-hidden">
                <h2 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                  {file.name}
                </h2>
                <p className="text-gray-300 mb-6">{file.description}</p>
                <div className="relative w-full">
                  <Suspense fallback={
                    <div className="animate-pulse bg-gray-700 rounded-lg h-96"></div>
                  }>
                    <DynamicCodeViewer filePath={file.path} />
                  </Suspense>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12 mb-24">
            <Link 
              href="/story"
              className="btn-secondary inline-block"
            >
              Back to Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default EpisodeContent; 