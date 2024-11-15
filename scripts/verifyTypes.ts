import * as fs from 'fs';
import * as path from 'path';

const verifyEpisodeFile = (episodeNumber: number) => {
  const filePath = path.join(process.cwd(), 'data', 'season1', `episode${episodeNumber}.ts`);
  
  try {
    if (fs.existsSync(filePath)) {
      console.log(`✅ Episode ${episodeNumber} file exists`);
    } else {
      console.error(`❌ Missing episode ${episodeNumber} file`);
    }
  } catch (error) {
    console.error(`❌ Error checking episode ${episodeNumber}:`, error);
  }
};

console.log('🔍 Verifying episode files...');
[5, 6, 7, 8].forEach(episodeNum => {
  verifyEpisodeFile(episodeNum);
});
console.log('✨ Verification complete!'); 