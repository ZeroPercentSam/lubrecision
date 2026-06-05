import { ShieldCheck } from 'lucide-react';
import { FDA_STATUS_SHORT, FDA_STATUS_LINE } from '@/lib/compliance';

/* ════════════════════════════════════════════════════
   COMING SOON — pre-launch holding page
   Shown on production until the site is ready to launch.
   ════════════════════════════════════════════════════ */
export function ComingSoon() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient px-6">
      {/* Faint hexagonal grid — clinical texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="cs-hex"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2)"
          >
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cs-hex)" />
      </svg>

      {/* Soft glow accents */}
      <div
        className="absolute top-[18%] right-[12%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[18%] left-[8%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(42,68,148,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Wordmark */}
        <p className="text-sm font-semibold tracking-[0.35em] uppercase text-gold-400">
          Lubecision
        </p>

        {/* Headline */}
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1]">
          Something precise is
          <br />
          <span className="text-gradient-gold font-normal">coming soon.</span>
        </h1>

        {/* Subcopy */}
        <p className="mt-7 text-lg text-slate-300 leading-relaxed font-light max-w-xl mx-auto">
          We&apos;re putting the finishing touches on our site. Lubecision is a
          phospholipid anti-stick solution in development for electrosurgical and
          da Vinci&reg; robotic instrument tips.
        </p>

        {/* Status badge */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5">
          <ShieldCheck size={15} className="text-gold-400" />
          <span className="text-xs tracking-wider text-white font-medium uppercase">
            {FDA_STATUS_SHORT}
          </span>
        </div>

        {/* Contact */}
        <p className="mt-12 text-sm text-slate-400">
          For inquiries, reach us at{' '}
          <a
            href="mailto:info@lubecision.com"
            className="text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"
          >
            info@lubecision.com
          </a>
        </p>

        {/* Investigational status line */}
        <p className="mt-10 text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
          {FDA_STATUS_LINE}
        </p>
      </div>
    </section>
  );
}
