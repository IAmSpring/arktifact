'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useCollection } from '../../contexts/CollectionContext';
import { useWallet } from '../../contexts/WalletContext';
import { collectionStats } from '../../data/collection-stats';

export default function WalletPage() {
  const { collection } = useCollection();
  const { wallet, isConnecting, connectWallet, disconnectWallet } = useWallet();

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
                Your Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Track your Arktifact NFTs and market activity
            </p>
          </motion.div>

          {wallet ? (
            <>
              {/* Stats Section */}
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-cinzel font-bold text-purple-400">
                    Collection Stats
                  </h2>
                  <button 
                    onClick={disconnectWallet}
                    className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Disconnect Wallet
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {collectionStats.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                      <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
                      <span className="text-green-400 text-sm">{stat.change}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div variants={fadeInUp} className="mb-16">
                <h2 className="text-2xl font-cinzel font-bold mb-6 text-purple-400">
                  Recent Activity
                </h2>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="divide-y divide-gray-700">
                    {collectionStats.recentActivity.map((activity, index) => (
                      <div key={index} className="p-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`text-${activity.type === 'purchase' ? 'green' : 'blue'}-400`}>
                            {activity.type === 'purchase' ? '↓' : '↑'}
                          </span>
                          <div>
                            <p className="text-white font-medium">{activity.item}</p>
                            <p className="text-gray-400 text-sm">{activity.time}</p>
                          </div>
                        </div>
                        <p className="text-white font-medium">{activity.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            /* Connect Wallet CTA */
            <motion.div variants={fadeInUp} className="text-center">
              <button 
                className={`btn-primary ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={connectWallet}
                disabled={isConnecting}
              >
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
} 