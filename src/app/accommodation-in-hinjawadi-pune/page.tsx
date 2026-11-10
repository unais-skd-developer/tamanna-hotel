import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/data/blogPosts";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation in Hinjawadi Pune: What Should You Look For? | Tamanna Hotels",
  description: "Accommodation in Hinjawadi Pune: What Should You Look For? Practical guide for travellers.",
};

export default function AccommodationInHinjawadiPunePage() {
  const post = getBlogPostBySlug("accommodation-in-hinjawadi-pune");

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
