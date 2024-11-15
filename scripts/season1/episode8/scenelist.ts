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

export const episode8Scenes: Scene[] = [
  {
    id: 1,
    title: "Utopian Settlement",
    timeOfDay: "Golden Hour",
    location: "Crystal City",
    characters: ["Tan", "Citizens", "Council Members"],
    visualElements: {
      lighting: "Ethereal golden glow",
      environment: [
        "Crystal spires",
        "Floating gardens",
        "Peace monuments",
        "Unity halls",
        "Harmony spaces"
      ],
      keyProps: [
        "Unity crystals",
        "Peace symbols",
        "Digital interfaces",
        "Harmony markers"
      ],
      cameraWork: [
        "Sweeping vistas",
        "Crystal reflections",
        "Peace symbols"
      ]
    },
    narration: {
      text: "Humanity's journey had led to harmony, a balance born from respect and unity.",
      tone: "Reverent and peaceful",
      soundscape: [
        "Crystal harmonics",
        "Peaceful ambiance",
        "Unity chimes"
      ]
    },
    action: {
      mainAction: "City life in perfect harmony",
      characterActions: [
        {
          character: "Tan",
          action: "Observing the peaceful city"
        }
      ],
      backgroundAction: [
        "Citizens in harmony",
        "Peace activities",
        "Unity gatherings"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Utopian harmony",
        "Crystal architecture",
        "Peace symbols"
      ],
      audioEmphasis: [
        "Crystal sounds",
        "Peace themes",
        "Unity harmonics"
      ],
      keyMoments: [
        "City reveal",
        "Peace showcase",
        "Unity display"
      ]
    }
  },
  {
    id: 2,
    title: "Rae's Digital Council",
    timeOfDay: "Morning",
    location: "Digital Nexus",
    characters: ["Rae", "Council Members"],
    visualElements: {
      lighting: "Digital ethereal glow",
      environment: [
        "Digital council chamber",
        "Holographic displays",
        "Unity interfaces",
        "Peace projections"
      ],
      keyProps: [
        "Digital artifacts",
        "Unity symbols",
        "Peace markers",
        "Harmony displays"
      ],
      cameraWork: [
        "Digital flows",
        "Council focus",
        "Unity symbols"
      ]
    },
    narration: {
      text: "Rae, a living archive of humanity's journey, guided the last steps into a new era of unity.",
      tone: "Digital wisdom",
      soundscape: [
        "Digital harmonics",
        "Council sounds",
        "Unity themes"
      ]
    },
    action: {
      mainAction: "Digital council session",
      characterActions: [
        {
          character: "Rae",
          action: "Leading the council"
        }
      ],
      backgroundAction: [
        "Council activities",
        "Digital displays",
        "Unity presentations"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Digital wisdom",
        "Council harmony",
        "Unity symbols"
      ],
      audioEmphasis: [
        "Digital sounds",
        "Council themes",
        "Unity harmonics"
      ],
      keyMoments: [
        "Council reveal",
        "Digital wisdom",
        "Unity display"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Crystal light",
    secondary: "Digital glow",
    mood: "Peace and unity"
  },
  colorPalette: {
    primary: ["Crystal white", "Peace blue", "Unity gold"],
    accent: ["Digital purple", "Harmony green", "Peace silver"]
  },
  cameraStyle: {
    movement: "Ethereal flow",
    framing: "Balance of human and digital",
    focus: "Unity and peace"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["Crystal sounds", "Peace ambiance", "Unity themes"],
    digital: ["AI harmonics", "Council sounds", "Unity chimes"],
    emotional: ["Peace", "Unity", "Harmony"]
  },
  visualEffects: {
    environment: ["Crystal light", "Digital flow", "Peace symbols"],
    unity: ["Harmony effects", "Peace visuals", "Unity markers"]
  }
}; 