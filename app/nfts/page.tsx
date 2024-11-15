'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import NFTGrid from '@/components/NFTGrid';
import { useState } from 'react';

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

export default function NFTsPage() {
  const [episodeFilter, setEpisodeFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const nfts: NFT[] = [
    {
      id: '1',
      title: "Tanek - The First Guardian",
      description: "The legendary warrior who united the first tribes through strength and wisdom.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "1.888 ETH",
      episode: 1,
      rarity: 'legendary',
      category: 'character',
      attributes: [
        { trait: "Role", value: "Warrior" },
        { trait: "Era", value: "Tribal Age" },
        { trait: "Influence", value: "Unity" }
      ]
    },
    {
      id: '2',
      title: "The Honor Symbol",
      description: "The first mark of unity between tribes, representing the dawn of cooperation.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "0.888 ETH",
      episode: 1,
      rarity: 'legendary',
      category: 'artifact',
      attributes: [
        { trait: "Type", value: "Symbol" },
        { trait: "Power", value: "Unity" },
        { trait: "Age", value: "First Era" }
      ]
    },
    {
      id: '3',
      title: "Ancient Training Grounds",
      description: "Where the first warriors learned to protect their united tribes.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "0.5 ETH",
      episode: 1,
      rarity: 'rare',
      category: 'location',
      attributes: [
        { trait: "Type", value: "Training" },
        { trait: "Era", value: "Tribal" },
        { trait: "Purpose", value: "Defense" }
      ]
    },
    {
      id: '4',
      title: "Scroll of First Unity",
      description: "Contains the earliest written account of the tribal unification.",
      imageUrl: "/images/nfts/placeholder.jpg",
      price: "0.75 ETH",
      episode: 1,
      rarity: 'rare',
      category: 'scroll',
      attributes: [
        { trait: "Type", value: "Historical" },
        { trait: "Content", value: "Unity" },
        { trait: "Language", value: "Ancient" }
      ]
    }
  ];

  const filteredNFTs = nfts.filter(nft => {
    const matchesEpisode = episodeFilter === 'all' || `episode ${nft.episode}` === episodeFilter;
    const matchesCategory = categoryFilter === 'all' || nft.category === categoryFilter;
    return matchesEpisode && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'character', label: 'Characters' },
    { id: 'item', label: 'Items' },
    { id: 'location', label: 'Locations' },
    { id: 'artifact', label: 'Artifacts' },
    { id: 'scroll', label: 'Scrolls' }
  ];

  const episodes = [
    { id: 'all', label: 'All Episodes' },
    { id: 'episode 1', label: 'Episode 1' },
    { id: 'episode 2', label: 'Episode 2' },
    { id: 'episode 3', label: 'Episode 3' }
  ];

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
                Arktifact Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore and collect pieces of this alternate history
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div variants={fadeInUp} className="mb-12">
            {/* Episode Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-cinzel font-bold mb-4 text-purple-400">Episodes</h3>
              <div className="flex flex-wrap gap-4">
                {episodes.map((episode) => (
                  <button
                    key={episode.id}
                    onClick={() => setEpisodeFilter(episode.id)}
                    className={`px-6 py-2 rounded-full font-bold transition-all
                      ${episodeFilter === episode.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                  >
                    {episode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-cinzel font-bold mb-4 text-purple-400">Categories</h3>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setCategoryFilter(category.id)}
                    className={`px-6 py-2 rounded-full font-bold transition-all
                      ${categoryFilter === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="text-gray-400">
              Showing {filteredNFTs.length} {filteredNFTs.length === 1 ? 'result' : 'results'}
            </p>
          </motion.div>

          {/* NFT Grid */}
          <motion.div variants={fadeInUp}>
            <NFTGrid nfts={filteredNFTs} />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 