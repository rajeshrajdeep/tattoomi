// app/sitemap.ts

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tattoomi.in",
      lastModified: new Date("2026-09-16"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}