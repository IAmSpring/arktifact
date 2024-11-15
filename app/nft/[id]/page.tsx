import allNFTs from '@/data/season1';
import NFTContent from '@/components/NFTContent';

export async function generateStaticParams() {
  return allNFTs.map((nft) => ({
    id: nft.id,
  }));
}

const NFTPage = ({ params }: { params: { id: string } }) => {
  const nft = allNFTs.find((n) => n.id === params.id) || allNFTs[0];
  return <NFTContent nft={nft} />;
};

export default NFTPage; 