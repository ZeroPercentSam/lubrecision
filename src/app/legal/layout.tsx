import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

const legalLinks = [
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/cookies', label: 'Cookie Policy' },
  { href: '/legal/terms', label: 'Terms of Service' },
  { href: '/legal/accessibility', label: 'Accessibility' },
  { href: '/legal/disclaimer', label: 'Disclaimers' },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      {/* Top band */}
      <div className="bg-navy-950 pt-[72px]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500/80">
            Legal
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12 lg:py-16">
        <article className="legal-prose">{children}</article>

        {/* Cross-links + review note */}
        <div className="mt-16 border-t border-slate-100 pt-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal documents">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 hover:text-navy-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-xs leading-relaxed text-slate-400">
            These documents are provided for general information. We may update them from
            time to time. For questions, contact{' '}
            <a href="mailto:info@lubecision.com" className="text-slate-500 underline hover:text-navy-900">
              info@lubecision.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
