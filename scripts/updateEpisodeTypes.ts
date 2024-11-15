import * as fs from 'fs';
import * as path from 'path';

const updateEpisodeFile = (episodeNumber: number) => {
  const template = `import { NFT } from '../../types/nft';

const episode${episodeNumber}NFTs: NFT[] = [
  {
    id: "1",
    name: "Arktifact Chronicles Episode ${episodeNumber} #1",
    image: "/images/episodes/${episodeNumber}/1.jpg",
    description: "Episode ${episodeNumber} NFT #1",
    attributes: {
      episode: ${episodeNumber},
      rarity: "common"
    }
  },
  // Additional NFTs can be added here following the same structure
];

export default episode${episodeNumber}NFTs;`;

  const filePath = path.join(process.cwd(), 'data', 'season1', `episode${episodeNumber}.ts`);
  
  try {
    // Create directories if they don't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`✅ Successfully updated episode${episodeNumber}.ts`);
  } catch (error) {
    console.error(`❌ Error updating episode${episodeNumber}.ts:`, error);
  }
};

// Update episodes 5-8
console.log('🚀 Starting episode files update...');
[5, 6, 7, 8].forEach(episodeNum => {
  updateEpisodeFile(episodeNum);
});
console.log('✨ Episode files update complete!');

