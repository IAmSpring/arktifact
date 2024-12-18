'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface EpisodeFile {
  name: string;
  description: string;
  content: string;
}

interface EpisodeContentProps {
  episode: string;
  title: string;
  description: string;
  files: EpisodeFile[];
}

const EpisodeContent = ({ episode, title, description, files }: EpisodeContentProps) => {
  if (!files || files.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

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
                {title}
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              {description}
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
                  <SyntaxHighlighter
                    language="typescript"
                    style={vscDarkPlus}
                    className="rounded-lg"
                    showLineNumbers
                  >
                    {file.content}
                  </SyntaxHighlighter>
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