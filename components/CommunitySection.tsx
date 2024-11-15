'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const CommunitySection = () => {
  return (
    <section id="join" className="py-24 bg-gray-800">
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
              Research the Community
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12"
          >
            Be part of a community that values storytelling, history, and the power of digital artifacts. 
            Connect with fellow collectors and explore humanity's greatest story together.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">Discord Community</h3>
              <p className="text-gray-300 mb-6">Join our Discord for exclusive updates, lore discussions, and collector events.</p>
              <a 
                href="https://discord.gg/arktifact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join Discord
              </a>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">Twitter Updates</h3>
              <p className="text-gray-300 mb-6">Follow us on Twitter for the latest news, drops, and community highlights.</p>
              <a 
                href="https://twitter.com/arktifact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection; 