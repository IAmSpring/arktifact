'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import allNFTs from '@/data/season1';

export async function generateStaticParams() {
  return allNFTs.map((nft) => ({
    id: nft.id,
  }));
}

// This would normally come from your API or database
const dummyNFT = {
  id: '1',
  title: "Tanek - The First Guardian",
  description: "The legendary warrior who united the first tribes through strength and wisdom. As the first Guardian of the new alliance, Tanek's leadership set the foundation for generations to come.",
  imageUrl: "/images/nfts/placeholder.jpg",
  price: "1.888 ETH",
  episode: 1,
  rarity: 'legendary',
  category: 'character',
  owner: '0x1234...5678',
  creator: 'Arktifact Chronicles',
  mintDate: '2024-01-15',
  attributes: [
    { trait: "Role", value: "Warrior" },
    { trait: "Era", value: "Tribal Age" },
    { trait: "Influence", value: "Unity" },
    { trait: "Strength", value: "95" },
    { trait: "Leadership", value: "90" },
    { trait: "Wisdom", value: "85" }
  ],
  lore: `
    In the dawn of our alternate history, when tribes fought for survival and territory, 
    one warrior saw beyond the conflicts. Tanek, born to lead but destined to unite, 
    became the catalyst for humanity's first great alliance.

    His story begins in the harsh reality of tribal warfare, where strength alone 
    determined survival. But Tanek possessed something rare - the wisdom to see that 
    true strength lay in unity, not division.
  `,
  history: [
    {
      event: "Minted",
      date: "2024-01-15",
      price: "1.888 ETH",
      from: "Arktifact Chronicles",
      to: "0x1234...5678"
    }
  ]
};

export default function NFTPage() {
  const params = useParams();
  const id = params.id;
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const Skeleton = ({ className }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-800 rounded-lg ${className}`}></div>
  );

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Navigation */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Link 
              href="/nfts"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Collection
            </Link>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="relative">
                {isLoading ? (
                  <Skeleton className="w-full h-[500px] rounded-lg" />
                ) : (
                  <Image 
                    src={dummyNFT.imageUrl} 
                    alt={dummyNFT.title}
                    width={800}
                    height={800}
                    className="w-full rounded-lg shadow-lg"
                  />
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  {isLoading ? (
                    <>
                      <Skeleton className="w-24 h-6 rounded-full" />
                      <Skeleton className="w-24 h-6 rounded-full" />
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500/80">
                        {dummyNFT.category.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-500/80">
                        {dummyNFT.rarity.toUpperCase()}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Attributes Grid */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-cinzel font-bold mb-4">Attributes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {isLoading ? (
                    Array(6).fill(0).map((_, index) => (
                      <Skeleton key={index} className="h-20 rounded-lg" />
                    ))
                  ) : (
                    dummyNFT.attributes.map((attr, index) => (
                      <div 
                        key={index}
                        className="bg-gray-900 rounded-lg p-4"
                      >
                        <span className="text-gray-400 block text-sm">{attr.trait}</span>
                        <span className="text-purple-400 font-bold">{attr.value}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {isLoading ? (
                <>
                  <div className="space-y-4">
                    <Skeleton className="h-12 w-3/4" />
                    <Skeleton className="h-24" />
                  </div>
                </>
              ) : (
                <div>
                  <h1 className="text-4xl font-cinzel font-bold mb-4">{dummyNFT.title}</h1>
                  <p className="text-gray-300">{dummyNFT.description}</p>
                </div>
              )}

              {/* Details */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-cinzel font-bold mb-4">Details</h3>
                <div className="space-y-4">
                  {isLoading ? (
                    Array(4).fill(0).map((_, index) => (
                      <Skeleton key={index} className="h-6" />
                    ))
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Owner</span>
                        <span className="text-purple-400">{dummyNFT.owner}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Creator</span>
                        <span className="text-purple-400">{dummyNFT.creator}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mint Date</span>
                        <span className="text-purple-400">{dummyNFT.mintDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Episode</span>
                        <span className="text-purple-400">{dummyNFT.episode}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Lore Section */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-cinzel font-bold mb-4">Lore</h3>
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-11/12" />
                    <Skeleton className="h-4 w-10/12" />
                    <Skeleton className="h-4 w-9/12" />
                  </div>
                ) : (
                  <p className="text-gray-300 whitespace-pre-line">{dummyNFT.lore}</p>
                )}
              </div>

              {/* History */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-cinzel font-bold mb-4">History</h3>
                <div className="space-y-4">
                  {isLoading ? (
                    Array(3).fill(0).map((_, index) => (
                      <Skeleton key={index} className="h-16" />
                    ))
                  ) : (
                    dummyNFT.history.map((event, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <span className="text-purple-400 block">{event.event}</span>
                          <span className="text-sm text-gray-400">{event.date}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-300 block">{event.price}</span>
                          <span className="text-sm text-gray-400">
                            {event.from} → {event.to}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Action Button */}
              {isLoading ? (
                <Skeleton className="h-14 rounded-lg" />
              ) : (
                <button className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold transition-all">
                  View on OpenSea
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 