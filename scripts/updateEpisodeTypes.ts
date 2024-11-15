// This is just for reference - you can manually update each file
const episodeTemplate = (episodeNumber: number): string => `
import { NFT } from '../../types/nft';

const episode${episodeNumber}NFTs: NFT[] = [
  {
    id: "1",
    name: "NFT Name",
    image: "/path/to/image.jpg",
    description: "NFT Description",
    attributes: {
      // your attributes here
    }
  }
  // ... add other NFTs
];

export default episode${episodeNumber}NFTs;
`;

// Episodes 5-8 need to be updated
[5, 6, 7, 8].forEach(episodeNum => {
  // Update each episode file with the correct type structure
}); 