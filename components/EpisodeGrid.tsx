import { Episode, PlaceholderImages } from './types';

// Define the placeholder images with proper types
const placeholderImages: PlaceholderImages = {
  episodes: {
    ep1: {
      src: '/images/ep1-placeholder.jpg',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 1'
      }
    },
    ep2: {
      src: '/images/ep2-placeholder.jpg',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 2'
      }
    }
    // Add other episodes as needed
  }
};

// Define your episode data
const episodeData: Episode[] = [
  {
    number: 1,
    title: "First Age",
    subtitle: "The Beginning",
    openSeaLink: "https://opensea.io/collection/episode-1"
  },
  {
    number: 2,
    title: "Second Age",
    subtitle: "The Rise",
    openSeaLink: "https://opensea.io/collection/episode-2"
  }
  // Add other episodes as needed
];

const EpisodeGrid = () => {
  // Update episode data to use placeholders with proper typing
  const episodes: Episode[] = episodeData.map((episode: Episode) => ({
    ...episode,
    thumbnail: placeholderImages.episodes[`ep${episode.number}`].src
  }));

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Explore Each Age
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {episodes.map((episode: Episode) => (
            <div 
              key={episode.number}
              className="relative group overflow-hidden rounded-lg transform transition-all hover:scale-105"
            >
              <img 
                src={episode.thumbnail} 
                alt={episode.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-cinzel font-bold mb-2">
                  Episode {episode.number}: {episode.title}
                </h3>
                <p className="text-gray-300 mb-4">{episode.subtitle}</p>
                <a 
                  href={episode.openSeaLink}
                  className="px-6 py-2 rounded-full text-sm font-bold bg-purple-600 hover:bg-purple-500 transition-colors inline-block text-center"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodeGrid; 