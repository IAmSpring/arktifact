'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useCollection } from '../../contexts/CollectionContext';

// Mock OpenSea collection stats
const collectionStats = {
  stats: {
    floor_price: 0.85,
    total_volume: 1234,
    num_owners: 892,
    total_supply: 2400,
    average_price: 1.2,
    market_cap: 2880,
    one_day_volume: 45.2,
    one_day_change: 12.5,
    seven_day_volume: 312.8,
    seven_day_change: 8.3,
  },
  featured_items: [
    {
      id: '1',
      name: 'Origins of Honor #001',
      image: '/images/nfts/origins-001.jpg',
      rarity: 'Legendary',
      episode: 1,
      price: '1.2 ETH',
      lastSale: '0.95 ETH'
    },
    {
      id: '2',
      name: 'Bonds of Kinship #042',
      image: '/images/nfts/bonds-042.jpg',
      rarity: 'Rare',
      episode: 2,
      price: '0.9 ETH',
      lastSale: '0.82 ETH'
    },
    {
      id: '3',
      name: 'Age of Innovation #123',
      image: '/images/nfts/innovation-123.jpg',
      rarity: 'Epic',
      episode: 3,
      price: '1.1 ETH',
      lastSale: '0.98 ETH'
    }
  ]
};

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Arktifact Chronicles Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover and collect unique NFTs from humanity's greatest story
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="https://opensea.io/collection/arktifact"
                className="btn-primary"
                target="_blank"
              >
                View on OpenSea
              </Link>
              <Link href="/nft-marketplace" className="btn-secondary">
                Browse Marketplace
              </Link>
            </div>
          </motion.div>

          {/* Collection Stats */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-gray-400 text-sm mb-2">Floor Price</h3>
              <p className="text-2xl font-bold text-white mb-2">{collectionStats.stats.floor_price} ETH</p>
              <span className="text-green-400 text-sm">+5.2% 24h</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-gray-400 text-sm mb-2">Total Volume</h3>
              <p className="text-2xl font-bold text-white mb-2">{collectionStats.stats.total_volume} ETH</p>
              <span className="text-green-400 text-sm">+18.3% total</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-gray-400 text-sm mb-2">Unique Holders</h3>
              <p className="text-2xl font-bold text-white mb-2">{collectionStats.stats.num_owners}</p>
              <span className="text-green-400 text-sm">37% of supply</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-gray-400 text-sm mb-2">Items</h3>
              <p className="text-2xl font-bold text-white mb-2">{collectionStats.stats.total_supply}</p>
              <span className="text-purple-400 text-sm">8 episodes</span>
            </div>
          </motion.div>

          {/* Featured Items */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-2xl font-cinzel font-bold mb-8 text-purple-400">
              Featured Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collectionStats.featured_items.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold">{item.price}</p>
                        <p className="text-gray-300 text-sm">Last: {item.lastSale}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400">Episode {item.episode}</span>
                      <span className="text-green-400">{item.rarity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market Activity */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-2xl font-cinzel font-bold mb-8 text-purple-400">
              Market Activity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">24h Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white">{collectionStats.stats.one_day_volume} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Change</span>
                    <span className="text-green-400">+{collectionStats.stats.one_day_change}%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">7d Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white">{collectionStats.stats.seven_day_volume} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Change</span>
                    <span className="text-green-400">+{collectionStats.stats.seven_day_change}%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center py-16 bg-gray-800 rounded-lg">
            <h2 className="text-3xl font-cinzel font-bold mb-4">Join the Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of humanity's greatest story. Each NFT unlocks exclusive content and community access.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/nft-marketplace" className="btn-primary">
                Start Collecting
              </Link>
              <Link href="/story" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 