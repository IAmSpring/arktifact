'use client';

import { motion } from 'framer-motion';
import { useWallet } from '@/contexts/WalletContext';
import Image from 'next/image';

const WalletDetails = () => {
  const { account, userNFTs } = useWallet();

  if (!account) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-cinzel font-bold mb-4">Your Wallet</h2>
      
      <div className="mb-6">
        <p className="text-gray-400">Connected Address</p>
        <p className="font-mono text-purple-400">{account}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Your Arktifacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userNFTs.map((nft) => (
            <div 
              key={nft.id}
              className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="font-bold mb-1">{nft.name}</h4>
              <p className="text-sm text-gray-400">{nft.collection}</p>
              <p className="text-xs text-purple-400 mt-2">
                Token ID: {nft.tokenId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WalletDetails; 