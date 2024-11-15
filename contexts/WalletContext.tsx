'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import { fetchUserNFTs } from '@/services/nftService';

// Export the UserNFT interface so it can be used by other components
export interface UserNFT {
  id: string;
  name: string;
  collection: string;
  image: string;
  tokenId: string;
  contractAddress: string;
}

export interface WalletContextType {
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
  userNFTs: UserNFT[];
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Dummy NFT data for graceful fallback
const dummyNFTs: UserNFT[] = [
  {
    id: "1",
    name: "Arktifact #001",
    collection: "Arktifact Chronicles",
    image: "/images/nfts/dummy/arktifact-001.jpg",
    tokenId: "1",
    contractAddress: "0x123..."
  },
  {
    id: "2",
    name: "Arktifact #002",
    collection: "Arktifact Chronicles",
    image: "/images/nfts/dummy/arktifact-002.jpg",
    tokenId: "2",
    contractAddress: "0x123..."
  },
  // Add more dummy NFTs as needed
];

export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [userNFTs, setUserNFTs] = useState<UserNFT[]>(dummyNFTs);

  useEffect(() => {
    // Check if MetaMask is installed
    const checkMetaMask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
      }
    };

    checkMetaMask();

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      setAccount(null);
    } else {
      setAccount(accounts[0]);
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to use this feature!');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      const userAddress = accounts[0];
      setAccount(userAddress);
      
      // Fetch user's NFTs
      const nfts = await fetchUserNFTs(userAddress);
      setUserNFTs(nfts);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      // Fallback to dummy data on error
      setUserNFTs(dummyNFTs);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setUserNFTs([]);
  };

  return (
    <WalletContext.Provider value={{
      account,
      connectWallet,
      disconnectWallet,
      isConnecting,
      userNFTs
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
} 