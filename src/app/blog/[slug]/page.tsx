import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import BlogDetailPage from "./BlogDetailPage";
import entries from "@/data/blog-posts.json";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return entries.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = entries.find((x) => x.slug === slug);
  if (!item) return { title: "Page not found", robots: { index: false } };
  return pageMetadata(item.title, item.excerpt, "/blog/" + slug);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = entries.find((x) => x.slug === slug);
  if (!item) notFound();
  return <BlogDetailPage post={item} />;
}
