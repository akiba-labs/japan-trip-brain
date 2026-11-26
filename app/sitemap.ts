import type { MetadataRoute } from "next";
import { isGithubPages, pagesSiteUrl } from "@/lib/hosting";

export const dynamic = "force-static";

const VERCEL_URL = "https://japan-trip-brain.vercel.app";
const SITE_URL = isGithubPages ? pagesSiteUrl(VERCEL_URL) : VERCEL_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  if (isGithubPages) {
    return [
      { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
      { url: `${SITE_URL}/agents/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: `${SITE_URL}/legal/disclaimer/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ];
  }
  return [
    { url: `${SITE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/agents`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/llms.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/openapi.json`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/legal/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
