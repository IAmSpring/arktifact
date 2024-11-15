export const arktifactCollection = {
  title: "Arktifact Chronicles",
  tagline: "Uncover the legacy. One artifact, one era, one story.",
  description: "A limited collection of artifacts, characters, and civilizations spanning humanity's journey from tribal origins to cosmic unity.",
  
  collectionStructure: {
    totalEpisodes: 8,
    itemsPerEpisode: 10,
    totalItems: 80,
    editionsPerItem: 100,
    itemTypes: {
      characters: {
        quantity: 2,
        description: "Main protagonists from each episode",
        examples: [
          "Tanek & Raskara",
          "Tanen & Raya",
          "Tanos & Rassan",
          "Tana & Rasien",
          "Taniel & Raiden",
          "Tara & Ras",
          "Tenek & Raelan",
          "Tan & Rae"
        ]
      },
      civilization: {
        quantity: 1,
        description: "Snapshot of the world/society in each era",
        examples: [
          "Ancient Tribal Lands",
          "Early Agricultural Settlement",
          "Early City-State",
          "Knowledge Academy",
          "Industrial Town",
          "Digital Metropolis",
          "Interstellar Society",
          "Utopian Cosmic Civilization"
        ]
      },
      artifacts: {
        quantity: 4,
        description: "Key items and symbols from each episode",
        examples: [
          "Honor Symbol",
          "Unity Totem",
          "Knowledge Repository",
          "Guardian's Badge",
          "Worker's Banner",
          "Digital Shield",
          "Star Maps",
          "Peace Crystal"
        ]
      },
      scenes: {
        quantity: 3,
        description: "Iconic moments from each episode",
        examples: [
          "The First Hunt",
          "Harvest Celebration",
          "Innovation Council",
          "Academy Defense",
          "Workers' Unity",
          "AI Integration",
          "First Contact",
          "Universal Peace"
        ]
      }
    }
  },

  episodeBreakdown: {
    episode1: {
      title: "Origins of Honor",
      theme: "Tribal unity and survival",
      nftTypes: [
        {
          type: "Characters",
          items: ["Tanek the Protector", "Raskara the Innovator"]
        },
        {
          type: "Civilization",
          items: ["Ancient Tribal Settlement"]
        },
        {
          type: "Artifacts",
          items: [
            "Honor Symbol",
            "First Spear",
            "Tribal Tools",
            "Ancient Drum"
          ]
        },
        {
          type: "Scenes",
          items: [
            "The First Hunt",
            "Unity Gathering",
            "Night of Protection"
          ]
        }
      ]
    },
    // Similar structure for episodes 2-8
  },

  nftUtility: {
    communityBenefits: [
      "Voting rights on visual development",
      "Early access to episode content",
      "Behind-the-scenes material",
      "Exclusive lore drops"
    ],
    creativeInput: [
      "Character design feedback",
      "Scene composition voting",
      "Color palette selection",
      "Story element suggestions"
    ],
    exclusiveAccess: [
      "Private viewing parties",
      "Creator Q&A sessions",
      "Concept art reveals",
      "Production updates"
    ]
  },

  releaseStrategy: {
    schedule: "Episode-by-episode release",
    timing: "2-4 weeks between drops",
    platform: "OpenSea (Polygon)",
    pricing: {
      characters: "0.5 ETH",
      civilization: "0.4 ETH",
      artifacts: "0.3 ETH",
      scenes: "0.3 ETH"
    }
  },

  metadata: {
    standardAttributes: [
      {
        trait_type: "Episode",
        value: "1-8"
      },
      {
        trait_type: "Item Type",
        value: ["Character", "Civilization", "Artifact", "Scene"]
      },
      {
        trait_type: "Rarity",
        value: "Limited Edition"
      },
      {
        trait_type: "Quantity",
        value: "100"
      },
      {
        trait_type: "Series",
        value: "Arktifact"
      }
    ],
    customAttributes: [
      "Historical Significance",
      "Cultural Impact",
      "Legacy Connection",
      "Era Influence"
    ]
  },

  communityEngagement: {
    platforms: {
      discord: {
        channels: [
          "artifact-lore",
          "episode-discussion",
          "collector-showcase",
          "production-updates"
        ]
      },
      twitter: {
        content: [
          "Artifact reveals",
          "Lore drops",
          "Community highlights",
          "Production milestones"
        ]
      }
    },
    events: [
      "Monthly lore sessions",
      "Collector gatherings",
      "Art previews",
      "Community feedback rounds"
    ]
  },

  productionFunding: {
    allocation: {
      visualDevelopment: "40%",
      animation: "30%",
      marketing: "15%",
      community: "10%",
      operations: "5%"
    },
    milestones: [
      "Concept art completion",
      "Character design finalization",
      "Animation production",
      "Post-production",
      "Community content"
    ]
  }
}; 