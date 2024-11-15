export const season1ReleaseStrategy = {
  releaseSchedule: {
    startDate: "January 5, 2024", // First Friday of January
    cadence: "Monthly",
    dropDays: "First Friday of each month",
    timeline: [
      {
        episode: 1,
        title: "Origins of Honor",
        releaseDate: "January 5, 2024",
        theme: "Dawn of Civilization"
      },
      {
        episode: 2,
        title: "Bonds of Kinship",
        releaseDate: "February 2, 2024",
        theme: "Agricultural Unity"
      },
      {
        episode: 3,
        title: "Age of Innovation",
        releaseDate: "March 1, 2024",
        theme: "Early Technology"
      },
      {
        episode: 4,
        title: "Guardians of Knowledge",
        releaseDate: "April 5, 2024",
        theme: "Wisdom Preservation"
      },
      {
        episode: 5,
        title: "Industrial Resilience",
        releaseDate: "May 3, 2024",
        theme: "Machine Age"
      },
      {
        episode: 6,
        title: "New Frontiers",
        releaseDate: "June 7, 2024",
        theme: "Digital Revolution"
      },
      {
        episode: 7,
        title: "The Era of Unity",
        releaseDate: "July 5, 2024",
        theme: "Cosmic Alliance"
      },
      {
        episode: 8,
        title: "The Final Legacy",
        releaseDate: "August 2, 2024",
        theme: "Universal Peace"
      }
    ]
  },

  dropStructure: {
    itemsPerEpisode: 10,
    copiesPerItem: 100,
    totalItemsPerDrop: 1000,
    pricing: {
      initial: "0.1 ETH",
      bundleDiscount: "0.8 ETH for complete episode set"
    }
  },

  monthlyEngagement: {
    week1: {
      focus: "Episode Drop",
      activities: [
        "Release new Arktifacts",
        "Launch celebration event",
        "Community showcase",
        "Collector spotlight"
      ]
    },
    week2: {
      focus: "Lore Deep Dive",
      activities: [
        "Episode backstory reveals",
        "Character profiles",
        "Artifact histories",
        "World-building content"
      ]
    },
    week3: {
      focus: "Community Building",
      activities: [
        "Collector challenges",
        "Discord events",
        "Trading discussions",
        "Set completion celebrations"
      ]
    },
    week4: {
      focus: "Next Episode Preview",
      activities: [
        "Teaser content",
        "Sneak peeks",
        "Lore hints",
        "Community predictions"
      ]
    }
  },

  collectorBenefits: {
    episodeCompletion: {
      rewards: [
        "Episode-specific digital lorebook",
        "Exclusive Discord role",
        "Early access to next episode teasers",
        "Special community badge"
      ],
      access: [
        "Episode-specific lore events",
        "Voting rights on episode visuals",
        "Behind-the-scenes content",
        "Collector-only channels"
      ]
    },
    seriesCompletion: {
      rewards: [
        "Legacy Collector NFT badge",
        "Complete series lorebook",
        "Exclusive art prints",
        "Season 2 whitelist access"
      ],
      access: [
        "All future lore events",
        "Creative input privileges",
        "Private community access",
        "Early access to future releases"
      ]
    }
  },

  productionEvolution: {
    phase1: {
      episodes: [1, 2],
      focus: "Establishing core art style and community",
      improvements: [
        "Basic artwork refinement",
        "Community framework setup",
        "Initial lore system"
      ]
    },
    phase2: {
      episodes: [3, 4],
      focus: "Enhanced visuals and engagement",
      improvements: [
        "Higher resolution artwork",
        "Expanded lore content",
        "Interactive elements"
      ]
    },
    phase3: {
      episodes: [5, 6],
      focus: "Advanced features and utility",
      improvements: [
        "Animation elements",
        "Enhanced metadata",
        "Expanded utility"
      ]
    },
    phase4: {
      episodes: [7, 8],
      focus: "Premium quality and future preparation",
      improvements: [
        "Premium animations",
        "Cross-episode utility",
        "Season 2 preparation"
      ]
    }
  },

  marketingStrategy: {
    channels: [
      "Twitter",
      "Discord",
      "OpenSea",
      "Medium",
      "YouTube"
    ],
    contentTypes: {
      daily: [
        "Lore snippets",
        "Artwork previews",
        "Community highlights",
        "Collection updates"
      ],
      weekly: [
        "Lore deep dives",
        "Collector spotlights",
        "Episode insights",
        "Community events"
      ],
      monthly: [
        "Episode releases",
        "Major announcements",
        "Special events",
        "Milestone celebrations"
      ]
    },
    collaborations: {
      types: [
        "NFT influencers",
        "Art communities",
        "Storytelling platforms",
        "Web3 projects"
      ],
      goals: [
        "Expand reach",
        "Cross-pollinate communities",
        "Build credibility",
        "Drive engagement"
      ]
    }
  }
}; 