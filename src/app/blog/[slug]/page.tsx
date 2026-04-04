import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogDetailPage from "./BlogDetailPage";
import blogPostsRaw from "@/data/blog-posts.json";

interface ContentBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: ContentBlock[];
  readTime: string;
}

// Type assertion for the imported JSON
const blogPosts = blogPostsRaw as BlogPost[];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | ARSTEG Solutions",
    };
  }

  return {
    title: `${post.title} | ARSTEG Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ARSTEG Blog`,
      description: post.excerpt,
      type: "article",
      url: `https://arsteg.com/blog/${slug}`,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ARSTEG Blog`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPage post={post} />;
}
