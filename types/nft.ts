export interface NFTAttribute {
  trait_type: string;
  value: string | number;
}

export interface NFT {
  id: string;
  name: string;
  title?: string;
  description: string;
  image_prompt?: string;
  image: string;
  imageUrl?: string;
  openSeaUrl?: string;
  attributes?: NFTAttribute[];
  fallback?: {
    width: number;
    height: number;
    text?: string;
  };
} 