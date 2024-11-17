import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { WalletProvider } from '../contexts/WalletContext';
import { CollectionProvider } from '../contexts/CollectionContext';

// Move Navigation to a separate client component file
import Navigation from '../components/Navigation';

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
            <Navigation />
            <main className="pt-20">
              {children}
            </main>
            <Analytics />
          </CollectionProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
