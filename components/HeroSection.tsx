'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"></div>

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-6 text-purple-400 font-cinzel">
          Chapter I
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-8 leading-tight"
        >
          Dawn of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Arktifacts
          </span>
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl mb-12 leading-relaxed text-gray-300"
        >
          Uncover the secrets of ancient realms, wield legendary artifacts, 
          and shape the destiny of worlds unknown.
        </motion.p>
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="#artifacts" 
            className="btn-primary"
          >
            Begin Your Journey
          </a>
          <a 
            href="#story" 
            className="btn-secondary"
          >
            Explore the Lore
          </a>
        </motion.div>
      </motion.div>

      {/* Optional: Animated particles or effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Add any background effects here */}
      </div>
    </section>
  );
};

export default HeroSection; 