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

export const episode2Scenes: Scene[] = [
  {
    id: 1,
    title: "Expansive Fields at Sunrise",
    timeOfDay: "Sunrise",
    location: "Agricultural Settlement",
    characters: ["Tanen", "Early Farmers"],
    visualElements: {
      lighting: "Golden sunrise glow across fields",
      environment: [
        "Expansive agricultural fields",
        "Mud-brick huts",
        "Flowing river",
        "Morning mist"
      ],
      keyProps: [
        "Early farming tools",
        "Growing crops",
        "Settlement structures"
      ],
      cameraWork: [
        "Aerial establishing shot",
        "Slow pan across fields",
        "Focus on community activity"
      ]
    },
    narration: {
      text: "As the land yielded abundance, so too did it demand guardianship. The tribes evolved, becoming farmers and protectors of the earth.",
      tone: "Reverent, establishing",
      soundscape: [
        "Morning birds",
        "Gentle river flow",
        "Early activity"
      ]
    },
    action: {
      mainAction: "Community beginning their day in the fields",
      characterActions: [
        {
          character: "Tanen",
          action: "Surveying the fields with pride"
        }
      ],
      backgroundAction: [
        "Farmers preparing tools",
        "Children helping with tasks",
        "Community gathering"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Scale of agricultural development",
        "Community cooperation",
        "Natural abundance"
      ],
      audioEmphasis: [
        "Natural morning sounds",
        "Peaceful activity",
        "Community voices"
      ],
      keyMoments: [
        "First view of settlement",
        "Agricultural progress",
        "Community bonds"
      ]
    }
  },
  {
    id: 2,
    title: "Raya's Innovation",
    timeOfDay: "Morning",
    location: "Fields",
    characters: ["Raya", "Farmers", "Community Members"],
    visualElements: {
      lighting: "Bright morning light",
      environment: [
        "Active farming area",
        "Tool testing ground",
        "Gathered community"
      ],
      keyProps: [
        "New farming tool",
        "Harvest ready crops",
        "Traditional tools"
      ],
      cameraWork: [
        "Close-up on tool demonstration",
        "Reaction shots",
        "Tool effectiveness"
      ]
    },
    narration: {
      text: "Raya, an innovator, brought wisdom to the crops, harnessing her mind for the community's yield.",
      tone: "Admiring and hopeful",
      soundscape: [
        "Tool sounds",
        "Excited murmurs",
        "Field ambiance"
      ]
    },
    action: {
      mainAction: "Raya demonstrating new farming tool",
      characterActions: [
        {
          character: "Raya",
          action: "Teaching and demonstrating"
        }
      ],
      backgroundAction: [
        "Farmers watching intently",
        "Testing new methods",
        "Community gathering"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Innovation in action",
        "Community learning",
        "Tool effectiveness"
      ],
      audioEmphasis: [
        "Tool sounds",
        "Teaching moments",
        "Community reaction"
      ],
      keyMoments: [
        "Tool demonstration",
        "Community acceptance",
        "Progress shown"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Natural daylight progression",
    secondary: "Agricultural golden hours",
    mood: "Growth and abundance"
  },
  colorPalette: {
    primary: ["Earth tones", "Field greens", "Sky blues"],
    accent: ["Harvest gold", "River blue", "Clay red"]
  },
  cameraStyle: {
    movement: "Steady, grounded motion",
    framing: "Community and agricultural focus",
    focus: "Unity and growth"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["Field sounds", "River", "Wind in crops"],
    human: ["Community work", "Tool use", "Group activity"],
    emotional: ["Unity", "Progress", "Peace"]
  },
  visualEffects: {
    weather: ["Morning mist", "Field movement", "Water flow"],
    environment: ["Crop growth", "Community development", "Tool use"]
  }
}; 