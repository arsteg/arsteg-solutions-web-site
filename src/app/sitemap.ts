import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import services from "@/data/services.json";
import portfolio from "@/data/portfolio.json";
import blog from "@/data/blog-posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;


  const staticRoutes = ["", "/services", "/products", "/portfolio", "/about", "/blog", "/careers", "/contact", "/privacy"].map(
    (path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: s.priority < 10 ? 0.8 : 0.6,
  }));

  const portfolioRoutes = portfolio.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const blogRoutes = blog.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
