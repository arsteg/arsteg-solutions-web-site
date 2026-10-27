import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import services from "@/data/services.json";
import { hireRoles } from "@/data/hire";
import portfolio from "@/data/portfolio.json";
import blog from "@/data/blog-posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes: {
    url: string;
    changeFrequency: "monthly";
    priority: number;
  }[] = [
    ["", 1],
    ["/hire", 0.9],
    ["/dedicated-teams", 0.9],
    ["/services", 0.8],
    ["/products", 0.7],
    ["/portfolio", 0.7],
    ["/about", 0.7],
    ["/blog", 0.7],
    ["/careers", 0.6],
    ["/contact", 0.7],
    ["/privacy", 0.4],
  ].map(([path, priority]) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: priority as number,
  }));

  const hireRoutes = hireRoles.map((r) => ({
    url: `${base}/hire/${r.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

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

  return [
    ...staticRoutes,
    ...hireRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
  ];
}
