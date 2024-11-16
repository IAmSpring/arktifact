import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { WalletProvider } from '@/contexts/WalletContext';
import { CollectionProvider } from '@/contexts/CollectionContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Arktifact Chronicles</title>
        <meta name="description" content="Journey through humanity's greatest story" />
      </head>
      <body className="min-h-screen bg-gray-900">
        <WalletProvider>
          <CollectionProvider>
            <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-lg border-b border-gray-800">
              <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                  <a href="/" className="text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Arktifact Chronicles
                  </a>
                  <div className="hidden md:flex space-x-6">
                    <a href="/story" className="hover:text-purple-400 transition-colors">Story</a>
                    <a href="/nft-marketplace" className="hover:text-purple-400 transition-colors">Marketplace</a>
                    <a href="/lore" className="hover:text-purple-400 transition-colors">Lore</a>
                    <a href="/blog" className="hover:text-purple-400 transition-colors">Blog</a>
                    <a href="/wallet" className="hover:text-purple-400 transition-colors">Collection</a>
                  </div>
                </div>
              </div>
            </nav>
            <main className="pt-20">
              {children}
            </main>
            <Analytics />
          </CollectionProvider>
        </WalletProvider>
      </body>
    </html>
  )
}
