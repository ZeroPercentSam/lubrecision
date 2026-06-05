import type { MetadataRoute } from 'next';
import { isComingSoon } from '@/lib/site-mode';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lubecision.com';
  const lastModified = new Date();

  // Pre-launch: only expose the Coming Soon home page.
  if (isComingSoon()) {
    return [
      {
        url: baseUrl,
        lastModified,
        changeFrequency: 'weekly',
        priority: 1,
      },
    ];
  }

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/product`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/science`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/surgeons`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/procurement`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...[
      'privacy',
      'cookies',
      'terms',
      'accessibility',
      'disclaimer',
    ].map((slug) => ({
      url: `${baseUrl}/legal/${slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
