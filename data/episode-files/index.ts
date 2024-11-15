export interface EpisodeFile {
  name: string;
  description: string;
  path: string;
}

// Sample script content for graceful fallback
const sampleScript = `// This is a sample script content
// The actual content will be loaded dynamically
// Based on the episode and file type

export const characters = {
  mainProtagonist: "Character Name",
  role: "Character Role",
  description: "Character Description"
};

export const plotPoints = [
  "Key story element 1",
  "Key story element 2",
  "Key story element 3"
];
`;

export const getEpisodeFiles = (episode: string): EpisodeFile[] => {
  return [
    {
      name: 'characters.ts',
      description: 'Character definitions and development',
      path: `/scripts/season1/episode${episode}/characters.ts`
    },
    {
      name: 'key_points.ts',
      description: 'Major story points and themes',
      path: `/scripts/season1/episode${episode}/key_points.ts`
    },
    {
      name: 'narration.ts',
      description: 'Episode narration and dialogue',
      path: `/scripts/season1/episode${episode}/narration.ts`
    },
    {
      name: 'notes.ts',
      description: 'Production notes and considerations',
      path: `/scripts/season1/episode${episode}/notes.ts`
    },
    {
      name: 'scenelist.ts',
      description: 'Detailed scene breakdowns',
      path: `/scripts/season1/episode${episode}/scenelist.ts`
    },
    {
      name: 'script.ts',
      description: 'Complete episode script',
      path: `/scripts/season1/episode${episode}/script.ts`
    }
  ];
};

// Helper function to get sample content for any file
export const getScriptContent = (filePath: string): string => {
  // In a real app, this would fetch actual content
  // For now, return sample content
  return sampleScript;
}; 