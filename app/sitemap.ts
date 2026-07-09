import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://entrypointlabs.xyz";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/company`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/careers`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
