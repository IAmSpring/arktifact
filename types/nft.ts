export interface NFT {
  id: string;
  name: string;
  title?: string;
  description?: string;
  image: string;
  imageUrl?: string;
  openSeaUrl?: string;
  attributes?: {
    [key: string]: string | number;
  };
} 