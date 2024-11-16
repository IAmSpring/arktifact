'use client';

import React, { createContext, useContext, useState } from 'react';
import { nftCollection, dummyUserCollection, UserCollection } from '@/data/nfts/collection';

interface CollectionContextType {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  userCollection: UserCollection | null;
  collectionStats: typeof nftCollection;
}

const CollectionContext = createContext<CollectionContextType>({
  isConnected: false,
  connect: () => {},
  disconnect: () => {},
  userCollection: null,
  collectionStats: nftCollection
});

export const useCollection = () => useContext(CollectionContext);

export function CollectionProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [userCollection, setUserCollection] = useState<UserCollection | null>(null);

  const connect = () => {
    setIsConnected(true);
    setUserCollection(dummyUserCollection);
  };

  const disconnect = () => {
    setIsConnected(false);
    setUserCollection(null);
  };

  return (
    <CollectionContext.Provider 
      value={{ 
        isConnected, 
        connect, 
        disconnect, 
        userCollection, 
        collectionStats: nftCollection 
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
} 