import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import HireDetailPage from "./HireDetailPage";
import { hireRoles, getHireRole } from "@/data/hire";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hireRoles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) return { title: "Page not found", robots: { index: false } };
  return pageMetadata(role.metaTitle, role.metaDescription, "/hire/" + slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const role = getHireRole(slug);
  if (!role) notFound();
  return <HireDetailPage role={role} />;
}
