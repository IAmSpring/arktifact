import { NFT } from '@/types/nft';

export const season1NFTs: NFT[] = [
  {
    name: "Tanek, the Protector",
    description: "Tanek, the fierce protector, stands as a symbol of loyalty and strength, defending his tribe with honor. This limited Arktifact commemorates his courage in Episode 1 of Arktifact.",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character Role", value: "Protector" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Loyalty and Strength" }
    ],
    image: "/images/nfts/tanek_protector.png",
    external_url: "https://opensea.io/assets/arkifact/tanek_the_protector"
  },
  {
    name: "Raskara, the Thinker",
    description: "Raskara, a visionary in the tribe, is the first to carve symbols of honor, seeking unity and wisdom. This Arktifact celebrates his early role in defining the tribe's legacy.",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character Role", value: "Thinker" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Unity and Wisdom" }
    ],
    image: "/images/nfts/raskara_thinker.png",
    external_url: "https://opensea.io/assets/arkifact/raskara_the_thinker"
  },
  {
    name: "Tanas, Warrior of Unity",
    description: "Tanas stands as a symbol of strength and peace, guarding the unified tribes as they forge a new community. His presence is a reminder of resilience and honor in Episode 2 of Arktifact.",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Character Role", value: "Warrior of Unity" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Strength and Peace" }
    ],
    image: "/images/nfts/tanas_warrior.png",
    external_url: "https://opensea.io/assets/arkifact/tanas_warrior_of_unity"
  },
  {
    name: "Raska, Visionary of Peace",
    description: "Raska guides the tribes toward a vision of unity and prosperity. As a symbol of wisdom, he embodies the spirit of Episode 2 in Arktifact.",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Character Role", value: "Visionary of Peace" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Unity and Wisdom" }
    ],
    image: "/images/nfts/raska_visionary.png",
    external_url: "https://opensea.io/assets/arkifact/raska_visionary_of_peace"
  },
  {
    name: "Unity Totem",
    description: "This totem represents the unification of two tribes, symbolizing harmony and shared purpose in Episode 2. A sacred emblem of lasting peace.",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Totem" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Harmony and Shared Purpose" }
    ],
    image: "/images/nfts/unity_totem.png",
    external_url: "https://opensea.io/assets/arkifact/unity_totem"
  }
  // ... Add remaining Episode 2 NFTs
]; 