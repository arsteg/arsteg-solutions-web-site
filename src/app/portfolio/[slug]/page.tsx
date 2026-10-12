import { notFound } from "next/navigation";
import { Metadata } from "next";
import PortfolioDetailPage from "./PortfolioDetailPage";
import portfolioData from "@/data/portfolio.json";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.summary,
    openGraph: {
      title: `${project.title}`,
      description: project.summary,
      type: "article",
      url: `https://arsteg.com/portfolio/${slug}`,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title}`,
      description: project.summary,
    },
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailPage project={project} />;
}
