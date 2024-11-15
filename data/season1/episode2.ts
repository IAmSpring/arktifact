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
  },
  {
    id: "communal-drum",
    name: "Communal Drum",
    title: "Communal Drum",
    description: "This larger, ornate drum represents the heartbeat of the newly unified tribes. It symbolizes the power of unity and shared celebration.",
    image_prompt: "A magnificent ceremonial drum adorned with intricate carvings from both tribes, its surface decorated with symbols of unity and celebration. The drum stands prominently on an ornate wooden stand.",
    image: "/images/episodes/2/communal_drum.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/communal_drum",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Ceremonial Item" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Unity and Celebration" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Communal Drum"
    }
  },
  {
    id: "first-dwelling",
    name: "The First Dwelling",
    title: "The First Dwelling",
    description: "The communal dwelling symbolizes the growth of a united tribe and a shared space for dialogue and ceremony. It's a place of peace and collaboration.",
    image_prompt: "A grand communal structure combining architectural elements from both tribes, with smoke rising from central hearths and decorated entrance ways showing symbols of unity.",
    image: "/images/episodes/2/first_dwelling.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/first_dwelling",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Structure" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Community and Collaboration" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "The First Dwelling"
    }
  },
  {
    id: "scroll-unity",
    name: "Scroll of Unity",
    title: "Scroll of Unity",
    description: "The Scroll of Unity marks the first agreements between tribes, creating a foundation for peace and shared values in Episode 2.",
    image_prompt: "An ancient scroll with carefully preserved markings, showing the first written agreements between tribes. The parchment bears ceremonial seals and symbols from both peoples.",
    image: "/images/episodes/2/scroll_of_unity.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/scroll_of_unity",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Document" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Peace and Shared Values" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Scroll of Unity"
    }
  },
  {
    id: "emblem-peace",
    name: "Emblem of Peace",
    title: "Emblem of Peace",
    description: "An emblem worn by leaders to signify their commitment to unity and peace, the Emblem of Peace embodies the spirit of harmony in Episode 2.",
    image_prompt: "A beautifully crafted medallion combining symbols from both tribes, worn as a mark of leadership and peace. The emblem glows with subtle details that represent harmony.",
    image: "/images/episodes/2/emblem_of_peace.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/emblem_of_peace",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Emblem" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Commitment to Peace" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Emblem of Peace"
    }
  },
  {
    id: "ceremonial-staff",
    name: "Ceremonial Staff",
    title: "Ceremonial Staff",
    description: "The ceremonial staff, adorned with symbols of strength and wisdom, is used during gatherings, embodying the spiritual bond of the tribe in Episode 2.",
    image_prompt: "A tall, ornate staff carved from ancient wood, decorated with feathers, crystals, and symbols of both tribes. The staff seems to radiate an aura of wisdom and authority.",
    image: "/images/episodes/2/ceremonial_staff.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/ceremonial_staff",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Ceremonial Item" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Strength and Wisdom" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Ceremonial Staff"
    }
  },
  {
    id: "landscape-unity",
    name: "Landscape of Unity",
    title: "Landscape of Unity",
    description: "An aerial view of the unified tribes' settlement, showing the communal structures and gathering spaces. This scene represents peace and cooperation.",
    image_prompt: "A sweeping vista showing the merged tribal settlements, with smoke rising from communal fires and people gathering in shared spaces. The landscape shows the harmonious blend of two cultures.",
    image: "/images/episodes/2/landscape_unity.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/landscape_of_unity",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Landscape" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Peace and Cooperation" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Landscape of Unity"
    }
  },
  {
    id: "night-stars-scene",
    name: "Night of the Stars Scene",
    title: "Night of the Stars Scene",
    description: "A serene night scene showing Tanas and Raska under the stars, reflecting on their shared vision for a peaceful future. This Arktifact symbolizes hope, unity, and the beginning of a new era in Episode 2.",
    image_prompt: "A mystical nighttime scene with Tanas and Raska seated by a ceremonial fire, their faces illuminated by starlight as they share wisdom and plan for their united future.",
    image: "/images/episodes/2/night_stars_scene.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/night_of_the_stars_scene",
    attributes: [
      { trait_type: "Episode", value: "2" },
      { trait_type: "Artifact Type", value: "Scene" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Hope and Unity" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Night of the Stars Scene"
    }
  }
];

export default episode2NFTs; 