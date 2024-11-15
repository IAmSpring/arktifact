export interface Episode {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  openSeaLink: string;
  background: string;
  era: string;
  mainCharacters: {
    protagonist: {
      name: string;
      role: string;
      description: string;
    };
    mentor: {
      name: string;
      role: string;
      description: string;
    };
  };
}

export const episodeData: Episode[] = [
  {
    number: 1,
    title: "Origins of Honor",
    subtitle: "The dawn of honor and unity",
    description: "In the earliest days of humanity, two visionaries forge the first bonds of honor that will echo through generations.",
    thumbnail: "/images/episodes/ep1_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep1",
    background: "bg-gradient-to-r from-amber-900 to-stone-900",
    era: "Dawn of Civilization",
    mainCharacters: {
      protagonist: {
        name: "Tanek",
        role: "Fierce Warrior",
        description: "A protector whose strength is matched only by his dedication to the tribe."
      },
      mentor: {
        name: "Raskara",
        role: "Proto-Inventor",
        description: "The first to see beyond survival to the power of unity and innovation."
      }
    }
  },
  {
    number: 2,
    title: "Bonds of Kinship",
    subtitle: "The age of community and growth",
    description: "As tribes unite and agriculture takes root, the seeds of civilization begin to flourish.",
    thumbnail: "/images/episodes/ep2_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep2",
    background: "bg-gradient-to-r from-emerald-900 to-green-900",
    era: "Agricultural Revolution",
    mainCharacters: {
      protagonist: {
        name: "Tanas",
        role: "Warrior of Unity",
        description: "A bridge between tribes who sees strength in cooperation."
      },
      mentor: {
        name: "Raska",
        role: "Visionary of Peace",
        description: "An innovator who guides communities toward sustainable growth."
      }
    }
  },
  {
    number: 3,
    title: "Age of Innovation",
    subtitle: "The rise of early civilization",
    description: "In bustling city-states, knowledge and invention transform society forever.",
    thumbnail: "/images/episodes/ep3_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep3",
    background: "bg-gradient-to-r from-cyan-900 to-blue-900",
    era: "Early City-States",
    mainCharacters: {
      protagonist: {
        name: "Tanos",
        role: "Warrior-Scholar",
        description: "A protector who values wisdom as much as strength."
      },
      mentor: {
        name: "Rassan",
        role: "Keeper of Knowledge",
        description: "A visionary who preserves and advances human understanding."
      }
    }
  },
  {
    number: 4,
    title: "Guardians of Knowledge",
    subtitle: "The preservation of wisdom",
    description: "As knowledge grows, dedicated guardians arise to protect humanity's accumulated wisdom.",
    thumbnail: "/images/episodes/ep4_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep4",
    background: "bg-gradient-to-r from-violet-900 to-purple-900",
    era: "Age of Wisdom",
    mainCharacters: {
      protagonist: {
        name: "Tana",
        role: "Defender of Knowledge",
        description: "A guardian who protects the repositories of human wisdom."
      },
      mentor: {
        name: "Raya",
        role: "Seeker of Truth",
        description: "A scholar who pushes the boundaries of human understanding."
      }
    }
  },
  {
    number: 5,
    title: "Industrial Resilience",
    subtitle: "The age of machines and unity",
    description: "In an era of rapid industrialization, workers unite to preserve human dignity.",
    thumbnail: "/images/episodes/ep5_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep5",
    background: "bg-gradient-to-r from-slate-900 to-zinc-900",
    era: "Industrial Revolution",
    mainCharacters: {
      protagonist: {
        name: "Taniel",
        role: "Protector of Workers",
        description: "A leader who fights for the rights and dignity of laborers."
      },
      mentor: {
        name: "Raiden",
        role: "Ethical Innovator",
        description: "An inventor who believes in technology that serves humanity."
      }
    }
  },
  {
    number: 6,
    title: "New Frontiers",
    subtitle: "The dawn of digital wisdom",
    description: "As AI emerges, humanity seeks balance between progress and ethics.",
    thumbnail: "/images/episodes/ep6_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep6",
    background: "bg-gradient-to-r from-indigo-900 to-blue-900",
    era: "Digital Age",
    mainCharacters: {
      protagonist: {
        name: "Tara",
        role: "Guardian of Ethics",
        description: "A leader who ensures technology serves human values."
      },
      mentor: {
        name: "Rian",
        role: "AI Visionary",
        description: "An innovator who bridges human and artificial intelligence."
      }
    }
  },
  {
    number: 7,
    title: "The Era of Unity",
    subtitle: "The cosmic alliance begins",
    description: "Humanity reaches for the stars and discovers they're not alone.",
    thumbnail: "/images/episodes/ep7_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep7",
    background: "bg-gradient-to-r from-purple-900 to-fuchsia-900",
    era: "Interstellar Age",
    mainCharacters: {
      protagonist: {
        name: "Tarek",
        role: "Interstellar Diplomat",
        description: "A bridge between Earth and alien civilizations."
      },
      mentor: {
        name: "Rala",
        role: "Alien Sage",
        description: "A keeper of cosmic wisdom who guides humanity's growth."
      }
    }
  },
  {
    number: 8,
    title: "The Final Legacy",
    subtitle: "The culmination of honor",
    description: "In a utopian future, humanity's journey comes full circle.",
    thumbnail: "/images/episodes/ep8_thumb.jpg",
    openSeaLink: "https://opensea.io/collection/arktifact-ep8",
    background: "bg-gradient-to-r from-rose-900 to-pink-900",
    era: "Utopian Future",
    mainCharacters: {
      protagonist: {
        name: "Tan",
        role: "Universal Guardian",
        description: "A keeper of humanity's complete legacy."
      },
      mentor: {
        name: "Rae",
        role: "Cosmic Sage",
        description: "The final guide in humanity's journey to enlightenment."
      }
    }
  }
]; 