'use client';

import { useWallet } from '../contexts/WalletContext';

const Navigation = () => {
  const { wallet, connectWallet } = useWallet();

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Arktifact Chronicles
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/story" className="hover:text-purple-400 transition-colors">Story</a>
            <a href="/nft-marketplace" className="hover:text-purple-400 transition-colors">Marketplace</a>
            <a href="/lore" className="hover:text-purple-400 transition-colors">Lore</a>
            <a href="/blog" className="hover:text-purple-400 transition-colors">Blog</a>
            <a href="/collection" className="hover:text-purple-400 transition-colors">Collection</a>
            <a 
              href="/wallet" 
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors text-white"
            >
              {wallet ? 'Connected' : 'Connect Wallet'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 