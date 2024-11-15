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

export const episode6Scenes: Scene[] = [
  {
    id: 1,
    title: "Near-Future Settlement",
    timeOfDay: "Dawn",
    location: "Digital Metropolis",
    characters: ["Tara", "City AI", "Citizens"],
    visualElements: {
      lighting: "Golden hour tech glow",
      environment: [
        "Sleek buildings",
        "Solar panels",
        "Green rooftops",
        "Digital displays",
        "Smart infrastructure"
      ],
      keyProps: [
        "Holographic interfaces",
        "AI terminals",
        "Smart devices",
        "Digital infrastructure"
      ],
      cameraWork: [
        "Sweeping establishing shot",
        "Tech detail focus",
        "Human integration scenes"
      ]
    },
    narration: {
      text: "As technology advanced, the lines between man and machine blurred, forging a new era of unity and innovation.",
      tone: "Wonder and progress",
      soundscape: [
        "Soft tech hums",
        "Digital chimes",
        "City ambiance"
      ]
    },
    action: {
      mainAction: "City awakening to digital life",
      characterActions: [
        {
          character: "Tara",
          action: "Observing city systems"
        }
      ],
      backgroundAction: [
        "AI systems activating",
        "Citizens interfacing",
        "Tech integration"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Tech integration",
        "Human adaptation",
        "Digital harmony"
      ],
      audioEmphasis: [
        "Tech ambiance",
        "Digital life",
        "Human activity"
      ],
      keyMoments: [
        "City reveal",
        "Tech showcase",
        "Human-AI interaction"
      ]
    }
  },
  {
    id: 2,
    title: "Ras's Innovation Lab",
    timeOfDay: "Morning",
    location: "Tech Development Center",
    characters: ["Ras", "AI Assistants"],
    visualElements: {
      lighting: "Clean tech lighting",
      environment: [
        "Minimalist lab",
        "Holographic displays",
        "Code projections",
        "AI interfaces"
      ],
      keyProps: [
        "Advanced computers",
        "AI cores",
        "Digital tools",
        "Innovation prototypes"
      ],
      cameraWork: [
        "Detail on code",
        "Character focus",
        "Tech environment"
      ]
    },
    narration: {
      text: "Ras, a modern-day architect of code, sought to shape technology as a tool of balance, not dominance.",
      tone: "Focus and innovation",
      soundscape: [
        "Code typing",
        "AI responses",
        "Lab equipment"
      ]
    },
    action: {
      mainAction: "Ras developing new AI safeguards",
      characterActions: [
        {
          character: "Ras",
          action: "Coding and innovating"
        }
      ],
      backgroundAction: [
        "AI systems learning",
        "Code compilation",
        "Tech testing"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Innovation process",
        "Tech development",
        "Human-AI collaboration"
      ],
      audioEmphasis: [
        "Tech sounds",
        "Code environment",
        "Digital creation"
      ],
      keyMoments: [
        "Code breakthrough",
        "AI interaction",
        "Innovation reveal"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Digital ambiance",
    secondary: "Tech glow effects",
    mood: "Innovation and protection"
  },
  colorPalette: {
    primary: ["Digital blues", "Tech whites", "Code greens"],
    accent: ["AI purple", "Security red", "Interface blue"]
  },
  cameraStyle: {
    movement: "Smooth tech precision",
    framing: "Balance of human and digital",
    focus: "Innovation with purpose"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["City sounds", "Human activity", "Ambient life"],
    digital: ["Tech hums", "AI responses", "Code execution"],
    emotional: ["Innovation", "Protection", "Unity"]
  },
  visualEffects: {
    environment: ["Digital displays", "Holographics", "Tech integration"],
    technology: ["Code visuals", "AI interfaces", "Security systems"]
  }
}; 