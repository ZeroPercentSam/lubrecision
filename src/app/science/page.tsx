'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
  AlertTriangle,
} from 'lucide-react';
import {
  FDA_STATUS_SHORT,
  FDA_STATUS_LINE,
  AORN_NOTE,
  STUDY_CLASS_DISCLAIMER,
} from '@/lib/compliance';

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
                Science &amp; Mechanism
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-tight text-navy-900 leading-[1.12]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              The Science Behind{' '}
              <span className="text-gradient font-normal">Lubecision</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-slate-500 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              Lubecision is grounded in the broader body of evidence on
              phospholipid surface chemistry, electrosurgical safety, and
              recognized perioperative guidelines. Explore the science behind the
              formulation.
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
                { label: 'Published Science', href: '#evidence' },
                { label: 'AORN Guidance', href: '#aorn' },
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
              Lubecision is formulated around naturally occurring
              phospholipids, which are intended to form a molecular-level
              barrier between electrosurgical instruments and tissue.
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
                  Intended molecular barrier
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
                  Hypothesized mechanism
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
                desc: 'Phospholipids are fatty acids found naturally in the cell membranes of the human body. The formulation is built around this phospholipid chemistry, which is being developed as the basis for the intended anti-stick coating.',
              },
              {
                icon: Layers,
                title: 'Molecular-Level Barrier',
                desc: 'Phospholipid molecules are intended to form an ultra-thin, uniform layer on the electrode surface. The proposed mechanism is that this coating limits carbonized tissue from bonding to the metal while preserving electrical conductivity.',
              },
              {
                icon: FlaskConical,
                title: 'Designed for Sustained Use',
                desc: 'The phospholipid barrier is designed to remain present through the course of a procedure — a consideration in robotic surgery (da Vinci®), where instrument cleaning can require removal from ports.',
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
                Science
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Our approach is grounded in published science on the anti-stick
              phospholipid product class. Lubecision itself has not yet been
              independently studied.
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
                    Baker JC, Ramadan HH
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
                    Citation
                  </span>
                  <span className="text-sm text-slate-600">
                    2012;91(1):E20-3 ·{' '}
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/22278874/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 underline underline-offset-2 hover:text-gold-700"
                    >
                      PubMed
                    </a>
                  </span>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-navy-950">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gold-400 mb-1.5">
                  Key Finding
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The authors reported that an anti-stick phospholipid solution
                  reduced instrument hand-backs for tip cleaning during
                  pediatric electrocautery adenoidectomy.
                </p>
              </div>

              <p className="mt-5 text-xs text-slate-500 leading-relaxed">
                {STUDY_CLASS_DISCLAIMER}
              </p>
            </motion.div>

            {/* Research areas we are pursuing */}
            <motion.div
              className="lg:col-span-2 relative rounded-2xl border border-slate-100 bg-white p-8 flex flex-col"
              variants={reveal}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-slate-400 text-[10px] font-bold tracking-wider uppercase mb-5 self-start">
                <CircleDot size={11} />
                Research Roadmap
              </div>

              <h3 className="text-base font-semibold text-navy-900 leading-snug">
                Research areas we are pursuing
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                As the program develops, we intend to investigate the following
                topics. These are planned areas of inquiry, not completed or
                published studies.
              </p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Anti-stick phospholipid behavior on electrosurgical instrument tips',
                  'Eschar accumulation and instrument cleaning workflow',
                  'Applications in robotically assisted laparoscopic procedures',
                  'Biocompatibility and materials characterization',
                ].map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="text-gold-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-600 leading-snug">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-400 leading-relaxed text-center">
                    Study details will be published here as work is completed
                    and peer-reviewed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 3.5 — ROBOTIC SURGERY EVIDENCE ═══════════ */}
      <section className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Robotic Surgery
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Considerations for{' '}
              <span className="text-gradient font-normal">da Vinci® Applications</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Robotic surgery introduces electrosurgical challenges where
              instrument access and cleaning are constrained. Lubecision is
              being developed with these robotic workflow considerations in
              mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
            {/* Safety Data Card */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-wider uppercase mb-5">
                <AlertTriangle size={11} />
                Clinical Context
              </div>
              <h3 className="text-lg font-semibold text-navy-900 leading-snug">
                Electrosurgical Energy in Robotic Surgery
              </h3>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                The published literature and FDA public reporting databases
                discuss electrosurgical energy events associated with robotic
                surgical instruments, including factors such as micro-cracks in
                instrument insulation and capacitive coupling. Eschar build-up
                on instrument surfaces is one factor discussed in this context.
              </p>
              <div className="mt-5 p-4 rounded-xl bg-gold-50/60 border border-gold-200/60">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gold-600 mb-1.5">
                  Proposed Mechanism
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lubecision is designed to limit eschar accumulation on
                  instrument tips. The hypothesis under investigation is whether
                  reducing eschar build-up could help maintain more consistent
                  instrument condition during robotic procedures.
                </p>
              </div>
            </motion.div>

            {/* Robotic Workflow Impact Card */}
            <motion.div
              className="rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-50/40 to-white p-8 md:p-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-[10px] font-bold tracking-wider uppercase mb-5">
                <BookOpen size={11} />
                Workflow Rationale
              </div>
              <h3 className="text-lg font-semibold text-navy-900 leading-snug">
                Robotic Surgery Workflow
              </h3>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Tissue sticking and cautery tip charring are among the factors
                that can necessitate instrument removal and cleaning during
                robotically assisted laparoscopic cases. An anti-stick
                phospholipid approach is intended to address these factors; its
                effect on robotic workflow is a question we plan to evaluate.
              </p>
              <div className="mt-5 p-4 rounded-xl bg-navy-950">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gold-400 mb-1.5">
                  Why It Could Matter
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  In robotic procedures, removing and cleaning instruments
                  interrupts the case. Reducing the need for tip cleaning is a
                  hypothesized workflow benefit that has not yet been
                  established for Lubecision.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Market Context */}
          <motion.div
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '2.7M+', label: 'da Vinci Procedures in 2024' },
                { stat: '17%', label: 'Annual Procedure Growth' },
                { stat: '7,500+', label: 'Systems Installed Globally' },
                { stat: '6+', label: 'Surgical Specialties Using Robotic Platforms' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
                >
                  <div className="text-2xl font-semibold text-navy-900">{item.stat}</div>
                  <p className="mt-1 text-[11px] text-slate-500 leading-tight">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Guideline Context
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-white">
              AORN Surgical-Energy{' '}
              <span className="text-gradient-gold font-normal">Guidance</span>
            </h2>
            <p className="mt-4 text-sm text-slate-400 max-w-2xl mx-auto">
              {AORN_NOTE}
            </p>
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
                    AORN Surgical-Energy-Safety Guidance
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Guidelines for Perioperative Practice
                  </p>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-light text-white leading-relaxed tracking-tight">
                AORN publishes guidelines for the safe use of surgical energy
                devices in the perioperative setting &mdash; the context in which an
                anti-stick solution like Lubecision is intended to be used.
              </p>

              <p className="mt-4 text-sm text-gold-400/80">
                {AORN_NOTE}
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
                AORN guidance is one of the references hospitals consult in
                perioperative decision-making. AORN publishes evidence-based
                guidance on surgical-energy safety and product categories;
                it is an advisory body and does not endorse or approve specific
                products, including Lubecision.
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
              How Lubecision Is Designed Around AORN Guidance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  check: 'Phospholipid-based anti-stick solution',
                  detail: 'The product category discussed in AORN surgical-energy-safety guidance',
                },
                {
                  check: 'Grounded in published science',
                  detail: 'Informed by published research on the anti-stick phospholipid product class',
                },
                {
                  check: 'Workflow-focused intent',
                  detail: 'Designed to address tip cleaning and instrument hand-backs',
                },
                {
                  check: 'Phospholipid-based formulation',
                  detail: 'Built around naturally occurring phospholipids; biocompatibility to be established in testing',
                },
                {
                  check: 'Intended sterile, single-use format',
                  detail: 'Designed for perioperative infection-prevention requirements',
                },
                {
                  check: FDA_STATUS_SHORT,
                  detail: FDA_STATUS_LINE,
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
              Lubecision is being developed to meet medical-device safety and
              regulatory requirements. Safety and biocompatibility
              characteristics will be established through testing and reflected
              in future labeling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: Ban,
                title: 'Phospholipid-Based',
                desc: 'The formulation is built around phospholipid chemistry rather than wax or harsh chemical agents. A full safety profile will be established through testing and reflected in labeling.',
              },
              {
                icon: Leaf,
                title: 'Allergenicity Under Study',
                desc: 'The formulation is being developed with allergenic potential in mind. Sensitivity and tolerability characteristics will be characterized during development.',
              },
              {
                icon: HeartPulse,
                title: 'Biocompatibility Focus',
                desc: 'Built around naturally occurring fatty acids (phospholipids) similar to compounds found in the body. Biocompatibility is intended to be demonstrated through standard medical-device testing.',
              },
              {
                icon: Sparkles,
                title: 'Intended Sterile',
                desc: 'Designed to be individually sealed and sterilized to meet perioperative infection-prevention requirements.',
              },
              {
                icon: BadgeCheck,
                title: FDA_STATUS_SHORT,
                desc: FDA_STATUS_LINE,
              },
              {
                icon: Fingerprint,
                title: 'Single-Use Design',
                desc: 'Designed for single-patient use to reduce cross-contamination risk, intended for disposal after each procedure per standard OR protocols.',
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
              <span className="text-gradient-gold font-normal">Science</span>?
            </h2>
            <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
              Request our science summary or get in touch to learn more about
              Lubecision&apos;s development.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-full border-2 border-navy-200 text-navy-900 hover:bg-navy-50 transition-all duration-300"
            >
              <Download size={15} />
              Request Science Summary
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Get in Touch
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
