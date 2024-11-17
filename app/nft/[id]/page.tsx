import { Metadata } from 'next';
import allNFTs from '../../../data/season1';
import NFTContent from '@/components/NFTContent';

export async function generateStaticParams() {
  return allNFTs.map((nft) => ({
    id: nft.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const nft = allNFTs.find((n) => n.id === params.id) || allNFTs[0];
  
  return {
    title: `${nft.title || nft.name} | Arktifact Chronicles`,
    description: nft.description,
    openGraph: {
      images: [{ url: nft.image }],
    },
  };
}

export default function NFTPage({ params }: { params: { id: string } }) {
  const nft = allNFTs.find((n) => n.id === params.id) || allNFTs[0];
  return <NFTContent nft={nft} />;
} 