'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Arktifact Chronicles
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/story" 
              className={`transition-colors ${pathname === '/story' ? 'text-purple-400' : 'hover:text-purple-400'}`}
            >
              The Story
            </Link>
            <Link 
              href="/nfts" 
              className={`transition-colors ${pathname === '/nfts' ? 'text-purple-400' : 'hover:text-purple-400'}`}
            >
              Artifacts
            </Link>
            <Link 
              href="/lore" 
              className={`transition-colors ${pathname === '/lore' ? 'text-purple-400' : 'hover:text-purple-400'}`}
            >
              Lore
            </Link>
            <Link 
              href="/join" 
              className={`transition-colors ${pathname === '/join' ? 'text-purple-400' : 'hover:text-purple-400'}`}
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 