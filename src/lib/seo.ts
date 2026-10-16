import type { Metadata } from "next";
import { site } from "@/config/site";
export const indexable =
  process.env.SITE_INDEXABLE === "true" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      type: "website",
      siteName: site.name,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "ARSTEG Solutions — Thoughtful engineering. Useful software.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
