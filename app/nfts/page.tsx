'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useState } from 'react';
import NFTGrid from '@/components/NFTGrid';
import { NFT } from '@/types/nft';

const NFTsPage = () => {
  const [filter, setFilter] = useState<string>('all');

  const nfts: NFT[] = [
    {
      id: "1",
      name: "The Honor Symbol",
      title: "The Honor Symbol",
      description: "The first mark of unity between tribes, this symbol represents the dawn of cooperation.",
      image: "/images/nfts/placeholder.jpg",
      attributes: [
        { trait_type: "Episode", value: "1" },
        { trait_type: "Artifact Type", value: "Symbol" },
        { trait_type: "Rarity", value: "Legendary" }
      ],
      fallback: {
        width: 400,
        height: 400,
        text: "Honor Symbol"
      }
    },
    // ... other NFTs
  ];

  const filteredNFTs = filter === 'all' 
    ? nfts 
    : nfts.filter(nft => {
        const rarityAttr = nft.attributes?.find(attr => attr.trait_type === "Rarity");
        return rarityAttr?.value.toString().toLowerCase() === filter;
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
          {/* ... header content ... */}
          
          <motion.div variants={fadeInUp}>
            <NFTGrid nfts={filteredNFTs} />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default NFTsPage; 