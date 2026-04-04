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
      title: "Service Not Found | ARSTEG Solutions",
    };
  }

  return {
    title: `${service.title} | ARSTEG Solutions`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ARSTEG Solutions`,
      description: service.description,
      type: "website",
      url: `https://arsteg.com/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ARSTEG Solutions`,
      description: service.description,
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
