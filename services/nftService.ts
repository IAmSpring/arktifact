import { NFT } from '../types/nft';
import { allNFTs } from '../data/season1';

export const nftService = {
  getUserNFTs: async (address: string): Promise<NFT[]> => {
    // Simulating API call with dummy data
    return allNFTs.slice(0, 3);
  },

  getNFTDetails: async (tokenId: string): Promise<NFT | null> => {
    return allNFTs.find(nft => nft.id === tokenId) || null;
  },

  getCollectionStats: async () => {
    // Simulating API call with dummy data
    return {
      totalSupply: 888,
      holders: 342,
      floorPrice: "1.2 ETH",
      volume24h: "12.4 ETH"
    };
  }
};

export default nftService; 