'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface NFT {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  status: 'available' | 'owned' | 'resale' | 'featured';
  owner?: string;
  resalePrice?: string;
  episode: number;
  rarity: 'common' | 'rare' | 'legendary';
  featured?: boolean;
}

const NFTMarketplace = () => {
  const [filter, setFilter] = useState<'all' | 'available' | 'owned' | 'resale' | 'featured'>('all');

  const nfts: NFT[] = [
    {
      id: '1',
      title: "The Honor Symbol",
      description: "The first mark of unity between tribes, this symbol represents the dawn of cooperation.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "0.888 ETH",
      status: 'featured',
      episode: 1,
      rarity: 'legendary',
      featured: true
    },
    {
      id: '2',
      title: "Tanek's Spear",
      description: "The legendary weapon that led the first unified defense of the tribes.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "0.5 ETH",
      status: 'owned',
      owner: '0x1234...5678',
      episode: 1,
      rarity: 'rare'
    },
    {
      id: '3',
      title: "Raskara's Scroll",
      description: "Contains the first written account of the tribe's unity.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "0.8 ETH",
      status: 'resale',
      resalePrice: "1.2 ETH",
      owner: '0x8765...4321',
      episode: 1,
      rarity: 'legendary'
    }
  ];

  const filteredNFTs = filter === 'all' 
    ? nfts 
    : filter === 'featured'
    ? nfts.filter(nft => nft.featured)
    : nfts.filter(nft => nft.status === filter);

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
                Arktifact Marketplace
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Collect, trade, and own pieces of this alternate history
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'featured', 'available', 'owned', 'resale'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as typeof filter)}
                className={`px-6 py-2 rounded-full font-bold transition-all
                  ${filter === status 
                    ? status === 'featured'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* NFT Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNFTs.map((nft) => (
              <div 
                key={nft.id}
                className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105
                  ${nft.featured ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900' : ''}`}
              >
                <div className="relative">
                  <Image 
                    src={nft.imageUrl} 
                    alt={nft.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {nft.featured && (
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600">
                        FEATURED
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-sm font-bold
                      ${nft.rarity === 'legendary' ? 'bg-yellow-500/80' :
                        nft.rarity === 'rare' ? 'bg-purple-500/80' :
                        'bg-blue-500/80'}`}
                    >
                      {nft.rarity.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-cinzel font-bold mb-2">{nft.title}</h3>
                      <p className="text-sm text-gray-400">Episode {nft.episode}</p>
                    </div>
                    {nft.status === 'available' && (
                      <span className="text-green-400 font-bold">{nft.price}</span>
                    )}
                    {nft.status === 'resale' && (
                      <span className="text-purple-400 font-bold">{nft.resalePrice}</span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6">{nft.description}</p>

                  {nft.status === 'available' && (
                    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold transition-all">
                      Mint Now
                    </button>
                  )}

                  {nft.status === 'owned' && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Owned by you</p>
                      <button className="w-full py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold transition-all">
                        List for Sale
                      </button>
                    </div>
                  )}

                  {nft.status === 'resale' && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Listed by {nft.owner}</p>
                      <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold transition-all">
                        Buy Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default NFTMarketplace; 