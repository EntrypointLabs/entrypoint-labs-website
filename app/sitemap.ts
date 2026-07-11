import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://entrypointlabs.xyz";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/company`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/careers`, changeFrequency: "monthly", priority: 0.5 },
    {
      url: `${base}/legal/terms-of-service`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
