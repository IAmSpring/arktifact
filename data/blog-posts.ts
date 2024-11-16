import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  // Featured Post
  {
    slug: 'season-2-announcement',
    title: 'Season 2: The Great Convergence',
    excerpt: 'Get ready for an epic new chapter in the Arktifact Chronicles. Season 2 brings new artifacts, deeper lore, and unprecedented challenges.',
    content: `
      <p>We're excited to announce that Season 2 of the Arktifact Chronicles is coming soon! This season will introduce new characters, plot twists, and challenges for our players.</p>
      
      <h2>What to Expect</h2>
      <ul>
        <li>New characters and storylines</li>
        <li>Improved gameplay mechanics</li>
        <li>Enhanced graphics and animations</li>
      </ul>
    `,
    date: '2024-02-01',
    author: 'Project Lead',
    readTime: '6 min',
    category: 'Announcement',
    featured: true,
    featuredImage: '/images/blog/season-2-banner.jpg',
    authorAvatar: '/images/avatars/lead.jpg'
  },
  // Regular Posts
  {
    slug: 'community-event-feb',
    title: 'February Community Gathering Recap',
    excerpt: 'Highlights from our latest community event, featuring exclusive reveals and community Q&A.',
    content: `
      <p>On February 15th, we held our latest community gathering. It was a great success, with attendees from all over the world coming together to share their passion for the Arktifact Chronicles.</p>
      
      <h2>Key Highlights</h2>
      <ul>
        <li>Introduction to the new character, Raska</li>
        <li>Discussion on the importance of unity in our society</li>
        <li>Q&A session with the development team</li>
      </ul>
    `,
    date: '2024-02-15',
    author: 'Community Manager',
    readTime: '4 min',
    category: 'Community',
    featuredImage: '/images/blog/community-event.jpg',
    authorAvatar: '/images/avatars/community.jpg'
  },
  {
    slug: 'marketplace-update',
    title: 'New Marketplace Features Released',
    excerpt: 'Explore the latest updates to our NFT marketplace, including advanced filtering and bulk actions.',
    content: `
      <p>We're excited to announce that we've released new features to our NFT marketplace. These features include advanced filtering and bulk actions. Stay tuned for more details!</p>
    `,
    date: '2024-02-10',
    author: 'Product Manager',
    readTime: '3 min',
    category: 'Development',
    featuredImage: '/images/blog/marketplace-update.jpg',
    authorAvatar: '/images/avatars/dev.jpg'
  },
  {
    slug: 'artifact-spotlight',
    title: 'Artifact Spotlight: The Eternal Flame',
    excerpt: 'Deep dive into one of our most mysterious artifacts and its significance in the Chronicles.',
    content: `
      <p>The Eternal Flame is one of our most mysterious artifacts. It's a powerful relic that has been passed down through generations. In this post, we'll take a deep dive into its significance and how it plays a role in the Chronicles.</p>
    `,
    date: '2024-02-05',
    author: 'Lore Master',
    readTime: '7 min',
    category: 'Artifact Lore',
    featuredImage: '/images/blog/eternal-flame.jpg',
    authorAvatar: '/images/avatars/historian.jpg'
  },
  {
    slug: 'community-creations',
    title: 'Community Creations: January Showcase',
    excerpt: 'Celebrating the amazing fan art and stories created by our community members.',
    content: `
      <p>We're excited to showcase the amazing fan art and stories created by our community members. Check out some of the best submissions from January!</p>
    `,
    date: '2024-01-31',
    author: 'Community Manager',
    readTime: '5 min',
    category: 'Community',
    featuredImage: '/images/blog/community-art.jpg',
    authorAvatar: '/images/avatars/community.jpg'
  }
];

// Helper function to filter posts by category
export const getPostsByCategory = (category: string) => 
  blogPosts.filter(post => post.category === category);

// Helper function to get featured posts
export const getFeaturedPosts = () => 
  blogPosts.filter(post => post.featured);

// Helper function to get regular (non-featured) posts
export const getRegularPosts = () =>
  blogPosts.filter(post => !post.featured);

export default blogPosts; 