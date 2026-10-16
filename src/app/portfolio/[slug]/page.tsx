import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import PortfolioDetailPage from "./PortfolioDetailPage";
import entries from "@/data/portfolio.json";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return entries.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = entries.find((x) => x.slug === slug);
  if (!item) return { title: "Page not found", robots: { index: false } };
  return pageMetadata(item.title, item.summary, "/portfolio/" + slug);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = entries.find((x) => x.slug === slug);
  if (!item) notFound();
  return <PortfolioDetailPage project={item} />;
}
