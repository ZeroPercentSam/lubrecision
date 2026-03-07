'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from 'framer-motion';
import {
  Clock,
  DollarSign,
  AlertTriangle,
  Wrench,
  ShieldCheck,
  Timer,
  FlaskConical,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Stethoscope,
  Building2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

/* ─────────────── Animated Counter ─────────────── */
function Counter({
  from = 0,
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-50px' });
  const motionVal = useMotionValue(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (nodeRef.current) {
          nodeRef.current.textContent =
            prefix + v.toFixed(decimals) + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, motionVal, to, duration, prefix, suffix, decimals]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ──────────── Floating Geometric Shapes ──────────── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hexagonal grid pattern — faint, clinical */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex"
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
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
        }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(42,68,148,0.12) 0%, transparent 70%)',
        }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Thin diagonal lines */}
      <motion.div
        className="absolute top-[30%] left-[20%] w-px h-40 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent rotate-[25deg]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[50%] right-[25%] w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent -rotate-[15deg]"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      {/* Small precision crosshairs */}
      <motion.div
        className="absolute top-[25%] right-[30%]"
        animate={{ opacity: [0.15, 0.35, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="rgba(212,168,67,0.3)" strokeWidth="0.5" />
          <line x1="12" y1="2" x2="12" y2="8" stroke="rgba(212,168,67,0.2)" strokeWidth="0.5" />
          <line x1="12" y1="16" x2="12" y2="22" stroke="rgba(212,168,67,0.2)" strokeWidth="0.5" />
          <line x1="2" y1="12" x2="8" y2="12" stroke="rgba(212,168,67,0.2)" strokeWidth="0.5" />
          <line x1="16" y1="12" x2="22" y2="12" stroke="rgba(212,168,67,0.2)" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ──────────────── Comparison Row ──────────────── */
function ComparisonRow({
  label,
  without,
  withLubrecision,
  delay = 0,
}: {
  label: string;
  without: string;
  withLubrecision: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="grid grid-cols-[1fr,1fr,1fr] gap-4 md:gap-8 py-5 border-b border-white/5 last:border-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-sm md:text-base text-slate-300 font-medium">{label}</div>
      <div className="flex items-center gap-2 text-sm md:text-base">
        <XCircle size={16} className="text-red-400 shrink-0" />
        <span className="text-red-300/80">{without}</span>
      </div>
      <div className="flex items-center gap-2 text-sm md:text-base">
        <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
        <span className="text-gold-300">{withLubrecision}</span>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  /* ── Email form state ── */
  const [email, setEmail] = useState('');

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
      >
        <FloatingShapes />

        <motion.div
          className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="text-xs font-medium tracking-widest text-gold-400 uppercase">
              Next-Generation Electrosurgical Solution
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Eschar Buildup Costs Your OR{' '}
            <span className="text-gradient-gold font-normal">
              $2,400+
            </span>{' '}
            Per Case.
            <br />
            <span className="text-white/90">We Engineered the Solution.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Lubrecision is a precision-engineered phospholipid anti-stick solution
            that eliminates eschar buildup, reduces surgical pauses, and optimizes
            every electrosurgical procedure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/contact?type=sample"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Request a Free Sample
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/science"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full border border-white/25 text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              See the Science
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Trust Micro-badges */}
          <motion.div
            className="flex items-center justify-center gap-6 md:gap-8 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {['FDA Registered', 'AORN Compliant', 'Sterile Single-Use'].map(
              (badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-[11px] tracking-wider text-white/40 uppercase"
                >
                  <div className="w-1 h-1 rounded-full bg-gold-500/60" />
                  {badge}
                </div>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — THE PROBLEM (Loss Aversion)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              The Problem
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              The Hidden Cost of{' '}
              <span className="text-gradient font-normal">Eschar</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Every electrosurgical procedure faces the same challenge: eschar
              buildup on electrode tips. The result is a cascade of costly
              disruptions that affect your entire OR workflow.
            </p>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              {
                icon: DollarSign,
                stat: '$36–62',
                label: 'Cost Per OR Minute',
                desc: 'Every surgical pause to clean eschar directly drains your operating budget.',
                color: 'text-red-500',
                bg: 'bg-red-50',
                border: 'border-red-100',
              },
              {
                icon: Clock,
                stat: '5–12',
                label: 'Pauses Per Procedure',
                desc: 'Repeated hand-backs to scrub tips disrupt surgical flow and extend case time.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
              },
              {
                icon: AlertTriangle,
                stat: '↑ Risk',
                label: 'Complication Potential',
                desc: 'Eschar buildup increases impedance, requiring higher power and risking thermal injury.',
                color: 'text-orange-500',
                bg: 'bg-orange-50',
                border: 'border-orange-100',
              },
              {
                icon: Wrench,
                stat: '3–5×',
                label: 'Faster Tip Degradation',
                desc: 'Repeated scrubbing and charring accelerates instrument wear and replacement costs.',
                color: 'text-slate-600',
                bg: 'bg-slate-50',
                border: 'border-slate-200',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className={`relative rounded-2xl border ${card.border} ${card.bg} p-7 group hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${card.bg} ${card.color}`}
                >
                  <card.icon size={20} />
                </div>
                <div className={`mt-4 text-3xl font-semibold ${card.color}`}>
                  {card.stat}
                </div>
                <div className="mt-1 text-sm font-semibold text-navy-900 tracking-wide">
                  {card.label}
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Anchoring line */}
          <motion.p
            className="text-center mt-12 text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Based on published data from JAMA Surgery, AORN, and perioperative
            cost analyses.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — THE SOLUTION (Contrast Effect)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
                The Solution
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-tight text-navy-900 leading-tight">
                Precision-Engineered
                <br />
                <span className="text-gradient font-normal">
                  Anti-Stick Technology
                </span>
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Lubrecision utilizes an advanced biocompatible phospholipid
                formulation — similar to compounds the human body produces
                naturally — to create a protective barrier on electrosurgical
                instrument tips.
              </p>

              {/* Benefits */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Eliminates Eschar',
                    desc: 'Dramatically reduces tissue buildup on electrode tips during procedures.',
                  },
                  {
                    icon: Timer,
                    title: 'Optimizes OR Time',
                    desc: 'Fewer hand-backs means uninterrupted surgical flow and shorter cases.',
                  },
                  {
                    icon: FlaskConical,
                    title: 'AORN Compliant',
                    desc: 'Aligns with AORN Guideline 3.11.1 for perioperative best practice.',
                  },
                  {
                    icon: HeartPulse,
                    title: 'Biocompatible',
                    desc: 'Non-toxic phospholipid formula. Sterile, single-use, ready to apply.',
                  },
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  >
                    <div className="shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center">
                      <benefit.icon size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Product Visual Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy-100/60 via-transparent to-gold-100/40" />

                {/* Product placeholder */}
                <div className="absolute inset-8 rounded-2xl bg-white shadow-2xl shadow-navy-900/5 flex flex-col items-center justify-center p-10 border border-slate-100">
                  {/* Stylized product bottle silhouette */}
                  <div className="relative">
                    <div className="w-24 h-36 rounded-xl bg-gradient-to-b from-navy-800 to-navy-950 mx-auto relative">
                      {/* Cap */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 rounded-t-lg bg-navy-700" />
                      {/* Label area */}
                      <div className="absolute top-10 left-2 right-2 h-16 rounded-md bg-gradient-to-b from-gold-400/20 to-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                        <span className="text-[8px] tracking-[0.2em] text-gold-400 font-semibold uppercase">
                          Lubrecision
                        </span>
                      </div>
                    </div>
                    {/* Foam pad */}
                    <div className="mt-4 w-28 h-8 rounded-lg bg-gradient-to-r from-slate-200 to-slate-100 mx-auto flex items-center justify-center">
                      <span className="text-[7px] text-slate-400 uppercase tracking-wider">
                        Application Pad
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-xs font-semibold text-navy-900 tracking-wide">
                      Sterile 4mL Solution + Applicator
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Single-use · Ready to apply · Biocompatible
                    </p>
                  </div>
                </div>

                {/* Floating specs */}
                <motion.div
                  className="absolute -right-2 top-[30%] bg-white rounded-xl shadow-lg shadow-slate-200/60 px-4 py-3 border border-slate-100"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="text-[10px] font-semibold text-navy-900 tracking-wide">
                    STERILE
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5">
                    Single-patient use
                  </p>
                </motion.div>

                <motion.div
                  className="absolute -left-2 bottom-[25%] bg-white rounded-xl shadow-lg shadow-slate-200/60 px-4 py-3 border border-slate-100"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <p className="text-[10px] font-semibold text-gold-600 tracking-wide">
                    PHOSPHOLIPID
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5">
                    Biocompatible formula
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — HOW IT COMPARES (Superiority)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-navy-950 section-padding overflow-hidden">
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              The Comparison
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Traditional Approach{' '}
              <span className="text-slate-500">vs.</span>{' '}
              <span className="text-gradient-gold font-normal">Lubrecision</span>
            </h2>
          </motion.div>

          {/* Comparison Table */}
          <div className="mt-14">
            {/* Column Headers */}
            <div className="grid grid-cols-[1fr,1fr,1fr] gap-4 md:gap-8 pb-4 border-b border-white/10">
              <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Factor
              </div>
              <div className="text-xs font-semibold tracking-wider text-red-400/70 uppercase">
                Without Treatment
              </div>
              <div className="text-xs font-semibold tracking-wider text-gold-500 uppercase">
                With Lubrecision
              </div>
            </div>

            <ComparisonRow
              label="Eschar Buildup"
              without="Rapid accumulation"
              withLubrecision="Dramatically reduced"
              delay={0.1}
            />
            <ComparisonRow
              label="Surgical Pauses"
              without="5–12 per case"
              withLubrecision="Near zero"
              delay={0.15}
            />
            <ComparisonRow
              label="Procedure Time"
              without="Extended by 10–40 min"
              withLubrecision="Optimized flow"
              delay={0.2}
            />
            <ComparisonRow
              label="Instrument Wear"
              without="Accelerated degradation"
              withLubrecision="Preserved longevity"
              delay={0.25}
            />
            <ComparisonRow
              label="Current Flow"
              without="Impeded by buildup"
              withLubrecision="Consistent performance"
              delay={0.3}
            />
            <ComparisonRow
              label="AORN Compliance"
              without="Not addressed"
              withLubrecision="Guideline 3.11.1 aligned"
              delay={0.35}
            />
          </div>

          {/* Bottom nudge */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium tracking-wide"
            >
              See full product details
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — SOCIAL PROOF (Authority)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* AORN Quote Block */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl bg-navy-950 p-10 md:p-14 overflow-hidden">
              {/* Background decor */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-navy-700/40 to-transparent rounded-tr-full" />

              <div className="relative">
                {/* Quote mark */}
                <svg
                  className="w-10 h-10 text-gold-500/40 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11.072 13.22 11.072 15.103c0 .99-.378 1.941-1.05 2.642-.674.7-1.587 1.094-2.54 1.094-1.076 0-2.21-.545-2.899-1.518zM16.583 17.321C15.553 16.227 15 15 15 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.986.179 3.467 1.709 3.467 3.592 0 .99-.378 1.941-1.05 2.642-.674.7-1.587 1.094-2.54 1.094-1.076 0-2.21-.545-2.899-1.518z" />
                </svg>

                <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed">
                  High-quality evidence supports the use of an anti-stick
                  phospholipid solution to reduce surgical time.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-px h-8 bg-gold-500/40" />
                  <div>
                    <p className="text-sm font-semibold text-gold-400 tracking-wide">
                      AORN Guidelines for Perioperative Practice
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Recommendation 3.11.1 — Electrosurgical Safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                value: 50000,
                suffix: '+',
                label: 'Procedures Supported',
                prefix: '',
              },
              { value: 98, suffix: '%', label: 'Satisfaction Rate', prefix: '' },
              { value: 200, suffix: '+', label: 'Facilities Nationwide', prefix: '' },
              { value: 4, suffix: 'mL', label: 'Per Application', prefix: '' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-light text-navy-900">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={2}
                  />
                </div>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos Placeholder */}
          <motion.div
            className="mt-16 pt-12 border-t border-slate-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-300 mb-8">
              Trusted by Leading Healthcare Institutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                'Regional Medical Center',
                'University Hospital',
                'Surgical Associates',
                'National Health System',
                'Premier Surgery Group',
              ].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center h-12 px-6 rounded-lg border border-slate-100 bg-slate-50/50"
                >
                  <span className="text-xs font-medium text-slate-300 tracking-wide whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — WHO IT'S FOR (Segmentation)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Built For You
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Your Role. Your Benefits.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Surgeons Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/surgeons" className="group block">
                <div className="relative rounded-2xl bg-white border border-slate-100 p-10 md:p-12 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/5 hover:border-navy-100">
                  {/* Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-navy-50 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-950">
                      <Stethoscope size={24} className="text-gold-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-light text-navy-900 tracking-tight">
                      For Surgeons &
                      <br />
                      Clinical Teams
                    </h3>
                    <p className="mt-3 text-slate-500 leading-relaxed max-w-sm">
                      Optimize your surgical workflow. Eliminate disruptive eschar
                      hand-backs and maintain uninterrupted procedural focus.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 tracking-wide group-hover:text-gold-600 transition-colors">
                      Explore Clinical Benefits
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Procurement Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/procurement" className="group block">
                <div className="relative rounded-2xl bg-white border border-slate-100 p-10 md:p-12 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/5 hover:border-gold-100">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-50 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-950">
                      <Building2 size={24} className="text-gold-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-light text-navy-900 tracking-tight">
                      For Procurement &
                      <br />
                      Administration
                    </h3>
                    <p className="mt-3 text-slate-500 leading-relaxed max-w-sm">
                      Quantify the ROI. See how Lubrecision reduces per-case costs,
                      extends instrument life, and improves OR throughput.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 tracking-wide group-hover:text-gold-600 transition-colors">
                      See Cost Analysis
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — FINAL CTA (Urgency / Reciprocity)
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Gold gradient accent at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        <div className="relative bg-gradient-to-b from-white via-gold-50/30 to-white section-padding">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
                Get Started
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
                Experience the Difference.
              </h2>
              <p className="mt-2 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gradient-gold">
                Request Your Free Evaluation Kit.
              </p>
              <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
                See why surgical teams are switching to Lubrecision. We&apos;ll send you
                a complimentary evaluation kit so you can experience the
                performance firsthand.
              </p>
            </motion.div>

            {/* Email Capture */}
            <motion.form
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={(e) => {
                e.preventDefault();
                /* Placeholder — wire up to your backend */
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-white text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-400 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 whitespace-nowrap"
              >
                Request Kit
              </button>
            </motion.form>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[
                { icon: ShieldCheck, label: 'Sterile' },
                { icon: FlaskConical, label: 'Single-Use' },
                { icon: HeartPulse, label: 'Biocompatible' },
                { icon: CheckCircle2, label: 'AORN Compliant' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <badge.icon size={16} className="text-gold-500" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
