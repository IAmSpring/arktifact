'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Link from 'next/link';
import Image from 'next/image';
import { NFT } from '@/types/nft';

interface NFTContentProps {
  nft: NFT;
}

const NFTContent = ({ nft }: NFTContentProps) => {
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
            <Link 
              href="/nfts"
              className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Collection
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              {nft.title || nft.name}
            </h1>
            
            {nft.attributes?.find(attr => attr.trait_type === "Episode") && (
              <p className="text-xl text-gray-400">
                Episode {nft.attributes.find(attr => attr.trait_type === "Episode")?.value}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12">
            {/* NFT Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={nft.image}
                alt={nft.title || nft.name}
                width={800}
                height={800}
                className="object-cover"
                priority
              />
            </div>

            {/* NFT Details */}
            <div>
              <div className="prose prose-lg prose-invert max-w-none mb-8">
                <p>{nft.description}</p>
                {nft.image_prompt && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-purple-400">Image Details</h3>
                    <p className="text-gray-300">{nft.image_prompt}</p>
                  </div>
                )}
              </div>

              {/* Attributes */}
              {nft.attributes && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {nft.attributes.map((attr, index) => (
                    <div 
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg"
                    >
                      <p className="text-gray-400 text-sm mb-1">{attr.trait_type}</p>
                      <p className="text-purple-400 font-bold">{attr.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* OpenSea Link */}
              {nft.openSeaUrl && (
                <a 
                  href={nft.openSeaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-500 transition-colors"
                >
                  View on OpenSea
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default NFTContent; 