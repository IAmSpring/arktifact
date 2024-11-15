'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';
import { getImageDetails } from '@/utils/imageHandling';
import { NFT } from '@/types/nft';

interface NFTGridProps {
  nfts: NFT[];
}

const NFTGrid = ({ nfts }: NFTGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {nfts.map((nft) => {
        const imageDetails = getImageDetails(nft);
        return (
          <motion.div
            key={nft.id}
            variants={fadeInUp}
            className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="relative">
              <Image
                {...imageDetails}
                className="w-full h-64 object-cover"
                priority={false}
              />
              {nft.attributes && (
                <div className="absolute top-4 right-4 flex gap-2">
                  {nft.attributes.map((attr, index) => {
                    if (attr.trait_type === 'Artifact Type' || attr.trait_type === 'Rarity') {
                      return (
                        <span key={index} className={`px-3 py-1 rounded-full text-sm font-bold
                          ${attr.trait_type === 'Artifact Type' ? 'bg-purple-500/80' :
                            attr.value === 'Legendary' ? 'bg-yellow-500/80' :
                            attr.value === 'Rare' ? 'bg-purple-500/80' :
                            'bg-blue-500/80'}`}
                        >
                          {attr.value.toString().toUpperCase()}
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-cinzel font-bold mb-2">{nft.title || nft.name}</h3>
                  {nft.attributes?.find(attr => attr.trait_type === "Episode") && (
                    <p className="text-sm text-gray-400">
                      Episode {nft.attributes.find(attr => attr.trait_type === "Episode")?.value}
                    </p>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{nft.description}</p>

              {/* Attributes */}
              {nft.attributes && (
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {nft.attributes
                    .filter(attr => !['Artifact Type', 'Rarity', 'Episode'].includes(attr.trait_type))
                    .map((attr, index) => (
                      <div 
                        key={index}
                        className="bg-gray-900 rounded-lg p-2 text-sm"
                      >
                        <span className="text-gray-400">{attr.trait_type}: </span>
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
        );
      })}
    </div>
  );
};

export default NFTGrid; 