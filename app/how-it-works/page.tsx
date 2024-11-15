'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';

const HowItWorksPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                How to Experience Arktifact Chronicles
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Unlock the story of humanity through NFT collection or episode purchase
            </p>
          </motion.div>

          {/* Ways to Access */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center">Two Ways to Access Episodes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* NFT Collection Method */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                  1. Collect NFTs
                </h3>
                <p className="text-gray-300 mb-4">
                  Own any NFT from an episode's collection to unlock:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Full episode access</li>
                  <li>Exclusive lore content</li>
                  <li>Behind-the-scenes material</li>
                  <li>Community features</li>
                </ul>
                <Link 
                  href="https://opensea.io/collection/arktifact"
                  className="btn-primary inline-block"
                >
                  Browse NFTs
                </Link>
              </div>

              {/* Direct Purchase Method */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                  2. Purchase Episodes
                </h3>
                <p className="text-gray-300 mb-4">
                  Buy individual episodes or season passes:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Single episode: 0.1 ETH</li>
                  <li>Season pass: 0.5 ETH (All episodes)</li>
                  <li>Basic content access</li>
                  <li>Episode updates</li>
                </ul>
                <button className="btn-primary">
                  Purchase Episodes
                </button>
              </div>
            </div>
          </motion.section>

          {/* Episode Access Table */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center">Episode Access Guide</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="p-4">Episode</th>
                    <th className="p-4">NFT Collection</th>
                    <th className="p-4">Direct Purchase</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-gray-900">
                    <td className="p-4">1. Origins of Honor</td>
                    <td className="p-4">Available</td>
                    <td className="p-4">0.1 ETH</td>
                    <td className="p-4">
                      <span className="text-green-400">Live</span>
                    </td>
                  </tr>
                  {/* Add more episode rows */}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Benefits Comparison */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center">Access Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                  NFT Collector Benefits
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Full episode access
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Exclusive behind-the-scenes
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Community voting rights
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Early access to new episodes
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Special Discord roles
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-cinzel font-bold mb-4 text-purple-400">
                  Direct Purchase Benefits
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Basic episode access
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Standard content updates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Community access
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Episode discussions
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-cinzel font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://opensea.io/collection/arktifact"
                className="btn-primary"
              >
                Collect NFTs
              </Link>
              <button className="btn-secondary">
                Purchase Episodes
              </button>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
};

export default HowItWorksPage; 