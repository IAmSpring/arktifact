'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useState } from 'react';

const StatsSection = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const stats = [
    {
      id: 'total-eth',
      value: '888.8',
      label: 'ETH Total Value',
      subtext: 'Locked in Arktifacts',
      icon: '⟠'
    },
    {
      id: 'holders',
      value: '777',
      label: 'Unique Holders',
      subtext: 'Across All Episodes',
      icon: '👥'
    },
    {
      id: 'artifacts',
      value: '888',
      label: 'Total Arktifacts',
      subtext: 'Season 1 Collection',
      icon: '🏺'
    },
    {
      id: 'floor',
      value: '0.888',
      label: 'ETH Floor Price',
      subtext: 'Current Minimum',
      icon: '📈'
    }
  ];

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Collection Stats
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              The growing legacy of Arktifact Chronicles in numbers
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-gray-900 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(stat.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="text-6xl mb-4 font-bold">
                  <span className="mr-2">{stat.icon}</span>
                  <span className={`
                    text-transparent bg-clip-text 
                    ${isHovered === stat.id 
                      ? 'bg-gradient-to-r from-purple-400 to-pink-600' 
                      : 'bg-gradient-to-r from-gray-100 to-gray-300'}
                    transition-all duration-300
                  `}>
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-xl font-cinzel font-bold mb-2 text-purple-400">
                  {stat.label}
                </h3>
                <p className="text-gray-400">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <div className="bg-gray-900 rounded-lg p-8 inline-block">
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                Season 1 Distribution
              </h3>
              <div className="flex items-center justify-center gap-8">
                <div>
                  <span className="text-3xl font-bold text-gray-300">111</span>
                  <p className="text-sm text-gray-400">NFTs per Episode</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-300">8</span>
                  <p className="text-sm text-gray-400">Episodes</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-300">88.8%</span>
                  <p className="text-sm text-gray-400">Minted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 