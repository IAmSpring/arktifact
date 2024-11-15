export interface NFT {
  name: string;
  id: string;
  description?: string;
  image: string;
  attributes?: {
    [key: string]: string | number;
  };
} 