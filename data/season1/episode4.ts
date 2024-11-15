import { NFT } from '@/types/nft';

const episode4NFTs: NFT[] = [
  {
    id: "tana-defender",
    name: "Tana, Defender of Knowledge",
    title: "Tana, Defender of Knowledge",
    description: "Tana, clad in scholarly armor, stands as a guardian of the academy and the values of wisdom and learning. Her commitment symbolizes strength in safeguarding knowledge in Episode 4 of Arktifact.",
    image_prompt: "A powerful figure in unique armor that blends scholarly robes with protective elements. Tana stands vigilant at the academy entrance, surrounded by scrolls and ancient tomes, her expression showing both wisdom and determination.",
    image: "/images/episodes/4/tana_defender.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/tana_defender_of_knowledge",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Character Role", value: "Defender of Knowledge" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Strength and Wisdom" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Tana the Defender"
    }
  },
  {
    id: "raya-seeker",
    name: "Raya, Seeker of Truth",
    title: "Raya, Seeker of Truth",
    description: "Raya, the visionary and seeker, explores both the stars and the depths of knowledge. She represents intellectual curiosity and the pursuit of understanding in Episode 4.",
    image_prompt: "A contemplative figure surrounded by astronomical instruments and ancient texts. Raya gazes thoughtfully at a star chart while other scientific instruments and scrolls lie carefully arranged around her workspace.",
    image: "/images/episodes/4/raya_seeker.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/raya_seeker_of_truth",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Character Role", value: "Seeker of Truth" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Curiosity and Understanding" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Raya the Seeker"
    }
  },
  {
    id: "knowledge-academy",
    name: "The Knowledge Academy",
    title: "The Knowledge Academy",
    description: "The first academy established as a sanctuary of learning, filled with scrolls and early tools for study. This structure embodies the pursuit of wisdom in Episode 4.",
    image_prompt: "A majestic building combining beauty and function, with high ceilings, large windows, and multiple study areas. The architecture emphasizes both the grandeur of learning and the practical needs of scholars, with shelves of scrolls visible through the windows.",
    image: "/images/episodes/4/knowledge_academy.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/knowledge_academy",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Structure" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Learning and Preservation" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "The Knowledge Academy"
    }
  },
  {
    id: "star-map",
    name: "The Star Map",
    title: "The Star Map",
    description: "A detailed map of constellations and celestial patterns, created by Raya as she studied the cosmos. This artifact reflects humanity's early exploration of the universe in Episode 4.",
    image_prompt: "An intricate astronomical chart showing constellations, celestial movements, and early scientific notations. The map combines artistic beauty with emerging scientific precision, featuring gold leaf details on aged parchment.",
    image: "/images/episodes/4/star_map.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/the_star_map",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Map" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Exploration and Knowledge" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "The Star Map"
    }
  },
  {
    id: "scroll-truth",
    name: "Scroll of Truth",
    title: "Scroll of Truth",
    description: "The Scroll of Truth outlines the principles of knowledge-sharing and ethical pursuit. It serves as a moral guide for learning in Episode 4.",
    image_prompt: "A sacred scroll with elaborate calligraphy and philosophical teachings, adorned with symbols of wisdom and truth. The parchment glows with an inner light, suggesting the illuminating nature of its contents.",
    image: "/images/episodes/4/scroll_truth.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/scroll_of_truth",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Document" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Wisdom and Ethics" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Scroll of Truth"
    }
  },
  {
    id: "scholar-emblem",
    name: "Emblem of the Scholar",
    title: "Emblem of the Scholar",
    description: "Awarded to individuals who completed their studies, this emblem represents their role as guardians of knowledge. It symbolizes dedication to learning in Episode 4.",
    image_prompt: "A prestigious emblem combining symbols of wisdom and achievement, crafted with meticulous detail. The piece features an open book motif with rays of light, representing the illumination of knowledge.",
    image: "/images/episodes/4/scholar_emblem.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/emblem_of_the_scholar",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Emblem" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Dedication and Honor" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Scholar's Emblem"
    }
  },
  {
    id: "wisdom-quill",
    name: "Quill of Wisdom",
    title: "Quill of Wisdom",
    description: "A finely crafted quill used by academy scribes to document discoveries. This artifact symbolizes the preservation of knowledge in Episode 4.",
    image_prompt: "An exquisitely crafted writing instrument with ornate decorations and a perfectly shaped nib. The quill seems to capture the light in a way that suggests its importance in preserving wisdom for future generations.",
    image: "/images/episodes/4/wisdom_quill.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/quill_of_wisdom",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Tool" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Documentation and Learning" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Quill of Wisdom"
    }
  },
  {
    id: "ceremonial-lantern",
    name: "Ceremonial Lantern",
    title: "Ceremonial Lantern",
    description: "A ceremonial lantern symbolizing the light of knowledge, placed at the center of the academy during important discussions. It represents enlightenment and unity in Episode 4.",
    image_prompt: "A beautifully crafted lantern with intricate patterns that cast meaningful shadows. Its warm glow illuminates ancient symbols of wisdom etched into its metalwork, creating an atmosphere of reverence and enlightenment.",
    image: "/images/episodes/4/ceremonial_lantern.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/ceremonial_lantern",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Ceremonial Item" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Enlightenment and Unity" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Ceremonial Lantern"
    }
  },
  {
    id: "learning-landscape",
    name: "Landscape of Learning",
    title: "Landscape of Learning",
    description: "An aerial view of the growing academy and its surroundings, highlighting the development of the knowledge sanctuary as a central community space in Episode 4.",
    image_prompt: "A panoramic view of the academy complex, showing beautiful gardens, study areas, and architectural marvels dedicated to learning. The scene captures both the grandeur of the institution and the peaceful atmosphere of scholarly pursuit.",
    image: "/images/episodes/4/learning_landscape.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/landscape_of_learning",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Landscape" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Growth and Learning" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Landscape of Learning"
    }
  },
  {
    id: "night-enlightenment",
    name: "Night of Enlightenment Scene",
    title: "Night of Enlightenment Scene",
    description: "A serene scene featuring Tana and Raya under the stars, discussing the mysteries of the universe. This Arktifact represents the pursuit of understanding and unity in Episode 4.",
    image_prompt: "A mystical nighttime scene where Tana and Raya share profound insights beneath a star-filled sky. Their expressions reflect deep contemplation as they discuss the cosmos, surrounded by scrolls and astronomical instruments.",
    image: "/images/episodes/4/night_enlightenment.jpg",
    openSeaUrl: "https://opensea.io/assets/arkifact/night_of_enlightenment",
    attributes: [
      { trait_type: "Episode", value: "4" },
      { trait_type: "Artifact Type", value: "Scene" },
      { trait_type: "Rarity", value: "Limited Edition" },
      { trait_type: "Quantity Available", value: "100" },
      { trait_type: "Series", value: "Arktifact" },
      { trait_type: "Symbolism", value: "Curiosity and Unity" }
    ],
    fallback: {
      width: 400,
      height: 400,
      text: "Night of Enlightenment"
    }
  }
];

export default episode4NFTs; 