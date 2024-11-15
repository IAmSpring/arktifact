import { NFT } from '@/types/nft';

export const season1NFTs: NFT[] = [
  {
    id: "tanek-protector",
    name: "Tanek the Protector",
    title: "Tanek the Protector",
    description: "Tanek, the fierce protector, stands as a symbol of loyalty and strength, defending his tribe with honor. This limited Arktifact commemorates his courage in Episode 1 of Arktifact.",
    image: "/images/nfts/tanek-protector.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/tanek-protector",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character Role", value: "Protector" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Tanek the Protector"
    }
  },
  {
    id: "raskara-thinker",
    name: "Raskara, the Thinker",
    title: "Raskara, the Thinker",
    description: "Raskara, a visionary in the tribe, is the first to carve symbols of honor, seeking unity and wisdom. This Arktifact celebrates his early role in defining the tribe's legacy.",
    image: "/images/nfts/raskara_thinker.png",
    openSeaUrl: "https://opensea.io/assets/arkifact/raskara_the_thinker",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character Role", value: "Thinker" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Unity and Wisdom" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Raskara the Thinker"
    }
  },
  {
    id: "tanas-warrior",
    name: "Tanas, Warrior of Unity",
    title: "Tanas, Warrior of Unity",
    description: "Tanas stands as a symbol of strength and peace, guarding the unified tribes as they forge a new community. His presence is a reminder of resilience and honor in Episode 2 of Arktifact.",
    image: "/images/nfts/tanas_warrior.png",
    openSeaUrl: "https://opensea.io/assets/arkifact/tanas_warrior_of_unity",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Character Role", value: "Warrior of Unity" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Strength and Peace" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Tanas the Warrior"
    }
  },
  {
    id: "raska-visionary",
    name: "Raska, Visionary of Peace",
    title: "Raska, Visionary of Peace",
    description: "Raska guides the tribes toward a vision of unity and prosperity. As a symbol of wisdom, he embodies the spirit of Episode 2 in Arktifact.",
    image: "/images/nfts/raska_visionary.png",
    openSeaUrl: "https://opensea.io/assets/arkifact/raska_visionary_of_peace",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Character Role", value: "Visionary of Peace" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Unity and Wisdom" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Raska the Visionary"
    }
  },
  {
    id: "unity-totem",
    name: "Unity Totem",
    title: "Unity Totem",
    description: "This totem represents the unification of two tribes, symbolizing harmony and shared purpose in Episode 2. A sacred emblem of lasting peace.",
    image: "/images/nfts/unity_totem.png",
    openSeaUrl: "https://opensea.io/assets/arkifact/unity_totem",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Totem" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Harmony and Shared Purpose" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Unity Totem"
    }
  }
];

export default season1NFTs; 