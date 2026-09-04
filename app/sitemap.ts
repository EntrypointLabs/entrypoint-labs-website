import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://entrypointlabs.xyz";
  const now = new Date().toISOString();
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/company`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/legal/terms-of-service`,
      lastModified: "2026-07-09",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/privacy-policy`,
      lastModified: "2026-07-09",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
