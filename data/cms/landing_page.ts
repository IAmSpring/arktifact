export const landingPageContent = {
  hero: {
    title: "Arktifact Chronicles – Humanity's Journey Through Time",
    subtitle: "Explore the story of civilization, captured through collectible digital artifacts.",
    background: "/images/hero-bg.jpg",
    ctaButtons: [
      {
        text: "Explore on OpenSea",
        link: "https://opensea.io/collection/arktifact",
        style: "primary",
        tracking: "hero_opensea_click"
      },
      {
        text: "Get Updates",
        link: "#signup",
        style: "secondary",
        tracking: "hero_signup_click"
      }
    ]
  },

  about: {
    title: "What is Arktifact Chronicles?",
    description: "Arktifact Chronicles is a digital journey that spans humanity's history, capturing key moments, inventions, and values through eight unique ages. Each Arktifact holds a story of courage, knowledge, resilience, and unity.",
    carousel: {
      images: [
        {
          src: "/images/episodes/episode1_preview.jpg",
          alt: "Origins of Honor Preview",
          caption: "The dawn of civilization"
        },
        {
          src: "/images/episodes/episode2_preview.jpg",
          alt: "Age of Unity Preview",
          caption: "Early tribal alliances"
        }
        // Additional episode previews...
      ],
      autoplay: true,
      interval: 5000
    },
    cta: {
      text: "Collect Your Arktifacts",
      link: "https://opensea.io/collection/arktifact",
      tracking: "about_collect_click"
    }
  },

  episodes: {
    title: "Explore Each Age",
    cards: [
      {
        number: 1,
        title: "Origins of Honor",
        subtitle: "The dawn of honor and unity",
        description: "In a time of unity, humanity took its first steps toward honor.",
        thumbnail: "/images/episodes/ep1_thumb.jpg",
        link: "https://opensea.io/collection/arktifact-ep1",
        background: "bg-gradient-to-r from-purple-900 to-pink-900"
      }
      // Additional episode cards...
    ]
  },

  artifacts: {
    title: "Discover the Legacy",
    featured: [
      {
        name: "The Honor Symbol",
        episode: "Episode 1",
        description: "An ancient mark of unity among early tribes",
        image: "/images/artifacts/honor_symbol.jpg",
        link: "https://opensea.io/assets/arktifact/honor-symbol"
      }
      // Additional featured artifacts...
    ],
    cta: {
      text: "Explore the Complete Collection on OpenSea",
      link: "https://opensea.io/collection/arktifact"
    }
  },

  guardians: {
    title: "Meet the Guardians of Arktifact",
    characters: [
      {
        name: "Tanis",
        title: "Guardian of Honor",
        description: "A warrior symbolizing unity and resilience in ancient times",
        image: "/images/guardians/tanis.jpg",
        details: {
          role: "Warrior-Protector",
          era: "Origins of Honor",
          significance: "First to establish the code of honor"
        }
      }
      // Additional guardians...
    ],
    cta: {
      text: "Read the Lore",
      link: "/lore",
      tracking: "guardians_lore_click"
    }
  },

  timeline: {
    title: "The Journey Through Time",
    entries: [
      {
        episode: 1,
        icon: "/images/icons/origins.svg",
        title: "Origins of Honor",
        description: "The dawn of civilization and the birth of honor",
        year: "Ancient Times"
      }
      // Additional timeline entries...
    ]
  },

  signup: {
    title: "Join the Journey",
    description: "Stay up-to-date on new episodes, lore drops, and exclusive Arktifact releases.",
    form: {
      fields: [
        {
          type: "text",
          name: "name",
          placeholder: "Enter your name",
          required: true
        },
        {
          type: "email",
          name: "email",
          placeholder: "Enter your email",
          required: true
        }
      ],
      button: {
        text: "Sign Up for Updates",
        tracking: "signup_submit"
      },
      integration: {
        type: "mailchimp",
        listId: "XXXXX",
        tags: ["website_signup", "landing_page"]
      }
    }
  },

  footer: {
    quickLinks: [
      {
        text: "Explore on OpenSea",
        link: "https://opensea.io/collection/arktifact"
      },
      {
        text: "Read the Lore",
        link: "/lore"
      },
      {
        text: "Meet the Guardians",
        link: "#guardians"
      }
    ],
    social: [
      {
        platform: "twitter",
        link: "https://twitter.com/arktifact",
        icon: "/images/social/twitter.svg"
      },
      {
        platform: "instagram",
        link: "https://instagram.com/arktifact",
        icon: "/images/social/instagram.svg"
      },
      {
        platform: "opensea",
        link: "https://opensea.io/collection/arktifact",
        icon: "/images/social/opensea.svg"
      }
    ],
    copyright: "© 2025 Arktifact Chronicles. All Rights Reserved."
  }
}; 