import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isComingSoon } from '@/lib/site-mode';

/**
 * Pre-launch routing gate.
 *
 * While the site is in Coming Soon mode (production only by default), every
 * route other than the home page is unpublished — requests are redirected back
 * to the Coming Soon home page. Preview/staging deployments are unaffected and
 * serve the full site.
 */
export function proxy(request: NextRequest) {
  if (!isComingSoon()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  // Run on all page routes; skip Next internals and any file with an extension
  // (robots.txt, sitemap.xml, og-image.png, favicon, static assets, …).
  matcher: ['/((?!_next/|.*\\..*).*)'],
};
