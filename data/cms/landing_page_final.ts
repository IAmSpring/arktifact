export const landingPageContent = {
  hero: {
    title: "Arktifact Chronicles",
    subtitle: "Journey Through Humanity's Greatest Story",
    tagline: "From Ancient Honor to Cosmic Unity",
    description: "Eight episodes. Eight ages. One epic journey through humanity's evolution.",
    background: "/images/hero/timeline-composite.jpg",
    ctaButtons: [
      {
        text: "Join the Journey",
        link: "https://opensea.io/collection/arktifact-ep1",
        style: "primary",
        tracking: "hero_opensea_click"
      },
      {
        text: "Explore the Lore",
        link: "#episodes",
        style: "secondary",
        tracking: "hero_lore_click"
      }
    ]
  },

  about: {
    title: "The Story of Us All",
    description: "Arktifact Chronicles traces humanity's journey from tribal origins to cosmic enlightenment through eight transformative episodes. Each episode brings unique NFTs that capture pivotal moments, legendary guardians, and powerful artifacts that shaped our destiny.",
    features: [
      {
        title: "Collect the Legacy",
        description: "Limited edition NFTs (100 per item) representing key moments in history",
        icon: "legacy-icon"
      },
      {
        title: "Join the Community",
        description: "Shape the future of storytelling with fellow collectors",
        icon: "community-icon"
      },
      {
        title: "Own the Story",
        description: "Each NFT unlocks exclusive lore and future opportunities",
        icon: "story-icon"
      }
    ]
  },

  episodes: {
    title: "Eight Ages of Humanity",
    subtitle: "Follow the Journey from Beginning to Enlightenment",
    list: [
      {
        number: 1,
        title: "Origins of Honor",
        subtitle: "The Dawn of Unity",
        description: "Join Tanek and Raskara as they forge the first bonds of honor that will echo through generations.",
        releaseDate: "January 1, 2025",
        thumbnail: "/images/episodes/ep1_honor.jpg",
        featured: {
          character: "Tanek",
          artifact: "Honor Symbol",
          scene: "The First Hunt"
        }
      },
      {
        number: 2,
        title: "Bonds of Kinship",
        subtitle: "The Age of Community",
        description: "Experience the rise of early civilization through Tanen and Raya's quest for sustainable growth.",
        releaseDate: "January 8, 2025",
        thumbnail: "/images/episodes/ep2_kinship.jpg",
        featured: {
          character: "Tanen",
          artifact: "Hunter's Spear",
          scene: "The Great Harvest"
        }
      },
      {
        number: 3,
        title: "Age of Innovation",
        subtitle: "The Birth of Knowledge",
        description: "Witness Tanos and Rassan's journey to preserve and advance human understanding.",
        releaseDate: "January 15, 2025",
        thumbnail: "/images/episodes/ep3_innovation.jpg",
        featured: {
          character: "Tanos",
          artifact: "Knowledge Scroll",
          scene: "The First Library"
        }
      },
      {
        number: 4,
        title: "Guardians of Knowledge",
        subtitle: "The Era of Wisdom",
        description: "Follow Tana and Raya as they protect humanity's accumulated wisdom.",
        releaseDate: "January 22, 2025",
        thumbnail: "/images/episodes/ep4_knowledge.jpg",
        featured: {
          character: "Tana",
          artifact: "Wisdom Crystal",
          scene: "The Academy's Defense"
        }
      },
      {
        number: 5,
        title: "Industrial Resilience",
        subtitle: "The Age of Progress",
        description: "Join Taniel and Raiden in their fight for human dignity in an age of machines.",
        releaseDate: "January 29, 2025",
        thumbnail: "/images/episodes/ep5_industry.jpg",
        featured: {
          character: "Taniel",
          artifact: "Worker's Hammer",
          scene: "The Great Strike"
        }
      },
      {
        number: 6,
        title: "New Frontiers",
        subtitle: "The Digital Dawn",
        description: "Experience Tara and Rian's quest to balance technology with human values.",
        releaseDate: "February 5, 2025",
        thumbnail: "/images/episodes/ep6_digital.jpg",
        featured: {
          character: "Tara",
          artifact: "Digital Shield",
          scene: "The AI Awakening"
        }
      },
      {
        number: 7,
        title: "The Era of Unity",
        subtitle: "Cosmic Harmony",
        description: "Follow Tarek and Rala as humanity reaches for the stars and discovers its cosmic family.",
        releaseDate: "February 12, 2025",
        thumbnail: "/images/episodes/ep7_unity.jpg",
        featured: {
          character: "Tarek",
          artifact: "Alliance Emblem",
          scene: "First Contact"
        }
      },
      {
        number: 8,
        title: "A Legacy of Honor",
        subtitle: "The Final Chapter",
        description: "Join Tan and Rae in the culmination of humanity's journey toward universal enlightenment.",
        releaseDate: "February 19, 2025",
        thumbnail: "/images/episodes/ep8_legacy.jpg",
        featured: {
          character: "Tan",
          artifact: "Peace Crystal",
          scene: "The Universal Council"
        }
      }
    ]
  },

  nftCollection: {
    title: "Collect the Arktifacts",
    description: "Each episode features 10 unique NFTs, limited to 100 editions each:",
    categories: [
      {
        type: "Characters",
        description: "The legendary guardians who shaped each age",
        quantity: 2,
        editions: 100
      },
      {
        type: "Artifacts",
        description: "Powerful symbols that marked turning points",
        quantity: 4,
        editions: 100
      },
      {
        type: "Scenes",
        description: "Pivotal moments that changed history",
        quantity: 3,
        editions: 100
      },
      {
        type: "Civilizations",
        description: "The worlds and societies of each era",
        quantity: 1,
        editions: 100
      }
    ]
  },

  community: {
    title: "Join the Chronicles",
    description: "Become part of a community that's shaping the future of decentralized storytelling.",
    platforms: {
      discord: {
        title: "Discord Community",
        description: "Daily lore drops, collector events, and exclusive content",
        link: "https://discord.gg/arktifact"
      },
      twitter: {
        title: "Twitter/X Updates",
        description: "Latest news, releases, and community highlights",
        link: "https://twitter.com/arktifactnft"
      }
    }
  },

  newsletter: {
    title: "Stay Updated",
    description: "Get early access to episodes, exclusive content, and community events.",
    form: {
      placeholder: "Enter your email",
      button: "Join the Journey",
      successMessage: "Welcome to the Chronicles!",
      errorMessage: "Please try again"
    }
  },

  footer: {
    navigation: [
      {
        title: "Explore",
        links: [
          { text: "Episodes", href: "#episodes" },
          { text: "NFTs", href: "#nfts" },
          { text: "Community", href: "#community" },
          { text: "About", href: "#about" }
        ]
      },
      {
        title: "Connect",
        links: [
          { text: "Discord", href: "https://discord.gg/arktifact" },
          { text: "Twitter", href: "https://twitter.com/arktifactnft" },
          { text: "OpenSea", href: "https://opensea.io/collection/arktifact" }
        ]
      }
    ],
    copyright: "© 2025 Arktifact Chronicles. All rights reserved."
  }
}; 