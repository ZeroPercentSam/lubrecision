'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  FlaskConical,
  FileText,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Send,
  Building2,
  User,
  Stethoscope,
} from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

type FormType = 'sample' | 'quote' | 'general';

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<FormType>('sample');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'sample' || type === 'quote' || type === 'general') {
      setActiveTab(type);
    }
  }, [searchParams]);

  const tabs: { id: FormType; label: string; icon: typeof FlaskConical; desc: string }[] = [
    {
      id: 'sample',
      label: 'Request a Sample',
      icon: FlaskConical,
      desc: 'Get a free evaluation kit shipped to your facility',
    },
    {
      id: 'quote',
      label: 'Get a Quote',
      icon: FileText,
      desc: 'Volume pricing for your department or facility',
    },
    {
      id: 'general',
      label: 'General Inquiry',
      icon: MessageSquare,
      desc: 'Questions, partnerships, or clinical support',
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
              Whether you&apos;re ready for a sample, need a quote, or have questions
              — our team responds within 24 hours.
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
                    {activeTab === 'sample'
                      ? 'Your evaluation kit request has been received. Our team will reach out within 24 hours to confirm shipping details.'
                      : activeTab === 'quote'
                        ? 'Your quote request has been submitted. A Lubrecision account specialist will contact you within one business day.'
                        : 'Your message has been received. We\'ll get back to you within 24 hours.'}
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

                    {/* Conditional: quantity for quotes */}
                    {activeTab === 'quote' && (
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                          Estimated Annual Volume
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all bg-white">
                          <option value="">Select range</option>
                          <option>1–100 units</option>
                          <option>100–500 units</option>
                          <option>500–2,000 units</option>
                          <option>2,000–10,000 units</option>
                          <option>10,000+ units</option>
                        </select>
                      </div>
                    )}

                    {/* Conditional: sample count */}
                    {activeTab === 'sample' && (
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-navy-900 mb-2">
                          Evaluation Kits Needed
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all bg-white">
                          <option>1 kit (20 units)</option>
                          <option>2 kits (40 units)</option>
                          <option>3 kits (60 units)</option>
                          <option>Custom quantity</option>
                        </select>
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
                          activeTab === 'sample'
                            ? 'Any specific specialties or procedures you plan to evaluate?'
                            : activeTab === 'quote'
                              ? 'GPO affiliation, shipping preferences, or other requirements...'
                              : 'How can we help?'
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 group inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    <Send size={15} />
                    {activeTab === 'sample'
                      ? 'Request Evaluation Kit'
                      : activeTab === 'quote'
                        ? 'Submit Quote Request'
                        : 'Send Message'}
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
                    href="mailto:info@lubrecision.com"
                    className="flex items-center gap-3 text-sm text-slate-500 hover:text-gold-600 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-gold-400" />
                    </div>
                    info@lubrecision.com
                  </a>
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-3 text-sm text-slate-500 hover:text-gold-600 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <Phone size={14} className="text-gold-400" />
                    </div>
                    1-800-555-1234
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
                    { icon: Stethoscope, label: 'Surgeons & Clinicians', desc: 'Evaluation kits & clinical support' },
                    { icon: Building2, label: 'Procurement Teams', desc: 'Volume pricing & GPO contracts' },
                    { icon: User, label: 'OR Directors', desc: 'Workflow optimization & ROI data' },
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
                <p className="text-3xl font-light text-gold-700">&lt;24h</p>
                <p className="mt-1 text-sm text-gold-600 font-medium">
                  Average Response Time
                </p>
                <p className="mt-2 text-xs text-gold-500/80">
                  Business hours · Monday–Friday
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
