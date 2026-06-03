'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

/**
 * GDPR / ePrivacy-grade cookie consent.
 *
 * The site currently sets ONLY strictly-necessary cookies, so no third-party
 * scripts are gated yet. This records granular consent now so analytics/marketing
 * can be added later without re-architecting (denied by default until opt-in).
 *
 * Mechanics honored: prior consent before non-essential cookies, equal-prominence
 * Accept-all / Reject-all, no pre-ticked non-essential boxes, withdraw any time
 * (footer "Cookie preferences" dispatches `open-cookie-preferences`), ~12-month
 * re-consent, choice stored first-party.
 */

const CONSENT_KEY = 'lubecision-cookie-consent';
const CONSENT_VERSION = 1;
const RECONSENT_MS = 1000 * 60 * 60 * 24 * 365; // 12 months

export type ConsentCategories = {
  necessary: true; // always on
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = {
  version: number;
  timestamp: number;
  categories: ConsentCategories;
};

/** Read current consent (e.g. before loading an analytics script). */
export function getConsent(): ConsentCategories | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.timestamp > RECONSENT_MS) return null;
    return parsed.categories;
  } catch {
    return null;
  }
}

function persist(categories: ConsentCategories) {
  const payload: StoredConsent = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    categories,
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  } catch {
    /* storage unavailable — non-fatal */
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Decide whether to prompt on mount (client-only — avoids hydration mismatch).
  useEffect(() => {
    if (!getConsent()) setOpen(true);
  }, []);

  // Footer "Cookie preferences" trigger re-opens the panel.
  useEffect(() => {
    const reopen = () => {
      const current = getConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener('open-cookie-preferences', reopen);
    return () => window.removeEventListener('open-cookie-preferences', reopen);
  }, []);

  const close = useCallback((categories: ConsentCategories) => {
    persist(categories);
    setOpen(false);
    setShowDetails(false);
  }, []);

  const acceptAll = () => close({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => close({ necessary: true, analytics: false, marketing: false });
  const savePreferences = () =>
    close({ necessary: true, analytics, marketing });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="false"
          className="fixed bottom-0 left-0 right-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-white/10 bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-navy-950/40">
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-lg bg-gold-500/10 p-2">
                  <Cookie size={18} className="text-gold-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">We value your privacy</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                    We use strictly-necessary cookies to keep this site secure and
                    functional. With your consent we may also use analytics and
                    marketing cookies. You can accept all, reject non-essential, or
                    choose what to allow. See our{' '}
                    <Link href="/legal/cookies" className="text-gold-400 underline hover:text-gold-300">
                      Cookie Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/legal/privacy" className="text-gold-400 underline hover:text-gold-300">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
                <button
                  onClick={rejectAll}
                  aria-label="Reject non-essential cookies and close"
                  className="shrink-0 rounded-md p-1 text-slate-500 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                      <CategoryRow
                        title="Strictly necessary"
                        desc="Required for security and core site function. Always active."
                        checked
                        disabled
                      />
                      <CategoryRow
                        title="Analytics"
                        desc="Helps us understand how the site is used. None are active today."
                        checked={analytics}
                        onChange={setAnalytics}
                      />
                      <CategoryRow
                        title="Marketing"
                        desc="Used to measure and tailor outreach. None are active today."
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                <button
                  onClick={() => setShowDetails((v) => !v)}
                  className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors self-start sm:self-auto"
                >
                  {showDetails ? 'Hide options' : 'Customize'}
                </button>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  {showDetails ? (
                    <button
                      onClick={savePreferences}
                      className="px-5 py-2.5 text-[13px] font-semibold rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors"
                    >
                      Save preferences
                    </button>
                  ) : (
                    <button
                      onClick={rejectAll}
                      className="px-5 py-2.5 text-[13px] font-semibold rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors"
                    >
                      Reject all
                    </button>
                  )}
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 text-[13px] font-semibold rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CategoryRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className={`flex items-start gap-3 ${disabled ? 'opacity-70' : 'cursor-pointer'}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-gold-500"
      />
      <span>
        <span className="block text-[13px] font-medium text-white">{title}</span>
        <span className="block text-xs text-slate-400">{desc}</span>
      </span>
    </label>
  );
}
