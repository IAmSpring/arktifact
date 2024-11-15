import { getEpisodeFiles } from '@/data/episode-files/index';
import EpisodeContent from '@/components/EpisodeContent';

export async function generateStaticParams() {
  return Array.from({ length: 8 }, (_, i) => ({
    episode: (i + 1).toString(),
  }));
}

const BehindTheScenes = ({ params }: { params: { episode: string } }) => {
  const files = getEpisodeFiles(params.episode);
  return <EpisodeContent episode={params.episode} files={files} />;
};

export default BehindTheScenes; 