import blogsData from "./blogsData.json";

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  image: string;
  featuredImage?: string;
  excerpt: string;
  slug: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = blogsData.map((b) => ({
  id: b.id,
  title: b.title,
  author: b.author,
  image: b.thumbnail,
  featuredImage: b.featuredImage,
  excerpt: b.excerpt,
  slug: b.slug,
  content: b.content,
}));

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
