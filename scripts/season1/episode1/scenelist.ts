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

export const episode1Scenes: Scene[] = [
  {
    id: 1,
    title: "Establishing the Proto-Human Settlement",
    timeOfDay: "Golden Hour",
    location: "Ancient Grasslands",
    characters: ["Tanek's Tribe", "Raskara's Tribe"],
    visualElements: {
      lighting: "Warm sunset glow with long shadows",
      environment: [
        "Lush grasslands",
        "Scattered trees",
        "Tribal huts",
        "Smoke from fires"
      ],
      keyProps: [
        "Simple tribal dwellings",
        "Community fire pits",
        "Basic tools"
      ],
      cameraWork: [
        "Aerial establishing shot",
        "Slow pan across settlement",
        "Focus on tribal life details"
      ]
    },
    narration: {
      text: "In a time before written history, survival and honor intertwined as one. Tribes roamed the land, guided by the strength of warriors and the wisdom of visionaries.",
      tone: "Reverent, establishing",
      soundscape: [
        "Gentle wind through grass",
        "Distant animal calls",
        "Soft tribal activity"
      ]
    },
    action: {
      mainAction: "Daily tribal life unfolding",
      characterActions: [
        {
          character: "Tribal Members",
          action: "Going about evening routines"
        }
      ],
      backgroundAction: [
        "Children playing",
        "Elders gathering",
        "Hunters returning"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Emphasize scale of landscape",
        "Show tribal community bonds",
        "Capture primitive technology"
      ],
      audioEmphasis: [
        "Natural ambiance",
        "Distant human activity",
        "Wind through environment"
      ],
      keyMoments: [
        "First view of settlement",
        "Community interaction",
        "Daily life scenes"
      ]
    }
  },
  // Additional scenes following same structure...
  {
    id: 2,
    title: "Tanek's First Hunt",
    timeOfDay: "Late Afternoon",
    location: "Tall Grasslands",
    characters: ["Tanek", "Hunting Party"],
    visualElements: {
      lighting: "Filtered sunlight through grass",
      environment: [
        "Dense tall grass",
        "Scattered trees",
        "Natural hunting grounds"
      ],
      keyProps: [
        "Tanek's spear",
        "Hunting tools",
        "Prey tracks"
      ],
      cameraWork: [
        "Close tracking shots",
        "Low angle through grass",
        "Focus on Tanek's expressions"
      ]
    },
    narration: {
      text: "For Tanek, a fierce hunter and protector, every hunt was sacred—a moment where his strength was a gift to the community.",
      tone: "Intense, focused",
      soundscape: [
        "Rustling grass",
        "Subtle movement",
        "Distant prey sounds"
      ]
    },
    action: {
      mainAction: "Stalking prey through grasslands",
      characterActions: [
        {
          character: "Tanek",
          action: "Moving stealthily, tracking prey"
        }
      ],
      backgroundAction: [
        "Wildlife reacting",
        "Grass moving in wind",
        "Distant herd movement"
      ]
    },
    productionNotes: {
      visualFocus: [
        "Tanek's hunting prowess",
        "Natural stealth techniques",
        "Predatory grace"
      ],
      audioEmphasis: [
        "Tension in silence",
        "Natural movement sounds",
        "Heartbeat moments"
      ],
      keyMoments: [
        "Initial tracking",
        "Stealth approach",
        "Moment before strike"
      ]
    }
  }
  // Continue with remaining scenes...
];

export const visualThemes = {
  lighting: {
    primary: "Natural daylight progression",
    secondary: "Fire and shadow interplay",
    mood: "Raw, primal atmosphere"
  },
  colorPalette: {
    primary: ["Earth tones", "Natural greens", "Sky blues"],
    accent: ["Fire orange", "Stone gray", "Blood red"]
  },
  cameraStyle: {
    movement: "Organic, fluid motion",
    framing: "Wide landscapes to intimate details",
    focus: "Character emotions and natural elements"
  }
};

export const productionElements = {
  soundscape: {
    natural: ["Wind", "Animals", "Water", "Fire"],
    human: ["Footsteps", "Tools", "Voices", "Drums"],
    emotional: ["Heartbeats", "Breathing", "Tension"]
  },
  visualEffects: {
    weather: ["Sun rays", "Dust particles", "Wind effects"],
    environment: ["Grass movement", "Fire dynamics", "Shadow play"]
  }
}; 