export interface NFTAttribute {
  trait_type: string;
  value: string | number;
}

export interface NFT {
  id: string;
  name: string;
  creator?: string;
  title?: string;
  description: string;
  image_prompt?: string;
  price?: number;
  image: string;
  imageUrl?: string;
  status?: string;
  openSeaUrl?: string;
  external_url?: string;
  attributes?: NFTAttribute[];
  fallback?: {
    width: number;
    height: number;
    text?: string;
  };
} 