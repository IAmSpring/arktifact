'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { NFT } from '@/types/nft';
import PlaceholderImage from './PlaceholderImage';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {!isLoaded && !hasError && (
        <PlaceholderImage 
          height="300px"
          text={nft.title}
          className="rounded-t-lg"
        />
      )}
      {!hasError && (
        <img 
          src={nft.imageUrl} 
          alt={nft.title}
          className={`w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 ${
            !isLoaded ? 'hidden' : ''
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-cinzel font-bold mb-2">{nft.title}</h3>
        <p className="text-gray-400 mb-4">{nft.description}</p>
        <a 
          href={nft.openSeaUrl}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          View on OpenSea →
        </a>
      </div>
    </div>
  );
};

export default NFTCard; 