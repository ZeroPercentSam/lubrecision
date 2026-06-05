import type { MetadataRoute } from 'next';
import { isComingSoon } from '@/lib/site-mode';

export default function robots(): MetadataRoute.Robots {
  if (isComingSoon()) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://lubecision.com/sitemap.xml',
  };
}
