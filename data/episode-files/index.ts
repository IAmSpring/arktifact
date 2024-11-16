import fs from 'fs';
import path from 'path';

export interface EpisodeFile {
  name: string;
  description: string;
  content: string;
  path: string;
}

export function getEpisodeFiles(episode: string): EpisodeFile[] {
  const episodePath = path.join(process.cwd(), 'scripts', 'season1', `episode${episode}`);
  
  try {
    const files = fs.readdirSync(episodePath);
    return files.map(file => {
      const filePath = path.join(episodePath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const name = path.basename(file, path.extname(file));
      
      return {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        description: getFileDescription(name),
        content,
        path: filePath
      };
    });
  } catch (error) {
    console.error(`Error reading episode ${episode} files:`, error);
    return [];
  }
}

function getFileDescription(fileName: string): string {
  const descriptions: { [key: string]: string } = {
    characters: 'Character definitions and development',
    key_points: 'Major story points and themes',
    narration: 'Episode narration and dialogue',
    notes: 'Production notes and considerations',
    scenelist: 'Detailed scene breakdowns',
    script: 'Complete episode script'
  };
  
  return descriptions[fileName] || 'File content';
} 