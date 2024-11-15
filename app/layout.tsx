import './globals.css'
import { Analytics } from '@vercel/analytics/react'

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
        <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Arktifact Chronicles
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#story" className="hover:text-purple-400 transition-colors">The Story</a>
                <a href="#artifacts" className="hover:text-purple-400 transition-colors">Artifacts</a>
                <a href="#lore" className="hover:text-purple-400 transition-colors">Lore</a>
                <a href="#join" className="hover:text-purple-400 transition-colors">Join</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
