import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
