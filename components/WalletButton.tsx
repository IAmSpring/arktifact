'use client';

import { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WalletButton = () => {
  const { account, connectWallet, disconnectWallet, isConnecting, userNFTs } = useWallet();
  const [showDropdown, setShowDropdown] = useState(false);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="relative">
      {!account ? (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-500 hover:to-pink-500 transition-all"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-6 py-2 rounded-full bg-gray-800 text-purple-400 font-bold hover:bg-gray-700 transition-all flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            {shortenAddress(account)}
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
              >
                <div className="p-4 border-b border-gray-700">
                  <p className="text-sm text-gray-400">Connected Wallet</p>
                  <p className="font-mono text-purple-400">{account}</p>
                </div>

                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-lg font-bold mb-2">Your NFTs</h3>
                  <div className="space-y-2">
                    {userNFTs.map((nft) => (
                      <div key={nft.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
                        <Image
                          src={nft.image}
                          alt={nft.name}
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                        <div>
                          <p className="font-bold">{nft.name}</p>
                          <p className="text-sm text-gray-400">{nft.collection}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    disconnectWallet();
                    setShowDropdown(false);
                  }}
                  className="w-full p-4 text-left text-red-400 hover:bg-gray-700 transition-colors"
                >
                  Disconnect Wallet
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default WalletButton; 