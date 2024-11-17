import { blogPosts } from '../../../data/blog/posts';
import BlogContent from '../../../components/BlogContent';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug) || blogPosts[0];
  
  return {
    title: `${post.title} | Arktifact Chronicles`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug) || blogPosts[0];
  return <BlogContent post={post} />;
} 