'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { FDA_STATUS_SHORT, FDA_STATUS_LINE } from '@/lib/compliance';
import {
  Clock,
  AlertTriangle,
  Wrench,
  ShieldCheck,
  Timer,
  FlaskConical,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Building2,
  ChevronRight,
} from 'lucide-react';

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

/* ════════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════════ */
export function HomeContent() {
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
          className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 pt-20 sm:pt-8 text-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.15]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Rethinking{' '}
            <span className="text-gradient-gold font-normal">
              Eschar
            </span>{' '}
            on Surgical Tips.
            <br />
            <span className="text-white/90">A New Approach in Development.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Lubecision is a phospholipid anti-stick solution in development,
            designed to address eschar buildup on electrosurgical and da Vinci&reg;
            robotic instrument tips.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Request Information
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
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mt-14 mb-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[FDA_STATUS_SHORT, 'AORN-Informed', 'Sterile Single-Use'].map(
              (badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-xs tracking-wider text-white font-medium uppercase"
                >
                  <ShieldCheck size={14} className="text-gold-400" />
                  {badge}
                </div>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-0" />
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
              The Challenge of{' '}
              <span className="text-gradient font-normal">Eschar</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Electrosurgical procedures share a common challenge: eschar —
              charred tissue — can accumulate on electrode tips as they cut and
              coagulate. Managing that buildup is a familiar part of perioperative
              workflow.
            </p>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              {
                icon: Clock,
                stat: 'OR Time',
                label: 'Workflow Interruptions',
                desc: 'Pausing to clean or swap eschar-laden tips can interrupt surgical flow.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
              },
              {
                icon: AlertTriangle,
                stat: 'Impedance',
                label: 'Electrosurgical Performance',
                desc: 'Charred tissue on a tip can raise impedance, affecting consistent energy delivery.',
                color: 'text-orange-500',
                bg: 'bg-orange-50',
                border: 'border-orange-100',
              },
              {
                icon: Wrench,
                stat: 'Tip Wear',
                label: 'Instrument Care',
                desc: 'Repeated scrubbing and charring is associated with wear on instrument tips.',
                color: 'text-slate-600',
                bg: 'bg-slate-50',
                border: 'border-slate-200',
              },
              {
                icon: ShieldCheck,
                stat: 'Anti-Stick',
                label: 'The Opportunity',
                desc: 'An anti-stick approach aims to keep tips cleaner through a procedure.',
                color: 'text-navy-700',
                bg: 'bg-navy-50',
                border: 'border-navy-100',
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
                A Phospholipid
                <br />
                <span className="text-gradient font-normal">
                  Anti-Stick Approach
                </span>
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Lubecision is built around a phospholipid formulation — a class of
                compounds related to those the body produces naturally. The
                underlying science suggests phospholipids can form a barrier layer
                on instrument tips; Lubecision is designed to apply that approach
                to electrosurgical and robotic instruments.
              </p>

              {/* Benefits */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Designed for Eschar',
                    desc: 'Intended to help reduce tissue buildup on instrument tips during procedures.',
                  },
                  {
                    icon: Timer,
                    title: 'Built for OR Workflow',
                    desc: 'Designed so teams can keep tips cleaner with fewer interruptions.',
                  },
                  {
                    icon: FlaskConical,
                    title: 'AORN-Informed',
                    desc: 'Developed with AORN surgical-energy-safety guidance in mind. AORN does not endorse or approve specific products.',
                  },
                  {
                    icon: HeartPulse,
                    title: 'Single-Use Format',
                    desc: 'Intended as a sterile, single-use, ready-to-apply phospholipid solution.',
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
                          Lubecision
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
                      Single-use · Ready to apply · Phospholipid-based
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
                    Phospholipid-based
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3.5 — ROBOTIC SURGERY
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Robotic Surgery
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              Designed for{' '}
              <span className="text-gradient font-normal">da Vinci&reg; Instruments</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Robotic-assisted surgery is a large and growing part of the operating
              room. Lubecision is designed for use with da Vinci&reg; robotic
              instruments, applying its anti-stick approach to the same eschar
              challenge surgeons manage in electrosurgery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-14">
            {/* Left — The Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl border border-navy-100 bg-navy-950 p-8 md:p-10">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-5">
                  Why It Matters for Robotics
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Surgeon Is at the Console',
                      desc: 'In robotic surgery the surgeon operates from the console rather than at the bedside. A cleaning pause typically means removing and reinserting instruments, which interrupts workflow.',
                    },
                    {
                      title: 'Eschar Affects Robotic Tips Too',
                      desc: 'As in electrosurgery, tissue can adhere to instrument jaws and cautery tips through a procedure. Lubecision is designed for use with da Vinci® robotic instruments to help address this.',
                    },
                    {
                      title: 'Instrument Care Matters',
                      desc: 'Robotic instruments are a significant part of a facility\'s investment. An anti-stick approach is intended to help keep tips cleaner during use.',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Stats + Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Stats Grid — neutral market context */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '2.7M+', label: 'da Vinci® Procedures in 2024' },
                  { stat: '17%', label: 'Annual Growth Rate' },
                  { stat: '7,500+', label: 'Systems Installed Worldwide' },
                  { stat: '6+', label: 'Surgical Specialties' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  >
                    <div className="text-2xl font-semibold text-navy-900">{item.stat}</div>
                    <p className="mt-1 text-[11px] text-slate-500 leading-tight">{item.label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                da Vinci® installed base and procedure-growth figures per Intuitive
                Surgical 2024 annual reporting. Provided as general market context.
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/surgeons"
              className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors font-medium tracking-wide"
            >
              Learn more about robotic surgery applications
              <ArrowRight size={14} />
            </Link>
          </motion.div>
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

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              The Approach
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              The Eschar Challenge, and{' '}
              <span className="text-gradient-gold font-normal">Our Approach</span>
            </h2>
          </motion.div>

          {/* Side-by-side cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* The Challenge Card */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <AlertTriangle size={20} className="text-slate-300" />
                <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                  The Eschar Challenge
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  'Charred tissue can accumulate on electrosurgical and robotic instrument tips during a procedure.',
                  'Buildup can raise impedance, which may affect consistent energy delivery.',
                  'Keeping tips clean can require pauses that interrupt surgical workflow.',
                  'Repeated cleaning and charring is associated with wear on instrument tips.',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400/60 shrink-0" />
                    <span className="text-sm text-slate-300/90">{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Approach Card */}
            <motion.div
              className="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <FlaskConical size={20} className="text-gold-400" />
                <h3 className="text-sm font-semibold tracking-wider text-gold-400 uppercase">
                  The Lubecision Approach
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  'A phospholipid solution designed to form a barrier layer on instrument tips.',
                  'Intended to help reduce tissue buildup so tips stay cleaner through a procedure.',
                  'Designed for use with electrosurgical and da Vinci® robotic instruments.',
                  'Intended as a sterile, single-use, ready-to-apply format.',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400/60 shrink-0" />
                    <span className="text-sm text-gold-200/90">{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Investigational status line */}
          <motion.p
            className="text-center mt-10 text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {FDA_STATUS_LINE}
          </motion.p>

          {/* Bottom nudge */}
          <motion.div
            className="text-center mt-8"
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
                  Lubecision is being developed with AORN surgical-energy-safety
                  guidance in mind. AORN does not endorse or approve specific
                  products.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-px h-8 bg-gold-500/40" />
                  <div>
                    <p className="text-sm font-semibold text-gold-400 tracking-wide">
                      AORN Guidelines for Perioperative Practice
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Surgical Energy Safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row — neutral market & product context */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { display: '6,000+', label: 'da Vinci® Systems Worldwide' },
              { display: '17%', label: 'Annual Robotic-Surgery Growth' },
              { display: '4mL', label: 'Per Application' },
              { display: '1', label: 'Singular Focus' },
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
                  {stat.display}
                </div>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-slate-400">
            da Vinci® installed base and procedure-growth figures per Intuitive
            Surgical 2024 annual reporting. Provided as general market context.
          </p>
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
              Your Role. Your Perspective.
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
                      Learn how Lubecision is designed to address eschar buildup
                      and support uninterrupted procedural focus.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 tracking-wide group-hover:text-gold-600 transition-colors">
                      Explore the Clinical Approach
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
                      Understand the product format, intended single-use model, and
                      how Lubecision is positioned for perioperative supply.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 tracking-wide group-hover:text-gold-600 transition-colors">
                      Learn More
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
                Stay Informed
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
                Follow Our Progress.
              </h2>
              <p className="mt-2 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gradient-gold">
                Request Information.
              </p>
              <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
                Lubecision is in development. Share your email and we&apos;ll keep
                you informed about our progress and how to get in touch.
              </p>
            </motion.div>

            {/* Email Capture */}
            <motion.div
              className="mt-10 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form
                className="flex flex-col sm:flex-row gap-3"
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
                  Request Information
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-400">
                By submitting, you agree to our{' '}
                <a href="/legal/privacy" className="underline hover:text-gold-600 transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[
                { icon: ShieldCheck, label: 'Sterile Single-Use' },
                { icon: FlaskConical, label: 'Phospholipid-Based' },
                { icon: HeartPulse, label: 'For Electrosurgical & Robotic Tips' },
                { icon: CheckCircle2, label: 'AORN-Informed' },
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
