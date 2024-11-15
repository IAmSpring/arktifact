export const episode1Narration = {
  title: "Origins of Honor",
  openingNarration: {
    text: "In the dawn of humankind, before the first sparks of civilization, survival was not just a necessity—it was a virtue. Tribes roamed the lands, moving with the rhythm of the earth, guided by the fierce strength of warriors and the quiet wisdom of visionaries. Among them, two figures would rise to shape a legacy—a legacy of courage, unity, and honor.",
    voiceDirection: "Reverent, low tone",
    soundscape: ["Soft wind", "Distant birds", "Natural ambiance"]
  },
  scenes: [
    {
      id: 1,
      title: "Establishing the Proto-Human Settlement",
      timeOfDay: "Golden Hour",
      narration: {
        text: "In the dawn of humankind, before the first sparks of civilization, survival was not just a necessity—it was a virtue.",
        voiceDirection: "Reverent, establishing tone",
        soundscape: ["Light breeze", "Distant wildlife", "Settlement sounds"]
      },
      ambiance: "Natural, primal atmosphere"
    },
    {
      id: 2,
      title: "Tanek's First Hunt",
      dialogue: {
        character: "Tanek",
        lines: ["Steady... remember the hunt is sacred. For the tribe."],
        delivery: "Whispering with steady intensity"
      },
      narration: {
        text: "Tanek, a hunter born and protector by nature, moved silently through the grass, his spear poised, his senses sharpened.",
        voiceDirection: "Suspenseful reverence",
        soundscape: ["Grass rustling", "Bird calls", "Light breeze"]
      }
    },
    {
      id: 3,
      title: "Raskara's Inventive Mind",
      dialogue: {
        character: "Raskara",
        lines: ["If the spear's tip were sharper, it could strike swifter, truer... perhaps even with greater force."],
        delivery: "Thoughtful, curious muttering"
      },
      narration: {
        text: "Raskara was no mere hunter; he was a thinker, a man whose gaze saw more than what lay before him.",
        voiceDirection: "Tone of awe and discovery",
        soundscape: ["Fire crackling", "Stone scraping", "Soft murmurs"]
      }
    },
    {
      id: 4,
      title: "First Meeting",
      dialogue: {
        characters: ["Tanek", "Raskara"],
        exchange: [
          {
            speaker: "Tanek",
            line: "Your people are not warriors, yet you move with the spirit of hunters. Why seek to join us?",
            delivery: "Guarded respect"
          },
          {
            speaker: "Raskara",
            line: "Perhaps strength and wisdom make stronger allies than either could alone.",
            delivery: "Calm confidence"
          }
        ]
      },
      narration: {
        text: "When the tribes converged, so did the fates of two leaders, each with strengths that the other could never possess alone.",
        voiceDirection: "Tone of unfolding alliance",
        soundscape: ["Tribal murmurs", "Footsteps", "Nature sounds"]
      }
    },
    {
      id: 5,
      title: "Communal Gathering",
      dialogue: {
        character: "Elder",
        lines: ["Our strength is not in one, but in many. Tonight, let us remember this bond."],
        delivery: "Voice full of age and wisdom"
      },
      narration: {
        text: "As the sun dipped below the horizon, the tribes gathered around the fire, sharing stories and forging bonds.",
        voiceDirection: "Warm, intimate tone",
        soundscape: ["Fire crackling", "Night sounds", "Soft conversations"]
      }
    },
    {
      id: 6,
      title: "Predatory Threat",
      narration: {
        text: "But the land was not only home to those who walked upright. There were predators who roamed the outskirts of the camp.",
        voiceDirection: "Whispered urgency",
        soundscape: ["Low growls", "Tense silence", "Rustling shadows"]
      },
      dialogue: {
        characters: ["Tanek", "Raskara"],
        exchange: [
          {
            speaker: "Tanek",
            line: "Form a circle; protect the fire. Stay calm. Tonight, we stand as one.",
            delivery: "Commanding, low and steady"
          },
          {
            speaker: "Raskara",
            line: "If we draw it here, we can trap it between us. It will have no escape.",
            delivery: "Quick, insightful whisper"
          }
        ]
      }
    },
    {
      id: 7,
      title: "Joint Defense",
      dialogue: {
        characters: ["Tanek", "Raskara"],
        exchange: [
          {
            speaker: "Tanek",
            line: "Your traps have saved many tonight, Raskara. I underestimated the power of your mind.",
            delivery: "Grateful acknowledgment"
          },
          {
            speaker: "Raskara",
            line: "And your courage gave my plans purpose. We are stronger together than apart.",
            delivery: "Breathless but resolute"
          }
        ]
      },
      narration: {
        text: "In the darkness, they faced the creature—a predator powerful and relentless. But together, Tanek and Raskara were more than a match.",
        voiceDirection: "Rising intensity",
        soundscape: ["Quick footsteps", "Weapon sounds", "Predator growls"]
      }
    },
    {
      id: 8,
      title: "Victory Dawn",
      dialogue: {
        character: "Elder",
        lines: ["Together, we faced the night. Together, we have honored the land, and each other."],
        delivery: "Solemn pride"
      },
      narration: {
        text: "As dawn broke, the tribes gathered once more. They stood around the fallen predator, a silent testament to their unity and resilience.",
        voiceDirection: "Calm and reflective",
        soundscape: ["Morning birds", "Dying fire", "Gathering footsteps"]
      }
    }
  ],
  closingNarration: {
    text: "And so, the path of honor began. What was once two became one. What was once a gathering of tribes became a community bound by courage, wisdom, and trust. The journey toward a united future had only just begun.",
    voiceDirection: "Resonant and purposeful",
    soundscape: ["Gentle wind", "Distant life", "Peaceful ambiance"]
  },
  productionNotes: {
    voiceDirection: {
      narrator: "Maintain steady, resonant tone; warm and authoritative",
      modulation: "Subtle emphasis for awe, reverence, and suspense",
      pacing: "Brief pauses between key phrases"
    },
    characterVoices: {
      tanek: "Steady, grounded, strong",
      raskara: "Thoughtful, softer, quiet conviction",
      elders: "Wise, aged tone"
    },
    soundDesign: {
      primary: ["Natural sounds", "Crackling fire", "Animal calls"],
      ambient: ["Rustling leaves", "Wind", "Tribal activity"],
      emphasis: "Create primal, grounded atmosphere"
    },
    musicCues: {
      opening: "Subtle, primal percussion",
      tension: "Low drones, building intensity",
      resolution: "Warm, organic tones",
      closing: "Triumphant yet humble theme"
    }
  }
}; 