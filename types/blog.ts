export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  featured?: boolean;
  featuredImage?: string;
  imageUrl?: string;
  authorAvatar?: string;
} 