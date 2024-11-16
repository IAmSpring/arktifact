export const episodeContent = {
  "1": {
    title: "Origins of Honor",
    description: "The beginning of humanity's greatest journey",
    files: [
      {
        name: "Characters",
        description: "Character definitions and development",
        content: `// Character definitions for Episode 1
const characters = {
  raska: {
    name: "Raska",
    role: "Visionary",
    description: "The first to see humanity's potential future"
  },
  tanek: {
    name: "Tanek",
    role: "Protector",
    description: "Guardian of the first unified tribes"
  }
};`
      },
      {
        name: "Script",
        description: "Complete episode script",
        content: `// Episode 1 Script
Scene 1: The First Vision
- Raska meditating at dawn
- First glimpse of the future
- Reaction to the vision

Scene 2: The Gathering
- Tribal leaders meet
- Raska shares her vision
- Initial skepticism`
      }
    ]
  },
  "2": {
    title: "Bonds of Kinship",
    description: "Exploring the ties that bind the tribes",
    files: [
      {
        name: "Characters",
        description: "Character definitions and development",
        content: `// Character definitions for Episode 2
const characters = {
  kira: {
    name: "Kira",
    role: "Peacemaker",
    description: "Bridge between tribes"
  },
  soren: {
    name: "Soren",
    role: "Elder",
    description: "Keeper of ancient wisdom"
  }
};`
      }
    ]
  },
  "3": {
    title: "Age of Innovation",
    description: "The dawn of technological advancement",
    files: [
      {
        name: "Script",
        description: "Complete episode script",
        content: `// Episode 3 Script
Scene 1: The Discovery
- First tools being crafted
- Knowledge being shared
- Innovation spreads`
      }
    ]
  }
};

export const episodeList = [
  {
    id: "1",
    title: "Origins of Honor",
    description: "The beginning of humanity's greatest journey",
    image: "/images/episodes/ep1.jpg"
  },
  {
    id: "2",
    title: "Bonds of Kinship",
    description: "Exploring the ties that bind the tribes",
    image: "/images/episodes/ep2.jpg"
  },
  {
    id: "3",
    title: "Age of Innovation",
    description: "The dawn of technological advancement",
    image: "/images/episodes/ep3.jpg"
  }
];

export type EpisodeId = keyof typeof episodeContent; 