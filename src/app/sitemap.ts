import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mypetbook.app";

const staticRoutes: { path: string; priority: number; changeFreq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFreq: "weekly" },
  { path: "/features", priority: 0.9, changeFreq: "weekly" },
  { path: "/about", priority: 0.8, changeFreq: "monthly" },
  { path: "/pricing", priority: 0.9, changeFreq: "monthly" },
  { path: "/marketplace", priority: 0.9, changeFreq: "weekly" },
  { path: "/directory", priority: 0.9, changeFreq: "weekly" },
  { path: "/for-vets", priority: 0.9, changeFreq: "monthly" },
  { path: "/for-pet-shops", priority: 0.9, changeFreq: "monthly" },
  { path: "/community", priority: 0.8, changeFreq: "weekly" },
  { path: "/blog", priority: 0.8, changeFreq: "weekly" },
  { path: "/contact", priority: 0.7, changeFreq: "monthly" },
  { path: "/privacy", priority: 0.5, changeFreq: "yearly" },
  { path: "/terms", priority: 0.5, changeFreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
