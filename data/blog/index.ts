import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: "making-of-episode-1",
    title: "The Making of Episode 1: Origins of Honor",
    excerpt: "A deep dive into the creation of our first episode and its artifacts.",
    content: `
      <p>When we first conceived the idea of Arktifact Chronicles, we knew we wanted to create something different. Not just another NFT collection, but a living, breathing alternate history that collectors could own a piece of.</p>
      
      <h2>The Beginning</h2>
      <p>Episode 1 began with a simple question: What if humanity's earliest civilizations had made different choices? What if the first tribes had united not through conquest, but through wisdom and shared purpose?</p>
      
      <h2>Crafting the Artifacts</h2>
      <p>Each NFT in Episode 1 was carefully designed to represent a crucial moment in this alternate timeline. The Honor Symbol, our first legendary artifact, represents the exact moment when two rival tribes chose cooperation over conflict.</p>
      
      <h2>The Technical Challenge</h2>
      <p>Creating NFTs that could tell a story was our biggest challenge. We wanted each piece to stand alone as beautiful art while also being part of a larger narrative tapestry.</p>
      
      <h2>Looking Forward</h2>
      <p>As we move forward with future episodes, the groundwork laid in Episode 1 will continue to influence and shape the story. Each artifact is not just a collectible—it's a piece of living history.</p>
    `,
    date: "January 15, 2024",
    author: "Lead Writer",
    readTime: "5 min",
    category: "Behind the Scenes",
    featured: true,
    featuredImage: "/images/blog/episode1-making-of.jpg",
    authorAvatar: "/images/avatars/lead-writer.jpg"
  }
  // Add more blog posts as needed
]; 