'use client';

import React, { createContext, useContext, useState } from 'react';

interface WalletContextType {
  wallet: string | null;
  isConnecting: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  isConnecting: false,
  error: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);

    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock successful connection
    setWallet('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
    setIsConnecting(false);
  };

  const disconnectWallet = () => {
    setWallet(null);
    setError(null);
  };

  return (
    <WalletContext.Provider value={{ 
      wallet, 
      isConnecting, 
      error,
      connectWallet, 
      disconnectWallet 
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext); 