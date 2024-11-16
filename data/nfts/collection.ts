import { NFT } from '../types/nft';
import { allNFTs } from '../data/season1';

// Collection Stats
export const nftCollection = {
  floorPrice: "1.2 ETH",
  totalVolume: "156.8 ETH",
  items: 888,
  owners: 342,
  stats: [
    {
      label: "24h Volume",
      value: "12.4 ETH",
      change: "+24.5%",
      isPositive: true
    },
    {
      label: "7d Volume",
      value: "86.2 ETH",
      change: "+156.3%",
      isPositive: true
    },
    {
      label: "Floor Price",
      value: "1.2 ETH",
      change: "-2.4%",
      isPositive: false
    },
    {
      label: "Listed Items",
      value: "89",
      percentage: "10%",
      change: "-5",
      isPositive: false
    }
  ],
  recentActivity: [
    {
      type: "Sale",
      item: "Raska's Vision #42",
      price: "1.8 ETH",
      from: "0x742d...44e",
      to: "0x123...789",
      time: "2 hours ago"
    },
    {
      type: "List",
      item: "Unity Totem #12",
      price: "2.1 ETH",
      from: "0x456...abc",
      time: "4 hours ago"
    },
    {
      type: "Offer",
      item: "Tanek's Shield #77",
      price: "1.5 ETH",
      from: "0xdef...123",
      time: "6 hours ago"
    }
  ]
};

// Dummy user collection data
export const dummyUserCollection = {
  address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  stats: {
    totalValue: "4.5 ETH",
    nftsOwned: 3,
    collections: 1
  },
  nfts: allNFTs.slice(0, 3).map(nft => ({
    ...nft,
    collection: "Arktifact Origins",
    status: nft.id === "2" ? "staked" : nft.id === "3" ? "listed" : "owned",
    acquiredDate: `2024-01-${15 + parseInt(nft.id) * 5}`
  }))
};

// Types for collection data
export interface CollectionStats {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  percentage?: string;
}

export interface ActivityItem {
  type: "Sale" | "List" | "Offer";
  item: string;
  price: string;
  from: string;
  to?: string;
  time: string;
}

export interface UserNFT extends NFT {
  collection: string;
  status: "owned" | "staked" | "listed";
  acquiredDate: string;
}

export interface UserCollection {
  address: string;
  stats: {
    totalValue: string;
    nftsOwned: number;
    collections: number;
  };
  nfts: UserNFT[];
} 