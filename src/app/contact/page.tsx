'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  FlaskConical,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Send,
  Building2,
  User,
  Stethoscope,
} from 'lucide-react';
import { FDA_STATUS_LINE, REGULATORY_NOTICE, FORM_CONSENT } from '@/lib/compliance';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

type FormType = 'evaluation' | 'general';

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<FormType>('general');
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const type = searchParams.get('type');
    // Map legacy/known params: sample → evaluation; anything else (incl. quote) → general.
    if (type === 'sample' || type === 'evaluation') {
      setActiveTab('evaluation');
    } else {
      setActiveTab('general');
    }
  }, [searchParams]);

  const tabs: { id: FormType; label: string; icon: typeof FlaskConical; desc: string }[] = [
    {
      id: 'general',
      label: 'Request Information',
      icon: MessageSquare,
      desc: 'Questions, partnerships, or clinical support',
    },
    {
      id: 'evaluation',
      label: 'Request Evaluation Information',
      icon: FlaskConical,
      desc: 'Learn about evaluating Lubecision at your facility',
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  }

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-white">
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <motion.nav
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/" className="hover:text-navy-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-navy-900 font-medium">Contact</span>
          </motion.nav>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-navy-900">
              Let&apos;s{' '}
              <span className="text-gradient font-normal">Connect</span>
            </h1>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Questions about Lubecision or interested in evaluating it at your
              facility? We aim to respond within a few business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FORM SECTION ═══════════ */}
      <section className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,340px] gap-10 lg:gap-14">
            {/* Main Form Area */}
            <div>
              {/* Tab Selector */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSubmitted(false); }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-navy-950 text-gold-400 border-navy-950'
                        : 'bg-white text-slate-500 border-slate-200 hover:border-navy-200'
                    }`}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Description */}
              <p className="text-sm text-slate-400 mb-6">
                {tabs.find((t) => t.id === activeTab)?.desc}
              </p>

              {submitted ? (
                /* Success State */
                <motion.div
                  className="rounded-2xl bg-white border border-slate-100 p-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-light text-navy-900">
                    Thank You!
                  </h2>
                  <p className="mt-3 text-slate-500 max-w-md mx-auto">
                    {activeTab === 'evaluation'
                      ? 'Your evaluation inquiry has been received. Our team will follow up with information about evaluating Lubecision. We aim to respond within a few business days.'
                      : 'Your message has been received. We aim to respond within a few business days.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-gold-600 hover:text-gold-500 font-medium"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  className="rounded-2xl bg-white border border-slate-100 p-8 md:p-10 shadow-sm"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={activeTab}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
                        placeholder="Smith"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
                        placeholder="jane@hospital.org"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    {/* Facility */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        Facility / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
                        placeholder="Memorial Hospital"
                      />
                    </div>
                    {/* Role */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        Your Role *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all bg-white"
                      >
                        <option value="">Select your role</option>
                        <option>Surgeon</option>
                        <option>OR Nurse / Scrub Tech</option>
                        <option>OR Director / Manager</option>
                        <option>Procurement / Supply Chain</option>
                        <option>Hospital Administrator</option>
                        <option>Biomedical Engineering</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Conditional: what to evaluate (non-ordering, optional free text) */}
                    {activeTab === 'evaluation' && (
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                          What You&apos;d Like to Evaluate
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
                          placeholder="Specialties, procedures, or use cases of interest (optional)"
                        />
                      </div>
                    )}

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                        {activeTab === 'general' ? 'Your Message *' : 'Additional Notes'}
                      </label>
                      <textarea
                        rows={4}
                        required={activeTab === 'general'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all resize-none"
                        placeholder={
                          activeTab === 'evaluation'
                            ? 'Anything else our team should know?'
                            : 'How can we help?'
                        }
                      />
                    </div>
                  </div>

                  {/* Investigational-device disclaimer */}
                  <p className="mt-6 text-xs leading-relaxed text-slate-500">
                    {FDA_STATUS_LINE}
                  </p>

                  {/* Privacy consent */}
                  <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-slate-500">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-gold-500 focus:ring-gold-500/30"
                    />
                    <span>
                      {FORM_CONSENT}{' '}
                      <Link
                        href="/legal/privacy"
                        className="text-gold-600 hover:text-gold-500 underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-6 group inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    <Send size={15} />
                    {activeTab === 'evaluation'
                      ? 'Request Evaluation Information'
                      : 'Request Information'}
                  </button>
                </motion.form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="rounded-2xl bg-white border border-slate-100 p-7">
                <h3 className="text-sm font-semibold text-navy-900 tracking-wide mb-5">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@lubecision.com"
                    className="flex items-center gap-3 text-sm text-slate-500 hover:text-gold-600 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-gold-400" />
                    </div>
                    info@lubecision.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-gold-400" />
                    </div>
                    United States
                  </div>
                </div>
              </div>

              {/* Who contacts us */}
              <div className="rounded-2xl bg-navy-950 p-7">
                <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
                  Who Reaches Out
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Stethoscope, label: 'Surgeons & Clinicians', desc: 'Product information & clinical questions' },
                    { icon: Building2, label: 'Supply Chain Teams', desc: 'Development status & general inquiries' },
                    { icon: User, label: 'OR Directors', desc: 'Workflow questions & evaluation interest' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon size={16} className="text-gold-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-gold-200 bg-gold-50/50 p-7 text-center">
                <p className="text-lg font-light text-gold-700">
                  We aim to respond within a few business days.
                </p>
                <p className="mt-2 text-xs text-gold-500/80">
                  Business hours · Monday–Friday
                </p>
              </div>

              {/* Regulatory notice */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-xs leading-relaxed text-slate-500">
                  {REGULATORY_NOTICE}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
