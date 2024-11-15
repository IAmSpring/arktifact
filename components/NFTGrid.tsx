'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Link from 'next/link';

interface NFT {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  episode: number;
  rarity: 'common' | 'rare' | 'legendary';
  category: 'character' | 'item' | 'location' | 'artifact' | 'scroll';
  attributes?: {
    trait: string;
    value: string;
  }[];
}

interface NFTGridProps {
  nfts: NFT[];
}

const NFTGrid = ({ nfts }: NFTGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {nfts.map((nft) => (
        <motion.div
          key={nft.id}
          variants={fadeInUp}
          className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="relative">
            <img 
              src={nft.imageUrl}
              alt={nft.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-bold
                ${nft.category === 'character' ? 'bg-blue-500/80' :
                  nft.category === 'artifact' ? 'bg-purple-500/80' :
                  nft.category === 'location' ? 'bg-green-500/80' :
                  nft.category === 'scroll' ? 'bg-yellow-500/80' :
                  'bg-gray-500/80'}`}
              >
                {nft.category.toUpperCase()}
              </span>
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
              <span className="text-purple-400 font-bold">{nft.price}</span>
            </div>
            
            <p className="text-gray-300 mb-6">{nft.description}</p>

            {/* Attributes */}
            {nft.attributes && (
              <div className="grid grid-cols-2 gap-2 mb-6">
                {nft.attributes.map((attr, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900 rounded-lg p-2 text-sm"
                  >
                    <span className="text-gray-400">{attr.trait}: </span>
                    <span className="text-purple-400">{attr.value}</span>
                  </div>
                ))}
              </div>
            )}
            
            <Link 
              href={`/nft/${nft.id}`}
              className="block w-full py-3 text-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold transition-all"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NFTGrid; 