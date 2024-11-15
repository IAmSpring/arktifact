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

export const episode5Scenes: Scene[] = [
  {
    id: 1,
    title: "Early Industrial Town",
    timeOfDay: "Dawn",
    location: "Industrial Settlement",
    characters: ["Taniel", "Workers", "Townspeople"],
    visualElements: {
      lighting: "Early morning industrial haze",
      environment: [
        "Brick factories",
        "Worker housing",
        "Smoke stacks",
        "Dirt roads",
        "Early machinery"
      ],
      keyProps: [
        "Factory tools",
        "Steam engines",
        "Worker clothes",
        "Industrial equipment"
      ],
      cameraWork: [
        "Establishing wide shot",
        "Detail on machinery",
        "Worker activity focus"
      ]
    },
    narration: {
      text: "The age of industry brought new power, yet it demanded strength of heart to wield it wisely.",
      tone: "Reverent and establishing",
      soundscape: [
        "Factory whistles",
        "Steam engines",
        "Early machinery",
        "Worker footsteps"
      ]
    },
    action: {
      mainAction: "Town awakening to industrial life",
      characterActions: [
        {
          character: "Taniel",
          action: "Walking through town, observing workers"
        }
      ],
      backgroundAction: [
        "Workers starting shifts",
        "Machines powering up",
        "Steam rising",
        "Early activity"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Industrial scale",
        "Human element",
        "Machine integration"
      ],
      audioEmphasis: [
        "Machine sounds",
        "Worker activity",
        "Industrial ambiance"
      ],
      keyMoments: [
        "Town reveal",
        "Worker life",
        "Industrial progress"
      ]
    }
  },
  {
    id: 2,
    title: "Raiden's Workshop",
    timeOfDay: "Morning",
    location: "Innovation Workshop",
    characters: ["Raiden", "Apprentices"],
    visualElements: {
      lighting: "Workshop light through windows",
      environment: [
        "Inventor's sanctuary",
        "Prototype machines",
        "Technical drawings",
        "Innovation tools"
      ],
      keyProps: [
        "Renewable prototypes",
        "Technical papers",
        "Innovation tools",
        "Early designs"
      ],
      cameraWork: [
        "Detail shots of inventions",
        "Character focus",
        "Workshop environment"
      ]
    },
    narration: {
      text: "Raiden's vision saw beyond the machines—a future where progress and nature coexisted.",
      tone: "Hopeful and innovative",
      soundscape: [
        "Quiet tinkering",
        "Steam releases",
        "Tool sounds",
        "Invention testing"
      ]
    },
    action: {
      mainAction: "Raiden working on sustainable invention",
      characterActions: [
        {
          character: "Raiden",
          action: "Crafting and innovating"
        }
      ],
      backgroundAction: [
        "Apprentices learning",
        "Machines testing",
        "Workshop activity"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Innovation details",
        "Sustainable design",
        "Workshop atmosphere"
      ],
      audioEmphasis: [
        "Invention sounds",
        "Creative atmosphere",
        "Technical work"
      ],
      keyMoments: [
        "Innovation reveal",
        "Sustainable vision",
        "Technical progress"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Industrial atmosphere",
    secondary: "Steam and smoke effects",
    mood: "Progress and resilience"
  },
  colorPalette: {
    primary: ["Factory grays", "Steam whites", "Iron browns"],
    accent: ["Machine brass", "Coal black", "Steam white"]
  },
  cameraStyle: {
    movement: "Steady industrial rhythm",
    framing: "Balance of machines and humanity",
    focus: "Progress with purpose"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["Steam releases", "Machine sounds", "Worker activity"],
    industrial: ["Factory whistles", "Metal work", "Engine sounds"],
    emotional: ["Unity", "Progress", "Resilience"]
  },
  visualEffects: {
    environment: ["Steam effects", "Machine operation", "Industrial atmosphere"],
    progress: ["Innovation visuals", "Technical details", "Worker unity"]
  }
}; 