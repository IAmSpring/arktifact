import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  // Featured Post
  {
    slug: 'season-2-announcement',
    title: 'Season 2: The Great Convergence',
    excerpt: 'Get ready for an epic new chapter in the Arktifact Chronicles. Season 2 brings new artifacts, deeper lore, and unprecedented challenges.',
    content: `...`,
    date: '2024-02-01',
    author: 'Project Lead',
    readTime: '6 min',
    category: 'Announcement',
    featured: true,
    featuredImage: '/images/blog/season-2-banner.jpg',
    authorAvatar: '/images/avatars/lead.jpg'
  },
  // ... other posts with all required fields
];

// Helper functions
export const getFeaturedPosts = () => 
  blogPosts.filter(post => post.featured);

export const getRegularPosts = () =>
  blogPosts.filter(post => !post.featured);

export const getPostsByCategory = (category: string) => 
  blogPosts.filter(post => post.category === category);

// Ensure we always have at least one featured post
export const getDefaultFeaturedPost = (): BlogPost => blogPosts[0];

export default blogPosts;