import { NFT } from '@/types/nft';

export const allNFTs: NFT[] = [
  {
    id: "1",
    name: "Raska's Vision",
    title: "The First Vision",
    description: "The moment when Raska first glimpsed humanity's potential future.",
    image: "/images/nfts/raska-vision.jpg",
    image_prompt: "A mystical figure gazing into a swirling vortex of possible futures, rendered in ethereal purple and gold tones.",
    creator: "Arktifact Studios",
    price: 1.8,
    status: "available",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character", value: "Raska" },
      { trait_type: "Type", value: "Vision" },
      { trait_type: "Rarity", value: "Legendary" }
    ]
  },
  {
    id: "2",
    name: "Tanek's Shield",
    title: "The Protector's Shield",
    description: "The legendary shield used by Tanek to defend the first human settlement.",
    image: "/images/nfts/tanek-shield.jpg",
    image_prompt: "An ancient shield with glowing runes, battle-worn but still powerful.",
    creator: "Arktifact Studios",
    price: 1.5,
    status: "available",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character", value: "Tanek" },
      { trait_type: "Type", value: "Artifact" },
      { trait_type: "Rarity", value: "Rare" }
    ]
  },
  {
    id: "3",
    name: "Unity Totem",
    title: "The Unity Totem",
    description: "A sacred artifact symbolizing the unity of all tribes.",
    image: "/images/nfts/unity-totem.jpg",
    image_prompt: "An ancient totem pole with glowing symbols of unity and harmony.",
    creator: "Arktifact Studios",
    price: 2.0,
    status: "listed",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character", value: "All Tribes" },
      { trait_type: "Type", value: "Artifact" },
      { trait_type: "Rarity", value: "Legendary" }
    ]
  },
  {
    id: "4",
    name: "Raskara's Scroll",
    title: "The Ancient Scroll",
    description: "The first written record of the unified tribes' history.",
    image: "/images/nfts/raskara-scroll.jpg",
    image_prompt: "A weathered scroll with mystical writings and tribal symbols.",
    creator: "Arktifact Studios",
    price: 1.2,
    status: "available",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character", value: "Raskara" },
      { trait_type: "Type", value: "Artifact" },
      { trait_type: "Rarity", value: "Epic" }
    ]
  }
];

export default allNFTs; 