import { episodeData } from '../../data/episodes';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              The Arktifact Chronicles
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-16">
            Begin your journey through humanity's greatest story. Each episode unlocks through the collection 
            of Arktifacts, revealing the audio narrative of that age.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {episodeData.map((episode) => (
              <div key={episode.number} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-cinzel font-bold mb-4">
                  Episode {episode.number}: {episode.title}
                </h2>
                <Image
                  src={episode.thumbnail}
                  alt={`Episode ${episode.number} thumbnail`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-6">{episode.description}</p>
                <div className="flex gap-4">
                  <Link 
                    href={episode.openSeaLink}
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Collect Episode
                  </Link>
                  <Link 
                    href={`/how-it-was-made/${episode.number}`}
                    className="btn-secondary"
                  >
                    How It Was Made
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 