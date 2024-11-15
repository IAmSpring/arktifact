import { NFT } from '@/types/nft';

const episode1NFTs: NFT[] = [
  {
    id: "tanek-protector",
    name: "Tanek, the Protector",
    title: "Tanek, the Protector",
    description: "Tanek, the fierce protector, stands as a symbol of loyalty and strength, defending his tribe with honor. This limited Arktifact commemorates his courage in Episode 1 of Arktifact.",
    image_prompt: "A powerful portrait of Tanek in traditional tribal attire, his spear held with quiet strength and determination. His eyes reflect the fierce dedication of a guardian, while his stance embodies the protective spirit that would shape generations to come.",
    image: "/images/episodes/1/tanek_protector.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/tanek_the_protector",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Character Role", value: "Protector" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Loyalty and Strength" }
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
    image_prompt: "Captured in a moment of contemplation by firelight, Raskara's thoughtful expression reveals the mind of humanity's first visionary. His early carvings in the earth beside him hint at the symbols that would become the foundation of honor.",
    image: "/images/episodes/1/raskara_thinker.jpg",
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
    id: "honor-symbol",
    name: "The Honor Symbol",
    title: "The Honor Symbol",
    description: "The first symbol of honor, hand-carved by Raskara, embodies the values of unity and strength. This Arktifact marks the origins of a sacred legacy.",
    image: "/images/episodes/1/honor_symbol.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/honor_symbol",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Artifact Type", value: "Symbol" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Unity and Strength" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "The Honor Symbol"
    }
  },
  {
    id: "first-spear",
    name: "The First Spear",
    title: "The First Spear",
    description: "A handcrafted spear representing Tanek's dedication to his people. This Arktifact embodies protection and the strength of community in Episode 1.",
    image: "/images/episodes/1/first_spear.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/the_first_spear",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Artifact Type", value: "Weapon" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Protection and Strength" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "The First Spear"
    }
  },
  {
    id: "ancient-drum",
    name: "Ancient Drum of Gathering",
    title: "Ancient Drum of Gathering",
    description: "Used to call the tribe together, this drum symbolizes community and shared purpose. It marks a sacred bond that defines Episode 1's legacy.",
    image: "/images/episodes/1/ancient_drum.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/ancient_drum",
    attributes: [
      { trait_type: "Episode", value: "1" },
      { trait_type: "Artifact Type", value: "Ceremonial Item" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Community and Unity" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Ancient Drum"
    }
  }
]; 

export default episode1NFTs; 