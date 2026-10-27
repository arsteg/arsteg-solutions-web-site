import type { Metadata } from "next";
import { site } from "@/config/site";
// Indexable in production by default so the live site is crawlable.
// - Explicitly force on with SITE_INDEXABLE=true (any host).
// - Explicitly force OFF with SITE_INDEXABLE=false (used by the preview/review
//   build so it stays noindex + Disallow: /).
// - Vercel non-production deployments (preview/development) are never indexed.
// - Local `next dev` is not indexed (NODE_ENV !== "production").
const indexFlag = process.env.SITE_INDEXABLE;
const isVercelNonProd =
  !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
export const indexable =
  indexFlag === "true" ||
  (indexFlag !== "false" &&
    !isVercelNonProd &&
    process.env.NODE_ENV === "production");
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
