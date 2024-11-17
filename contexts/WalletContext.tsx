'use client';

import React, { createContext, useContext, useState } from 'react';

interface NFT {
  id: string;
  name: string;
  image: string;
  collection: string;
  tokenId: string;
}

interface WalletContextType {
  wallet: string | null;
  isConnecting: boolean;
  error: string | null;
  userNFTs: NFT[];
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  isConnecting: false,
  error: null,
  userNFTs: [],
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userNFTs, setUserNFTs] = useState<NFT[]>([]);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);

    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock successful connection
    setWallet('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
    setIsConnecting(false);

    // Mock user NFTs
    setUserNFTs([
      {
        id: '1',
        name: 'Ancient Scroll',
        image: '/images/nfts/drum.jpg',
        collection: 'Arktifacts',
        tokenId: '0001'
      },
      {
        id: '2',
        name: 'Tribal Mask',
        image: '/images/nfts/scroll.jpg',
        collection: 'Arktifacts',
        tokenId: '0002'
      },
      {
        id: '3',
        name: 'Futuristic Relic',
        image: '/images/nfts/crest.jpg',
        collection: 'Arktifacts',
        tokenId: '0003'
      }
    ]);
  };

  const disconnectWallet = () => {
    setWallet(null);
    setError(null);
    setUserNFTs([]);
  };

  return (
    <WalletContext.Provider value={{ 
      wallet, 
      isConnecting, 
      error,
      userNFTs,
      connectWallet, 
      disconnectWallet 
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);