'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Arktifact Chronicles
            </h3>
            <p className="text-gray-400 mb-4">
              Journey through humanity's greatest story, from tribal origins to cosmic enlightenment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-gray-400 hover:text-purple-400 transition-colors">
                  The Story
                </a>
              </li>
              <li>
                <a href="#artifacts" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Artifacts
                </a>
              </li>
              <li>
                <a href="https://opensea.io/collection/arktifact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  OpenSea
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com/arktifact" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/arktifact" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="text-center mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2024 Arktifact Chronicles. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 