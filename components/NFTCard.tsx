'use client';

import { NFT } from '@/types/nft';
import Image from 'next/image';
import { getImageDetails } from '@/utils/imageHandling';
import { useState } from 'react';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const [imageError, setImageError] = useState(false);
  const imageDetails = getImageDetails(nft);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative aspect-square">
        <Image
          {...imageDetails}
          className="object-cover"
          onError={() => setImageError(true)}
          placeholder="blur"
          priority={false}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-gray-400">
            {nft.fallback?.text || nft.name}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{nft.title || nft.name}</h3>
        {nft.description && (
          <p className="text-gray-400 mb-4">{nft.description}</p>
        )}
        {nft.openSeaUrl && (
          <a 
            href={nft.openSeaUrl}
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on OpenSea
          </a>
        )}
      </div>
    </div>
  );
};

export default NFTCard; 