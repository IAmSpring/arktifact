export interface Episode {
  number: number;
  title: string;
  subtitle: string;
  openSeaLink: string;
  thumbnail?: string;
}

export interface PlaceholderImage {
  src: string;
  fallback: {
    width: string;
    height: string;
    text: string;
  };
}

export interface PlaceholderImages {
  episodes: {
    [key in `ep${number}`]: PlaceholderImage;
  };
} 