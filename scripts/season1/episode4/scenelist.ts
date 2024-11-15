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

export const episode4Scenes: Scene[] = [
  {
    id: 1,
    title: "The Knowledge Academy",
    timeOfDay: "Dawn",
    location: "Academy Grounds",
    characters: ["Tana", "Students", "Scholars"],
    visualElements: {
      lighting: "Soft morning light through columns",
      environment: [
        "Stone courtyards",
        "Learning spaces",
        "Ancient scrolls",
        "Study areas"
      ],
      keyProps: [
        "Scrolls and books",
        "Teaching tools",
        "Ancient artifacts",
        "Study materials"
      ],
      cameraWork: [
        "Sweeping establishing shot",
        "Detail on architecture",
        "Focus on learning activities"
      ]
    },
    narration: {
      text: "In an age of enlightenment, knowledge flourished in hallowed halls, safeguarded by those who valued it above all.",
      tone: "Reverent and establishing",
      soundscape: [
        "Quiet study",
        "Soft footsteps",
        "Page turning",
        "Distant discussions"
      ]
    },
    action: {
      mainAction: "Academy life beginning its day",
      characterActions: [
        {
          character: "Tana",
          action: "Observing the morning activities"
        }
      ],
      backgroundAction: [
        "Students studying",
        "Scholars teaching",
        "Knowledge sharing"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Academy architecture",
        "Learning atmosphere",
        "Knowledge preservation"
      ],
      audioEmphasis: [
        "Peaceful study",
        "Academic activity",
        "Wisdom sharing"
      ],
      keyMoments: [
        "Academy reveal",
        "Learning scenes",
        "Knowledge exchange"
      ]
    }
  },
  {
    id: 2,
    title: "Rasien's Study",
    timeOfDay: "Morning",
    location: "Archive Chamber",
    characters: ["Rasien", "Archive Keepers"],
    visualElements: {
      lighting: "Filtered light through high windows",
      environment: [
        "Ancient archives",
        "Study tables",
        "Knowledge repositories",
        "Artifact displays"
      ],
      keyProps: [
        "Ancient manuscripts",
        "Research tools",
        "Preservation equipment",
        "Historical records"
      ],
      cameraWork: [
        "Close detail shots",
        "Character focus",
        "Environmental storytelling"
      ]
    },
    narration: {
      text: "Rasien, a guardian of intellect, saw potential where others saw only ink and dust.",
      tone: "Thoughtful and focused",
      soundscape: [
        "Quill scratching",
        "Paper rustling",
        "Quiet concentration"
      ]
    },
    action: {
      mainAction: "Rasien studying ancient knowledge",
      characterActions: [
        {
          character: "Rasien",
          action: "Examining manuscripts and artifacts"
        }
      ],
      backgroundAction: [
        "Archive maintenance",
        "Knowledge preservation",
        "Research activities"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Ancient manuscripts",
        "Study process",
        "Knowledge preservation"
      ],
      audioEmphasis: [
        "Research sounds",
        "Archive ambiance",
        "Scholarly focus"
      ],
      keyMoments: [
        "Discovery moments",
        "Knowledge preservation",
        "Character introduction"
      ]
    }
  }
  // Additional scenes following same structure...
];

export const visualThemes = {
  lighting: {
    primary: "Natural daylight through windows",
    secondary: "Candlelight and lanterns",
    mood: "Academic and reverent"
  },
  colorPalette: {
    primary: ["Parchment whites", "Book browns", "Scholar blues"],
    accent: ["Knowledge gold", "Wisdom purple", "Archive green"]
  },
  cameraStyle: {
    movement: "Steady and observant",
    framing: "Academic focus with character moments",
    focus: "Knowledge and preservation"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["Study sounds", "Archive ambiance", "Academy life"],
    human: ["Scholar discussions", "Page turning", "Quiet focus"],
    emotional: ["Discovery", "Learning", "Protection"]
  },
  visualEffects: {
    environment: ["Dust motes", "Light rays", "Archive atmosphere"],
    knowledge: ["Scroll details", "Book textures", "Learning visuals"]
  }
}; 