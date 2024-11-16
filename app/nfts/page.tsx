'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';
import { allNFTs } from '@/data/season1';
import { useState } from 'react';

type FilterType = 'all' | 'available' | 'listed' | 'rare' | 'legendary' | 'epic';

export default function NFTsPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredNFTs = allNFTs.filter(nft => {
    if (filter === 'all') return true;
    if (filter === 'available') return nft.status === 'available';
    if (filter === 'listed') return nft.status === 'listed';
    if (['rare', 'legendary', 'epic'].includes(filter)) {
      return nft.attributes?.some(
        attr => attr.trait_type === 'Rarity' && attr.value.toLowerCase() === filter
      );
    }
    return true;
  });

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
                NFT Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore and collect unique artifacts from the Chronicles
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'available', 'listed', 'legendary', 'epic', 'rare'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as FilterType)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === filterType
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* NFT Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNFTs.map((nft) => (
              <Link
                key={nft.id}
                href={`/nft/${nft.id}`}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={nft.image}
                    alt={nft.title || nft.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {nft.status === 'listed' && (
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500">
                        {nft.price} ETH
                      </span>
                    )}
                    {nft.attributes?.find(attr => attr.trait_type === 'Rarity') && (
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        nft.attributes.find(attr => attr.trait_type === 'Rarity')?.value === 'Legendary'
                          ? 'bg-yellow-500/80'
                          : nft.attributes.find(attr => attr.trait_type === 'Rarity')?.value === 'Epic'
                          ? 'bg-purple-500/80'
                          : 'bg-blue-500/80'
                      }`}>
                        {nft.attributes.find(attr => attr.trait_type === 'Rarity')?.value}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-cinzel font-bold mb-2">{nft.title || nft.name}</h3>
                  <p className="text-gray-400 mb-4">{nft.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Created by {nft.creator}
                    </span>
                    {nft.status === 'available' && (
                      <span className="text-purple-400 font-bold">
                        {nft.price} ETH
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 