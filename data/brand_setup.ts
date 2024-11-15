export const brandSetup = {
  domain: {
    name: "arktifact.com",
    setup: {
      hosting: {
        platform: "Vercel",
        configuration: [
          "Deploy Next.js application",
          "Configure custom domain",
          "Set up SSL certificate",
          "Configure DNS records",
          "Test domain propagation"
        ]
      },
      email: {
        provider: "Google Workspace",
        accounts: [
          "info@arktifact.com",
          "support@arktifact.com",
          "community@arktifact.com"
        ]
      }
    }
  },

  websiteStructure: {
    mainSections: {
      hero: {
        elements: [
          "Background composite of all episodes",
          "Main title: 'Arktifact Chronicles: The Journey of Humanity'",
          "Subtitle explaining the concept",
          "Primary CTA to OpenSea collections",
          "Secondary CTA for email signup"
        ],
        design: {
          background: "Blend of landscapes from different episodes",
          typography: "Cinzel font for headings",
          colorScheme: "Purple and pink gradients"
        }
      },
      about: {
        content: [
          "Series overview",
          "Episode previews",
          "Collection highlights",
          "Release schedule"
        ],
        visuals: [
          "Episode thumbnails",
          "Character previews",
          "Artifact teasers"
        ]
      },
      collections: {
        structure: [
          "Episode grid layout",
          "Individual collection previews",
          "Direct OpenSea links",
          "Artifact showcases"
        ]
      },
      lore: {
        elements: [
          "Story timeline",
          "Character profiles",
          "World descriptions",
          "Artifact histories"
        ]
      }
    }
  },

  platformIntegration: {
    opensea: {
      setup: [
        "Create collection profile",
        "Configure royalties",
        "Set up collection metadata",
        "Prepare asset listings",
        "Configure collection display"
      ],
      profile: {
        name: "Arktifact Chronicles",
        banner: "Composite timeline image",
        description: "Journey through humanity's greatest moments",
        links: [
          "Website",
          "Twitter",
          "Discord",
          "Medium"
        ]
      }
    },
    social: {
      twitter: {
        handle: "@ArktifactNFT",
        setup: [
          "Profile optimization",
          "Content calendar",
          "Automated posting",
          "Community engagement plan"
        ]
      },
      discord: {
        structure: [
          "Welcome channel",
          "Announcements",
          "Episode discussions",
          "Collector showcase",
          "Community events"
        ],
        roles: [
          "Admins",
          "Moderators",
          "Episode Collectors",
          "Community Members"
        ]
      }
    }
  },

  marketingSetup: {
    email: {
      platform: "MailChimp",
      campaigns: [
        "Welcome series",
        "Episode announcements",
        "Lore drops",
        "Community updates"
      ],
      automation: [
        "Signup confirmation",
        "Release notifications",
        "Collector updates"
      ]
    },
    content: {
      blog: [
        "Episode backstories",
        "Character features",
        "Artifact spotlights",
        "Community stories"
      ],
      social: [
        "Daily lore snippets",
        "Artifact previews",
        "Community highlights",
        "Release countdowns"
      ]
    }
  },

  technicalOptimization: {
    seo: {
      metadata: [
        "Page titles",
        "Meta descriptions",
        "Open Graph tags",
        "Twitter cards"
      ],
      keywords: [
        "NFT series",
        "Digital artifacts",
        "Historical NFTs",
        "Collectible story"
      ]
    },
    performance: {
      optimization: [
        "Image compression",
        "Code minification",
        "Lazy loading",
        "Caching strategy"
      ],
      testing: [
        "Mobile responsiveness",
        "Load time optimization",
        "Cross-browser testing",
        "Performance monitoring"
      ]
    }
  },

  launchChecklist: {
    prelaunch: [
      "Website deployment",
      "OpenSea collection setup",
      "Social media profiles",
      "Email system integration",
      "Content calendar preparation"
    ],
    launch: [
      "Website go-live",
      "Collection reveal",
      "Social media announcement",
      "Community opening",
      "Email campaign initiation"
    ],
    postlaunch: [
      "Community engagement",
      "Performance monitoring",
      "Feedback collection",
      "Content updates",
      "Analytics review"
    ]
  }
}; 