'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useCollection } from '../../contexts/CollectionContext';

export default function WalletPage() {
  const { isConnected, connect, userCollection, collectionStats } = useCollection();

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Collection Stats (Always Visible) */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center">
              Collection Performance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {collectionStats.stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                  <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
                  {stat.change && (
                    <p className={`text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </p>
                  )}
                  {stat.percentage && (
                    <p className="text-sm text-gray-400">
                      {stat.percentage} of total
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-cinzel font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {collectionStats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <span className={`px-2 py-1 rounded text-sm mr-3 ${
                        activity.type === 'Sale' ? 'bg-green-500/20 text-green-400' :
                        activity.type === 'List' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {activity.type}
                      </span>
                      <span className="text-gray-300">{activity.item}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-purple-400 font-bold">{activity.price}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connect Wallet Section */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Your Collection
              </span>
            </h1>
            
            {!isConnected ? (
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-xl text-gray-300 mb-8">
                  Connect your wallet to view and manage your Arktifact collection
                </p>
                <button
                  onClick={connect}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105"
                >
                  Connect Wallet
                </button>
              </div>
            ) : (
              <p className="text-xl text-gray-300 mb-4">
                Connected: {userCollection?.address.slice(0, 6)}...{userCollection?.address.slice(-4)}
              </p>
            )}
          </motion.div>

          {isConnected && userCollection && (
            <>
              {/* Stats Section */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Portfolio Value</h3>
                  <p className="text-2xl font-bold text-purple-400">{userCollection.stats.totalValue}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">NFTs Owned</h3>
                  <p className="text-2xl font-bold text-purple-400">{userCollection.stats.nftsOwned}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Collections</h3>
                  <p className="text-2xl font-bold text-purple-400">{userCollection.stats.collections}</p>
                </div>
              </motion.div>

              {/* NFT Grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userCollection.nfts.map((nft) => (
                  <Link 
                    key={nft.id}
                    href={`/nft/${nft.id}`}
                    className="block bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={nft.image}
                        alt={nft.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        {nft.status === 'listed' && (
                          <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500">
                            Listed
                          </span>
                        )}
                        {nft.status === 'staked' && (
                          <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-500">
                            Staked
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-cinzel font-bold mb-2">{nft.name}</h3>
                      <p className="text-gray-400">{nft.collection}</p>
                      <p className="text-sm text-gray-500 mt-2">Acquired: {nft.acquiredDate}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
} 