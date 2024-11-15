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

export const episode7Scenes: Scene[] = [
  {
    id: 1,
    title: "Post-Scarcity Settlement",
    timeOfDay: "Golden Hour",
    location: "Future Earth City",
    characters: ["Tenek", "Citizens", "Council Members"],
    visualElements: {
      lighting: "Warm golden light with tech glow",
      environment: [
        "Eco-friendly skyscrapers",
        "Green spaces",
        "Advanced transport",
        "Clean energy systems",
        "Integrated nature"
      ],
      keyProps: [
        "Holographic displays",
        "Clean tech",
        "Green infrastructure",
        "Unity symbols"
      ],
      cameraWork: [
        "Sweeping aerial shots",
        "City life focus",
        "Human integration"
      ]
    },
    narration: {
      text: "As scarcity faded, unity became the new currency, and humanity's journey reached the stars.",
      tone: "Wonder and achievement",
      soundscape: [
        "Clean energy hum",
        "Nature sounds",
        "Advanced transport"
      ]
    },
    action: {
      mainAction: "City life in harmony",
      characterActions: [
        {
          character: "Tenek",
          action: "Observing the city's progress"
        }
      ],
      backgroundAction: [
        "Citizens in daily life",
        "Transport movement",
        "Nature integration"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Future harmony",
        "Technology balance",
        "Human progress"
      ],
      audioEmphasis: [
        "Clean tech sounds",
        "Natural harmony",
        "City peace"
      ],
      keyMoments: [
        "City reveal",
        "Life showcase",
        "Unity display"
      ]
    }
  },
  {
    id: 2,
    title: "Raelan's Observatory",
    timeOfDay: "Evening",
    location: "Space Observatory",
    characters: ["Raelan", "Scientists"],
    visualElements: {
      lighting: "Star light and tech glow",
      environment: [
        "Advanced observatory",
        "Space monitoring",
        "Research center",
        "Data displays",
        "Cosmic views"
      ],
      keyProps: [
        "Space telescopes",
        "Data interfaces",
        "Research tools",
        "Star maps"
      ],
      cameraWork: [
        "Tech detail focus",
        "Character moments",
        "Space vistas"
      ]
    },
    narration: {
      text: "Raelan, a guardian of exploration, sought balance not only on Earth but among the stars.",
      tone: "Discovery and wisdom",
      soundscape: [
        "Observatory equipment",
        "Data processing",
        "Quiet study"
      ]
    },
    action: {
      mainAction: "Space research and monitoring",
      characterActions: [
        {
          character: "Raelan",
          action: "Analyzing cosmic data"
        }
      ],
      backgroundAction: [
        "Scientists working",
        "Data processing",
        "Space observation"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Scientific progress",
        "Space exploration",
        "Human curiosity"
      ],
      audioEmphasis: [
        "Tech sounds",
        "Space ambiance",
        "Research activity"
      ],
      keyMoments: [
        "Discovery process",
        "Space observation",
        "Data analysis"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Future tech glow",
    secondary: "Cosmic light",
    mood: "Unity and exploration"
  },
  colorPalette: {
    primary: ["Space blues", "Tech whites", "Unity gold"],
    accent: ["Star silver", "Cosmic purple", "Earth green"]
  },
  cameraStyle: {
    movement: "Fluid space motion",
    framing: "Balance of cosmic and human",
    focus: "Unity in exploration"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["Space sounds", "Tech harmony", "Human activity"],
    cosmic: ["Star ambiance", "Space effects", "Unity themes"],
    emotional: ["Discovery", "Unity", "Peace"]
  },
  visualEffects: {
    environment: ["Space vistas", "Tech integration", "Unity symbols"],
    cosmic: ["Star effects", "Space travel", "Unity visuals"]
  }
}; 