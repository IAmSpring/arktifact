'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';
import { allNFTs } from '@/data/season1';

const NFTMarketplaceSection = () => {
  // Take first 3 NFTs for preview
  const previewNFTs = allNFTs.slice(0, 3);

  return (
    <section id="nft-marketplace" className="py-24 bg-gray-800/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-cinzel font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NFT Marketplace
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collect and trade unique digital artifacts from the Arktifact Chronicles universe. Each NFT represents a piece of humanity's epic journey.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="mt-12">
            <Link 
              href="/nft-marketplace"
              className="btn-primary inline-block"
            >
              Explore Marketplace
            </Link>
          </motion.div>
        </motion.div>

        {/* Preview Grid */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewNFTs.map((nft) => (
            <Link 
              key={nft.id}
              href={`/nft/${nft.id}`}
              className="block bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={nft.image}
                  alt={nft.title || nft.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-cinzel font-bold mb-2">{nft.title || nft.name}</h3>
              <p className="text-gray-400">{nft.description}</p>
              {nft.attributes?.find(attr => attr.trait_type === "Episode") && (
                <p className="text-sm text-purple-400 mt-2">
                  Episode {nft.attributes.find(attr => attr.trait_type === "Episode")?.value}
                </p>
              )}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NFTMarketplaceSection; 