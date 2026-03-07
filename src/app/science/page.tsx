'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  HeartPulse,
  Atom,
  Microscope,
  BookOpen,
  Award,
  CheckCircle2,
  ChevronRight,
  Ban,
  Leaf,
  Fingerprint,
  Sparkles,
  CircleDot,
  Layers,
  Syringe,
  BadgeCheck,
  Download,
} from 'lucide-react';

/* ─── Shared animation presets ─── */
const ease = [0.25, 0.1, 0.25, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

/* ─── Animated Progress Bar Component ─── */
function AnimatedBar({
  label,
  value,
  suffix,
  delay = 0,
}: {
  label: string;
  value: number;
  suffix: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Circular progress */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          {/* Track */}
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          {/* Progress */}
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 52}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
            animate={
              isInView
                ? {
                    strokeDashoffset:
                      2 * Math.PI * 52 * (1 - value / 100),
                  }
                : {}
            }
            transition={{ duration: 1.4, delay: delay + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C49634" />
              <stop offset="100%" stopColor="#D4A843" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-3xl font-light text-white tracking-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
          >
            {suffix}
          </motion.span>
        </div>
      </div>
      <h4 className="text-sm font-semibold text-white tracking-wide">
        {label}
      </h4>
    </motion.div>
  );
}

/* ════════════════════════════════════════
   SCIENCE & TECHNOLOGY PAGE
   ════════════════════════════════════════ */
export default function SciencePage() {
  return (
    <>
      {/* ═══════════ SECTION 1 — PAGE HERO ═══════════ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-white overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.045) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="hover:text-navy-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-navy-900 font-medium">Science</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-gold-200 bg-gold-50/60"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Microscope size={13} className="text-gold-500" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-700">
                Evidence-Based Science
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-tight text-navy-900 leading-[1.12]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              The Science Behind{' '}
              <span className="text-gradient font-normal">Lubrecision</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-slate-500 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              Every claim we make is grounded in published clinical research,
              recognized guideline compliance, and rigorous performance testing.
              Explore the evidence that makes Lubrecision the trusted choice for
              surgical teams worldwide.
            </motion.p>

            {/* Quick-nav pills */}
            <motion.div
              className="flex flex-wrap gap-2.5 mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.38 }}
            >
              {[
                { label: 'Mechanism', href: '#mechanism' },
                { label: 'Clinical Evidence', href: '#evidence' },
                { label: 'AORN Guidelines', href: '#aorn' },
                { label: 'Performance Data', href: '#data' },
                { label: 'Safety Profile', href: '#safety' },
              ].map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className="px-4 py-1.5 text-xs font-medium tracking-wide rounded-full bg-navy-950 text-gold-400 hover:bg-navy-800 transition-colors duration-200"
                >
                  {nav.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — THE MECHANISM ═══════════ */}
      <section id="mechanism" className="relative bg-slate-50 section-padding overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              The Science
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              How Phospholipid Technology{' '}
              <span className="text-gradient font-normal">Works</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Lubrecision harnesses the power of naturally occurring
              phospholipids to create a molecular-level barrier between
              electrosurgical instruments and tissue.
            </p>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div
            className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-center">
              {/* Step 1: Electrode */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-navy-950 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Syringe size={32} className="text-slate-300" />
                </div>
                <p className="text-xs font-semibold text-navy-900 tracking-wide uppercase">
                  Electrode Tip
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Bare metal surface
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-slate-200 via-gold-400 to-slate-200 relative">
                  <ArrowRight
                    size={14}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500"
                  />
                </div>
              </div>

              {/* Step 2: Coating */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-50 border-2 border-gold-300 flex items-center justify-center mx-auto mb-3">
                  <Layers size={32} className="text-gold-600" />
                </div>
                <p className="text-xs font-semibold text-navy-900 tracking-wide uppercase">
                  Phospholipid Coating
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Molecular barrier applied
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-slate-200 via-gold-400 to-slate-200 relative">
                  <ArrowRight
                    size={14}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500"
                  />
                </div>
              </div>

              {/* Step 3: Result */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck size={32} className="text-emerald-600" />
                </div>
                <p className="text-xs font-semibold text-navy-900 tracking-wide uppercase">
                  Tissue Separation
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Adhesion prevented
                </p>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="flex md:hidden flex-col items-center gap-2 -mt-2 -mb-2">
              {/* Arrows already implied by card ordering on mobile */}
            </div>
          </motion.div>

          {/* 3 Key Scientific Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: Atom,
                title: 'Naturally Occurring Compound',
                desc: 'Phospholipids are fatty acids found naturally in every cell membrane of the human body. Our formula leverages this biocompatibility to create a safe, effective coating that the body recognizes as non-foreign.',
              },
              {
                icon: Layers,
                title: 'Molecular-Level Barrier',
                desc: 'The phospholipid molecules self-assemble into an ultra-thin, uniform layer on the electrode surface. This nanoscale coating prevents carbonized tissue from bonding to the metal without affecting electrical conductivity.',
              },
              {
                icon: FlaskConical,
                title: 'Sustained Protection',
                desc: 'Unlike saline or wax-based alternatives, the phospholipid barrier maintains its protective properties throughout the procedure, reducing the need for repeated cleaning and instrument hand-backs.',
              },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                className="group relative rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-xl hover:shadow-navy-900/[0.04] hover:border-slate-200 transition-all duration-500"
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center mb-5">
                  <point.icon size={20} className="text-gold-400" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — CLINICAL EVIDENCE ═══════════ */}
      <section id="evidence" className="relative bg-white section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Clinical Research
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Published{' '}
              <span className="text-gradient font-normal">
                Clinical Evidence
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Our efficacy claims are backed by peer-reviewed, published
              research in respected medical journals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {/* Primary study card */}
            <motion.div
              className="lg:col-span-1 relative rounded-2xl border-2 border-gold-200 bg-gradient-to-b from-gold-50/40 to-white p-8 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-[10px] font-bold tracking-wider uppercase mb-5">
                <BookOpen size={11} />
                Published Study
              </div>

              <h3 className="text-lg font-semibold text-navy-900 leading-snug">
                Anti-Stick Phospholipid Reduces Handbacks in Pediatric
                Electrocautery Adenoidectomy
              </h3>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 shrink-0 pt-0.5 w-16">
                    Authors
                  </span>
                  <span className="text-sm text-slate-600">
                    Jeffrey C. Baker, MD
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 shrink-0 pt-0.5 w-16">
                    Journal
                  </span>
                  <span className="text-sm text-slate-600">
                    Ear, Nose &amp; Throat Journal
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 shrink-0 pt-0.5 w-16">
                    Year
                  </span>
                  <span className="text-sm text-slate-600">2012</span>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-navy-950">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gold-400 mb-1.5">
                  Key Finding
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The anti-stick phospholipid solution significantly reduced
                  instrument hand-backs for tip cleaning during pediatric
                  electrocautery adenoidectomy, supporting improved surgical
                  workflow.
                </p>
              </div>
            </motion.div>

            {/* Coming soon studies */}
            {[
              {
                title:
                  'Comparative Efficacy of Anti-Stick Coatings in Electrosurgical Procedures',
                journal: 'Journal of Surgical Research',
                status: 'Manuscript in Preparation',
              },
              {
                title:
                  'Impact of Phospholipid Anti-Stick Solution on Operative Time in General Surgery',
                journal: 'American Journal of Surgery',
                status: 'Study Underway',
              },
            ].map((study, i) => (
              <motion.div
                key={study.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-8 flex flex-col"
                variants={reveal}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-slate-400 text-[10px] font-bold tracking-wider uppercase mb-5 self-start">
                  <CircleDot size={11} />
                  {study.status}
                </div>

                <h3 className="text-base font-semibold text-navy-900 leading-snug">
                  {study.title}
                </h3>

                <div className="mt-4 flex items-start gap-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 shrink-0 pt-0.5 w-16">
                    Target
                  </span>
                  <span className="text-sm text-slate-500 italic">
                    {study.journal}
                  </span>
                </div>

                <div className="mt-auto pt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-400 leading-relaxed text-center">
                      Additional study details will be published here upon
                      completion and peer review.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — AORN GUIDELINES ═══════════ */}
      <section id="aorn" className="relative bg-navy-950 section-padding overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Guideline Compliance
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-white">
              AORN Guideline{' '}
              <span className="text-gradient-gold font-normal">Compliance</span>
            </h2>
          </motion.div>

          {/* Featured quote block */}
          <motion.div
            className="mt-14 relative rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-500/5 to-transparent rounded-tr-full" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center">
                  <Award size={20} className="text-navy-950" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider uppercase text-gold-400">
                    AORN Guideline 3.11.1
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Guidelines for Perioperative Practice
                  </p>
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed tracking-tight">
                &ldquo;High quality evidence supports the use of an anti-stick
                phospholipid solution to reduce surgical time.&rdquo;
              </blockquote>

              <p className="mt-4 text-sm text-gold-400/80">
                &mdash; Association of periOperative Registered Nurses (AORN)
              </p>
            </div>
          </motion.div>

          {/* Two-column: What is AORN + Why it matters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <motion.div
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
                What is AORN?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                The Association of periOperative Registered Nurses (AORN) is the
                leading professional organization for perioperative nurses. Their
                Guidelines for Perioperative Practice represent the gold standard
                for evidence-based recommendations in the operating room,
                influencing hospital purchasing decisions and clinical protocols
                nationwide.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8"
              variants={reveal}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
                Why This Matters
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AORN guideline compliance is a critical factor in hospital
                procurement decisions. When AORN recommends a specific solution
                based on high-quality evidence, it gives surgical teams and
                purchasing committees the clinical justification to adopt
                products that demonstrably improve outcomes and efficiency.
              </p>
            </motion.div>
          </div>

          {/* Alignment Checklist */}
          <motion.div
            className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">
              How Lubrecision Aligns with AORN Guidelines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  check: 'Phospholipid-based anti-stick solution',
                  detail: 'Matches the specific solution type referenced in AORN 3.11.1',
                },
                {
                  check: 'Demonstrated surgical time reduction',
                  detail: 'Published evidence supporting reduced hand-backs and delays',
                },
                {
                  check: 'High-quality evidence base',
                  detail: 'Peer-reviewed studies in respected medical journals',
                },
                {
                  check: 'Biocompatible formulation',
                  detail: 'Naturally occurring phospholipid, non-toxic, non-allergenic',
                },
                {
                  check: 'Sterile, single-use format',
                  detail: 'Meets infection prevention standards for perioperative settings',
                },
                {
                  check: 'FDA registered product',
                  detail: 'Regulatory compliance for US healthcare facilities',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.check}
                  className="flex items-start gap-3"
                  variants={reveal}
                  custom={i * 0.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CheckCircle2
                    size={16}
                    className="text-gold-400 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gold-200/90">
                      {item.check}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — DATA VISUALIZATIONS ═══════════ */}
      <section id="data" className="relative bg-navy-900 section-padding overflow-hidden">
        {/* Radial gradient bg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.04)_0%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Results That Matter
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-white">
              Performance{' '}
              <span className="text-gradient-gold font-normal">Data</span>
            </h2>
            <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto">
              Comparative testing demonstrates significant improvements across
              key surgical performance metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16">
            <AnimatedBar
              label="Eschar Reduction"
              value={70}
              suffix="Up to 70%"
              delay={0}
            />
            <AnimatedBar
              label="Tissue Sticking Reduction"
              value={70}
              suffix="Up to 70%"
              delay={0.15}
            />
            <AnimatedBar
              label="Cutting Force Reduction"
              value={71}
              suffix="Up to 71%"
              delay={0.3}
            />
          </div>

          <motion.p
            className="mt-12 text-center text-xs text-slate-500 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Based on comparative testing. Individual results may vary. Full data
            and methodology available upon request.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — SAFETY PROFILE ═══════════ */}
      <section id="safety" className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Safety First
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Safety &amp;{' '}
              <span className="text-gradient font-normal">
                Biocompatibility
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Lubrecision is engineered to meet the highest standards of patient
              safety and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: Ban,
                title: 'Non-Toxic',
                desc: 'The phospholipid formula contains no harmful chemicals, toxins, or irritants. Safe for incidental tissue contact during surgical procedures.',
              },
              {
                icon: Leaf,
                title: 'Non-Allergenic',
                desc: 'Formulated to minimize allergenic potential. Suitable for use in patients with common sensitivities and allergy concerns.',
              },
              {
                icon: HeartPulse,
                title: 'Biocompatible',
                desc: 'Made from naturally occurring fatty acids (phospholipids) similar to compounds the human body produces. Recognized as non-foreign by biological systems.',
              },
              {
                icon: Sparkles,
                title: 'Sterile',
                desc: 'Each unit is individually sealed and sterilized to meet stringent perioperative infection prevention standards.',
              },
              {
                icon: BadgeCheck,
                title: 'FDA Registered',
                desc: 'Registered with the U.S. Food and Drug Administration. Meets federal regulatory requirements for sale and use in healthcare settings.',
              },
              {
                icon: Fingerprint,
                title: 'Single-Use',
                desc: 'Designed for single-patient use to eliminate cross-contamination risk. Disposed of after each procedure per standard OR protocols.',
              },
            ].map((attr, i) => (
              <motion.div
                key={attr.title}
                className="group relative rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-xl hover:shadow-navy-900/[0.04] hover:border-slate-200 transition-all duration-500"
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center mb-5">
                  <attr.icon size={20} className="text-gold-400" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 tracking-tight">
                  {attr.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                  {attr.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 7 — CTA ═══════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              Want to Review the{' '}
              <span className="text-gradient-gold font-normal">Evidence</span>?
            </h2>
            <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
              Download our clinical summary or request a complimentary sample to
              experience the science firsthand.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <button className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-full border-2 border-navy-200 text-navy-900 hover:bg-navy-50 transition-all duration-300">
              <Download size={15} />
              Download Clinical Summary
            </button>
            <Link
              href="/contact?type=sample"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Request a Sample
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
