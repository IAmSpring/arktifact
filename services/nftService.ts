import type { UserNFT } from '@/contexts/WalletContext';

// Dummy NFT data to simulate a user's collection
export const dummyUserNFTs: UserNFT[] = [
  {
    id: "1",
    name: "Tanek the Protector",
    collection: "Arktifact Chronicles: Episode 1",
    image: "/images/episodes/1/tanek_protector.jpg",
    tokenId: "1",
    contractAddress: "0x123abc..."
  },
  {
    id: "2",
    name: "Unity Totem",
    collection: "Arktifact Chronicles: Episode 2",
    image: "/images/episodes/2/unity_totem.jpg",
    tokenId: "2",
    contractAddress: "0x123abc..."
  },
  {
    id: "3",
    name: "Great Hall of Innovation",
    collection: "Arktifact Chronicles: Episode 3",
    image: "/images/episodes/3/great_hall.jpg",
    tokenId: "3",
    contractAddress: "0x123abc..."
  }
];

// Simulate fetching user's NFTs
export const fetchUserNFTs = async (address: string): Promise<UserNFT[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, you would fetch from the blockchain/marketplace API
  return dummyUserNFTs;
}; 