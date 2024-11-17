'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Link from 'next/link';

const LoreSection = () => {
  return (
    <section id="lore" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-cinzel font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              The Lore of Arktifact
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12"
          >
            Delve deep into the rich lore of Arktifact Chronicles, where ancient powers, 
            legendary heroes, and epic adventures await you.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                Ancient Wisdom
              </h3>
              <p className="text-gray-300">
                Uncover the secrets of humanity's alternate path through time, preserved in 
                sacred artifacts and ancient texts.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                Living History
              </h3>
              <p className="text-gray-300">
                Experience a world where choices echoed through ages, shaping a destiny 
                different from our own.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link 
              href="/story"
              className="btn-primary"
            >
              Explore the Full Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoreSection; 