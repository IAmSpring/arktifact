'use client';

import { motion } from 'framer-motion';
import { NFT } from '@/types/nft';
import NFTCard from './NFTCard';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { placeholderImages } from '@/utils/placeholders';
import Image from 'next/image';

const FeaturedArtifacts = () => {
  const featuredNFTs: NFT[] = [
    {
      id: "honor-symbol",
      name: "The Honor Symbol",
      title: "The Honor Symbol",
      description: "An ancient mark of unity among early tribes, symbolizing the first bonds of honor.",
      image: "/images/nfts/crest.jpg",
      imageUrl: placeholderImages.nfts.honorSymbol.src,
      openSeaUrl: "https://opensea.io/assets/arktifact/honor-symbol"
    },
    {
      id: "tanek-portrait",
      name: "Tanek's Portrait",
      title: "Tanek's Portrait",
      description: "The legendary warrior who first united the tribes through strength and wisdom.",
      image: "/images/nfts/tanek.jpg",
      imageUrl: placeholderImages.nfts.tanekPortrait.src,
      openSeaUrl: "https://opensea.io/assets/arktifact/tanek-portrait"
    },
    {
      id: "ancient-drum",
      name: "The Ancient Drum",
      title: "The Ancient Drum",
      description: "Used in sacred ceremonies to unite tribes and mark important gatherings.",
      image: "/images/nfts/drum.jpg",
      imageUrl: placeholderImages.nfts.ancientDrum.src,
      openSeaUrl: "https://opensea.io/assets/arktifact/ancient-drum"
    }
  ];

  return (
    <section id="artifacts" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Featured Arktifacts
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Each artifact contains a fragment of ancient power. Choose wisely, for your collection shapes the story.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredNFTs.map((nft) => (
            <motion.div
              key={nft.id}
              variants={fadeInUp}
            >
              <NFTCard nft={nft} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArtifacts; 