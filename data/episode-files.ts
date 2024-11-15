export interface EpisodeFile {
  name: string;
  description: string;
  path: string;
}

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