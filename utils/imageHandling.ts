import { NFT } from '@/types/nft';

export const DEFAULT_IMAGE_DIMENSIONS = {
  width: 400,
  height: 400,
};

export const FALLBACK_IMAGE = '/images/placeholder.jpg';

export const getImageDetails = (nft: NFT) => {
  return {
    src: nft.image || nft.imageUrl || FALLBACK_IMAGE,
    width: nft.fallback?.width || DEFAULT_IMAGE_DIMENSIONS.width,
    height: nft.fallback?.height || DEFAULT_IMAGE_DIMENSIONS.height,
    alt: nft.title || nft.name || 'NFT Image',
    blurDataURL: FALLBACK_IMAGE,
  };
}; 