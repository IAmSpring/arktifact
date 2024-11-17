import { Episode, PlaceholderImages } from './types';
import Image from 'next/image';

// Define the placeholder images with proper types
const placeholderImages: PlaceholderImages = {
  episodes: {
    ep1: {
      src: '/images/episodes/episode1.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 1'
      }
    },
    ep2: {
      src: '/images/episodes/episode2.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 2'
      }
    },
    ep3: {
      src: '/images/episodes/episode3.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 3'
      }
    },
    ep4: {
      src: '/images/episodes/episode4.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 4'
      }
    },
    ep5: {
      src: '/images/episodes/episode5.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 5'
      }
    },
    ep6: {
      src: '/images/episodes/episode6.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 6'
      }
    },
    ep7: {
      src: '/images/episodes/episode7.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 7'
      }
    },
    ep8: {
      src: '/images/episodes/episode8.webp',
      fallback: {
        width: '400',
        height: '300',
        text: 'Episode 8'
      }
    }
  }
};

// Define your episode data
const episodeData: Episode[] = [
  {
    number: 1,
    title: "Origins of Honor",
    subtitle: "The dawn of honor and unity",
    openSeaLink: "https://opensea.io/collection/arktifact-ep1"
  },
  {
    number: 2,
    title: "Bonds of Kinship", 
    subtitle: "The age of community and growth",
    openSeaLink: "https://opensea.io/collection/arktifact-ep2"
  },
  {
    number: 3,
    title: "Age of Innovation",
    subtitle: "The rise of early civilization",
    openSeaLink: "https://opensea.io/collection/arktifact-ep3"
  },
  {
    number: 4,
    title: "Guardians of Knowledge",
    subtitle: "The preservation of wisdom",
    openSeaLink: "https://opensea.io/collection/arktifact-ep4"
  },
  {
    number: 5,
    title: "Industrial Resilience",
    subtitle: "The age of machines and unity",
    openSeaLink: "https://opensea.io/collection/arktifact-ep5"
  },
  {
    number: 6,
    title: "New Frontiers",
    subtitle: "The dawn of digital wisdom",
    openSeaLink: "https://opensea.io/collection/arktifact-ep6"
  },
  {
    number: 7,
    title: "The Era of Unity",
    subtitle: "The cosmic alliance begins",
    openSeaLink: "https://opensea.io/collection/arktifact-ep7"
  },
  {
    number: 8,
    title: "The Final Legacy",
    subtitle: "The culmination of honor",
    openSeaLink: "https://opensea.io/collection/arktifact-ep8"
  }
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
              <Image 
                src={episode.thumbnail || '/images/placeholder.jpg'} 
                alt={episode.title}
                width={400}
                height={300}
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