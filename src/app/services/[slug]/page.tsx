import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceDetailPage from "./ServiceDetailPage";
import servicesData from "@/data/services.json";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
      type: "website",
      url: `https://arsteg.com/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.summary,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
