import { getEpisodeFiles, EpisodeFile } from '../../../data/episode-files';
import EpisodeContent from '../../../components/EpisodeContent';
import type { Metadata } from 'next'
import fs from 'fs/promises';
import path from 'path';

// Define the episode list directly here since we need it for static paths
const episodeList = [
  {
    id: "1",
    title: "Origins of Honor",
    description: "The beginning of humanity's greatest journey",
    image: "/images/episodes/ep1.jpg"
  },
  {
    id: "2",
    title: "Bonds of Kinship",
    description: "Exploring the ties that bind the tribes",
    image: "/images/episodes/ep2.jpg"
  },
  {
    id: "3",
    title: "Age of Innovation",
    description: "The dawn of technological advancement",
    image: "/images/episodes/ep3.jpg"
  },
  {
    id: "4",
    title: "Guardians of Knowledge",
    description: "Preserving wisdom through the ages",
    image: "/images/episodes/ep4.jpg"
  },
  {
    id: "5",
    title: "Industrial Resilience",
    description: "The rise of technological prowess",
    image: "/images/episodes/ep5.jpg"
  },
  {
    id: "6",
    title: "New Frontiers",
    description: "Expanding horizons and new discoveries",
    image: "/images/episodes/ep6.jpg"
  },
  {
    id: "7",
    title: "The Era of Unity",
    description: "Coming together as one civilization",
    image: "/images/episodes/ep7.jpg"
  },
  {
    id: "8",
    title: "The Final Legacy",
    description: "The culmination of humanity's journey",
    image: "/images/episodes/ep8.jpg"
  }
];

export async function generateStaticParams() {
  return episodeList.map((episode) => ({
    episode: episode.id
  }));
}

// Generate dynamic metadata based on the episode
export async function generateMetadata({ 
  params 
}: { 
  params: { episode: string } 
}): Promise<Metadata> {
  const episode = episodeList.find(ep => ep.id === params.episode);

  return {
    title: episode ? `How It Was Made - ${episode.title}` : 'Episode Not Found',
    description: episode ? episode.description : 'Episode not available',
  }
}

async function loadFileContent(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return '';
  }
}

export default async function BehindTheScenes({ params }: { params: { episode: string } }) {
  const episode = episodeList.find(ep => ep.id === params.episode);
  const fileInfos = await getEpisodeFiles(params.episode);
  
  if (!episode || !fileInfos.length) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-cinzel text-red-400">Episode Not Found</h1>
          <p className="text-gray-400 mt-4">The requested episode content is not available.</p>
        </div>
      </div>
    );
  }

  const files: EpisodeFile[] = await Promise.all(
    fileInfos.map(async (fileInfo) => ({
      ...fileInfo,
      content: await loadFileContent(path.join(process.cwd(), fileInfo.path))
    }))
  );

  return (
    <EpisodeContent 
      episode={params.episode}
      title={episode.title}
      description={episode.description}
      files={files}
    />
  );
} 