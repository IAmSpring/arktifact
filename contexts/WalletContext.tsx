'use client';

import React, { createContext, useContext, useState } from 'react';
import nftService from '../services/nftService';
import type { NFT } from '../types/nft';

interface WalletContextType {
  address: string | null;
  userNFTs: NFT[];
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  userNFTs: [],
  connect: async () => {},
  disconnect: () => {}
});

export const useWallet = () => useContext(WalletContext);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [userNFTs, setUserNFTs] = useState<NFT[]>([]);

  const connect = async () => {
    // Simulate wallet connection
    const mockAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
    setAddress(mockAddress);
    const nfts = await nftService.getUserNFTs(mockAddress);
    setUserNFTs(nfts);
  };

  const disconnect = () => {
    setAddress(null);
    setUserNFTs([]);
  };

  return (
    <WalletContext.Provider value={{ address, userNFTs, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
} 