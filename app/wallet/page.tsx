'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useWallet } from '@/contexts/WalletContext';
import { allNFTs } from '@/data/season1';
import { useState } from 'react';

// OpenSea performance stats
const collectionStats = {
  floorPrice: "1.2 ETH",
  totalVolume: "156.8 ETH",
  items: 888,
  owners: 342,
  stats: [
    {
      label: "24h Volume",
      value: "12.4 ETH",
      change: "+24.5%",
      isPositive: true
    },
    {
      label: "7d Volume",
      value: "86.2 ETH",
      change: "+156.3%",
      isPositive: true
    },
    {
      label: "Floor Price",
      value: "1.2 ETH",
      change: "-2.4%",
      isPositive: false
    },
    {
      label: "Avg Sale Price",
      value: "1.8 ETH",
      change: "+12.8%",
      isPositive: true
    },
    {
      label: "Unique Holders",
      value: "342",
      change: "+15",
      isPositive: true
    },
    {
      label: "Listed Items",
      value: "89",
      percentage: "10%",
      change: "-5",
      isPositive: false
    },
    {
      label: "Total Sales",
      value: "234",
      change: "+18",
      isPositive: true
    },
    {
      label: "Market Cap",
      value: "1,065.6 ETH",
      change: "+8.4%",
      isPositive: true
    }
  ],
  recentActivity: [
    {
      type: "Sale",
      item: "Raska's Vision #42",
      price: "1.8 ETH",
      from: "0x742d...44e",
      to: "0x123...789",
      time: "2 hours ago"
    },
    {
      type: "List",
      item: "Unity Totem #12",
      price: "2.1 ETH",
      from: "0x456...abc",
      time: "4 hours ago"
    },
    {
      type: "Offer",
      item: "Tanek's Shield #77",
      price: "1.5 ETH",
      from: "0xdef...123",
      time: "6 hours ago"
    }
  ]
};

// Map NFT data to wallet view
const dummyUserCollection = {
  address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  nfts: allNFTs.map(nft => ({
    ...nft,
    collection: "Arktifact Origins",
    status: nft.id === "2" ? "staked" : nft.id === "3" ? "listed" : "owned",
    price: nft.id === "3" ? "1.5 ETH" : undefined,
    acquiredDate: `2024-01-${15 + parseInt(nft.id) * 5}`
  })),
  stats: {
    totalValue: "4.5 ETH",
    nftsOwned: 3,
    collections: 1
  }
};

export default function WalletPage() {
  const [isConnected, setIsConnected] = useState(false);
  const { address } = useWallet();

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Collection Stats (Always Visible) */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center">
              Collection Performance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {collectionStats.stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                  <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
                  {stat.change && (
                    <p className={`text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </p>
                  )}
                  {stat.percentage && (
                    <p className="text-sm text-gray-400">
                      {stat.percentage} of total
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-cinzel font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {collectionStats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <span className={`px-2 py-1 rounded text-sm mr-3 ${
                        activity.type === 'Sale' ? 'bg-green-500/20 text-green-400' :
                        activity.type === 'List' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {activity.type}
                      </span>
                      <span className="text-gray-300">{activity.item}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-purple-400 font-bold">{activity.price}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connect Wallet Section */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Your Collection
              </span>
            </h1>
            
            {!isConnected ? (
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-xl text-gray-300 mb-8">
                  Connect your wallet to view and manage your Arktifact collection
                </p>
                <button
                  onClick={handleConnect}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105"
                >
                  Connect Wallet
                </button>
              </div>
            ) : (
              <p className="text-xl text-gray-300 mb-4">
                Connected: {dummyUserCollection.address.slice(0, 6)}...{dummyUserCollection.address.slice(-4)}
              </p>
            )}
          </motion.div>

          {isConnected && (
            <>
              {/* Stats Section */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Portfolio Value</h3>
                  <p className="text-2xl font-bold text-purple-400">{dummyUserCollection.stats.totalValue}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">NFTs Owned</h3>
                  <p className="text-2xl font-bold text-purple-400">{dummyUserCollection.stats.nftsOwned}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Collections</h3>
                  <p className="text-2xl font-bold text-purple-400">{dummyUserCollection.stats.collections}</p>
                </div>
              </motion.div>

              {/* NFT Grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyUserCollection.nfts.map((nft) => (
                  <Link 
                    key={nft.id}
                    href={`/nft/${nft.id}`}
                    className="block bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={nft.image}
                        alt={nft.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        {nft.status === 'listed' && (
                          <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-500">
                            Listed: {nft.price}
                          </span>
                        )}
                        {nft.status === 'staked' && (
                          <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-500">
                            Staked
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-cinzel font-bold mb-2">{nft.name}</h3>
                      <p className="text-gray-400">{nft.collection}</p>
                      <p className="text-sm text-gray-500 mt-2">Acquired: {nft.acquiredDate}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
} 