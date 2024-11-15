import { blogPosts } from '@/data/blog';
import type { BlogPost } from '@/types/blog';
import BlogContent from '@/components/BlogContent';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.slug === params.slug) || blogPosts[0];
  return <BlogContent post={post} />;
};

export default BlogPost; 