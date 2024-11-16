import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

export interface EpisodeFile {
  name: string;
  description: string;
  content: string;
}

// Required files for each episode
const requiredFiles = [
  'characters.ts',
  'key_points.ts',
  'narration.ts',
  'notes.ts',
  'scenelist.ts',
  'script.ts'
];

export async function getEpisodeFiles(episode: string): Promise<EpisodeFile[]> {
  const episodePath = path.join(process.cwd(), 'scripts', 'season1', `episode${episode}`);
  
  try {
    // Check if directory exists
    if (!fs.existsSync(episodePath)) {
      console.error(`Episode directory not found: ${episodePath}`);
      return [];
    }

    // Read all files in the directory
    const files = await readdir(episodePath);
    
    // Process each required file
    const fileContents = await Promise.all(
      requiredFiles.map(async (fileName) => {
        const filePath = path.join(episodePath, fileName);
        
        try {
          // Check if file exists
          if (fs.existsSync(filePath)) {
            const content = await readFile(filePath, 'utf8');
            const name = path.basename(fileName, path.extname(fileName));
            
            // Extract the exported content
            const exportMatch = content.match(/export const \w+ = ({[\s\S]*?});/);
            const cleanContent = exportMatch ? exportMatch[1] : content;
            
            return {
              name: name.charAt(0).toUpperCase() + name.slice(1),
              description: getFileDescription(name),
              content: cleanContent.trim()
            };
          } else {
            console.warn(`File not found: ${filePath}`);
            return null;
          }
        } catch (error) {
          console.error(`Error reading file ${fileName}:`, error);
          return null;
        }
      })
    );

    // Filter out any failed reads and sort files
    const validFiles = fileContents.filter((file): file is EpisodeFile => file !== null);
    const fileOrder = ['characters', 'key_points', 'narration', 'scenelist', 'script', 'notes'];
    
    return validFiles.sort((a, b) => {
      const aIndex = fileOrder.indexOf(a.name.toLowerCase());
      const bIndex = fileOrder.indexOf(b.name.toLowerCase());
      return aIndex - bIndex;
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
  
  return descriptions[fileName.toLowerCase()] || 'File content';
}

// Example file structure for episode1:
/*
scripts/
  season1/
    episode1/
      characters.ts     - Character definitions and relationships
      key_points.ts    - Major plot points and themes
      narration.ts     - Episode narration and dialogue
      notes.ts         - Production notes and considerations
      scenelist.ts     - Detailed scene breakdowns
      script.ts        - Complete episode script
*/ 