import { NFT } from '@/types/nft';

const episode2NFTs: NFT[] = [
  {
    id: "tanas-warrior",
    name: "Tanas, Warrior of Unity",
    title: "Tanas, Warrior of Unity",
    description: "Tanas stands as a symbol of strength and peace, guarding the unified tribes as they forge a new community. His presence is a reminder of resilience and honor in Episode 2 of Arktifact.",
    image_prompt: "A powerful warrior figure in ceremonial attire, Tanas stands tall with a mix of strength and serenity. His posture and expression convey both protection and peace, while tribal symbols of unity adorn his armor.",
    image: "/images/episodes/2/tanas_warrior.jpg",
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
      text: "Tanas, Warrior of Unity"
    }
  },
  {
    id: "raska-visionary",
    name: "Raska, Visionary of Peace",
    title: "Raska, Visionary of Peace",
    description: "Raska guides the tribes toward a vision of unity and prosperity. As a symbol of wisdom, he embodies the spirit of Episode 2 in Arktifact.",
    image_prompt: "An elderly figure with wise eyes and gentle demeanor, Raska is depicted in a moment of contemplation. Surrounded by symbols of peace and unity, his hands gesture toward a bright future.",
    image: "/images/episodes/2/raska_visionary.jpg",
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
      text: "Raska, Visionary of Peace"
    }
  },
  {
    id: "unity-totem",
    name: "Unity Totem",
    title: "Unity Totem",
    description: "This totem represents the unification of two tribes, symbolizing harmony and shared purpose in Episode 2. A sacred emblem of lasting peace.",
    image_prompt: "A tall, intricately carved wooden totem combining symbols from both tribes. The artwork flows seamlessly between different tribal styles, creating a harmonious blend that represents unity.",
    image: "/images/episodes/2/unity_totem.jpg",
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

export default episode2NFTs; 