export interface Scene {
  id: number;
  title: string;
  timeOfDay: string;
  location: string;
  characters: string[];
  visualElements: {
    lighting: string;
    environment: string[];
    keyProps: string[];
    cameraWork: string[];
  };
  narration: {
    text: string;
    tone: string;
    soundscape: string[];
  };
  action: {
    mainAction: string;
    characterActions: {
      character: string;
      action: string;
    }[];
    backgroundAction: string[];
  };
  productionNotes: {
    visualFocus: string[];
    audioEmphasis: string[];
    keyMoments: string[];
  };
}

export const episode3Scenes: Scene[] = [
  {
    id: 1,
    title: "The Early City-State",
    timeOfDay: "Dawn",
    location: "Ancient City Overlook",
    characters: ["Tanos", "City Guards", "Early Citizens"],
    visualElements: {
      lighting: "Golden morning light through city haze",
      environment: [
        "Rising stone walls",
        "Bustling marketplaces",
        "Temple spires",
        "Winding streets"
      ],
      keyProps: [
        "Guard weapons",
        "Market stalls",
        "Construction tools",
        "Early writing tablets"
      ],
      cameraWork: [
        "Sweeping aerial view",
        "Slow pan across cityscape",
        "Focus on human activity"
      ]
    },
    narration: {
      text: "Civilization rose from the land, stone by stone, and knowledge became the most precious resource.",
      tone: "Reverent and establishing",
      soundscape: [
        "Early morning birds",
        "Distant construction",
        "Market sounds",
        "City awakening"
      ]
    },
    action: {
      mainAction: "City awakening to daily life",
      characterActions: [
        {
          character: "Tanos",
          action: "Surveying the city from high point"
        }
      ],
      backgroundAction: [
        "Merchants setting up",
        "Guards patrolling",
        "Workers beginning construction"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Scale of early civilization",
        "Human progress",
        "Architectural achievement"
      ],
      audioEmphasis: [
        "City ambiance",
        "Construction sounds",
        "Human activity"
      ],
      keyMoments: [
        "First view of city",
        "Scale reveal",
        "Life and activity"
      ]
    }
  },
  {
    id: 2,
    title: "Rassan's Workshop",
    timeOfDay: "Morning",
    location: "Innovation District",
    characters: ["Rassan", "Apprentices", "Visitors"],
    visualElements: {
      lighting: "Warm workshop light with dust motes",
      environment: [
        "Inventor's sanctuary",
        "Tool-filled workspace",
        "Knowledge scrolls",
        "Innovation prototypes"
      ],
      keyProps: [
        "Invention blueprints",
        "Early machines",
        "Writing tools",
        "Knowledge artifacts"
      ],
      cameraWork: [
        "Detail shots of inventions",
        "Character focus on Rassan",
        "Workshop environment"
      ]
    },
    narration: {
      text: "In this sanctuary of innovation, Rassan shaped the future with wisdom and invention.",
      tone: "Wonder and discovery",
      soundscape: [
        "Tinkering sounds",
        "Quiet discussion",
        "Machine noises",
        "Scratching of records"
      ]
    },
    action: {
      mainAction: "Rassan working on new invention",
      characterActions: [
        {
          character: "Rassan",
          action: "Teaching apprentices while working"
        }
      ],
      backgroundAction: [
        "Apprentices learning",
        "Visitors observing",
        "Tools being tested"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Innovation details",
        "Teaching moments",
        "Workshop atmosphere"
      ],
      audioEmphasis: [
        "Innovation sounds",
        "Learning environment",
        "Creative atmosphere"
      ],
      keyMoments: [
        "Invention reveal",
        "Teaching sequence",
        "Discovery moment"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Natural daylight progression",
    secondary: "Indoor workshop lighting",
    mood: "Innovation and progress"
  },
  colorPalette: {
    primary: ["Stone grays", "Bronze tones", "Parchment whites"],
    accent: ["Innovation blue", "Knowledge gold", "Progress green"]
  },
  cameraStyle: {
    movement: "Steady and observant",
    framing: "Balance of scale and detail",
    focus: "Innovation and human progress"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["City sounds", "Workshop noise", "Human activity"],
    innovation: ["Machine sounds", "Tool work", "Construction"],
    emotional: ["Discovery", "Progress", "Achievement"]
  },
  visualEffects: {
    environment: ["City dust", "Workshop sparks", "Construction"],
    innovation: ["Machine movement", "Tool operation", "Progress visuals"]
  }
}; 