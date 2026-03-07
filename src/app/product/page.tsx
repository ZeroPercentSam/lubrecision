'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Timer,
  FlaskConical,
  HeartPulse,
  Zap,
  Package,
  CheckCircle2,
  XCircle,
  Droplets,
  ScanLine,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

/* ─── Shared animation preset ─── */
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
   PRODUCT PAGE
   ════════════════════════════════════════ */
export default function ProductPage() {
  return (
    <>
      {/* ═══════════ SECTION 1 — HERO ═══════════ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-white overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.045) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
            <span className="text-navy-900 font-medium">Product</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — Copy */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-gold-200 bg-gold-50/60"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <Sparkles size={13} className="text-gold-500" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-700">
                  Next-Generation Formula
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-tight text-navy-900 leading-[1.12]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
              >
                Lubrecision
                <br />
                <span className="text-gradient font-normal">
                  Anti-Stick Solution
                </span>
              </motion.h1>

              <motion.p
                className="mt-5 text-lg text-slate-500 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
              >
                Precision-engineered phospholipid formula designed to eliminate
                eschar buildup on electrosurgical instrument tips, optimizing
                every procedure from first incision to close.
              </motion.p>

              {/* Spec pills */}
              <motion.div
                className="flex flex-wrap gap-2.5 mt-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.38 }}
              >
                {['4mL Sterile', 'Single-Use', 'Biocompatible', 'Ready-to-Apply'].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="px-4 py-1.5 text-xs font-medium tracking-wide rounded-full bg-navy-950 text-gold-400"
                    >
                      {pill}
                    </span>
                  ),
                )}
              </motion.div>

              {/* CTA */}
              <motion.div
                className="mt-10 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.46 }}
              >
                <Link
                  href="/contact?type=sample"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
                >
                  Request a Sample
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-slate-200 text-navy-900 hover:border-navy-200 hover:bg-navy-50/40 transition-all duration-300"
                >
                  How It Works
                </Link>
              </motion.div>
            </div>

            {/* Right — Product Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                {/* Soft glow behind */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-navy-50 via-slate-50 to-gold-50/50" />

                {/* Main card */}
                <div className="absolute inset-8 rounded-2xl bg-white shadow-2xl shadow-navy-900/[0.06] border border-slate-100/80 flex flex-col items-center justify-center p-8">
                  {/* Bottle */}
                  <div className="relative">
                    <div className="w-32 h-48 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-950 mx-auto relative shadow-lg shadow-navy-900/20">
                      {/* Cap */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 rounded-t-xl bg-navy-700 border-b border-navy-600" />
                      {/* Label */}
                      <div className="absolute top-12 left-3 right-3 bottom-6 rounded-lg bg-gradient-to-b from-white/[0.09] to-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center gap-2 p-3">
                        <div className="w-6 h-px bg-gold-500/60" />
                        <span className="text-[9px] tracking-[0.25em] text-gold-400 font-semibold uppercase text-center leading-tight">
                          Lubrecision
                        </span>
                        <span className="text-[6.5px] tracking-[0.15em] text-white/40 uppercase">
                          Anti-Stick Solution
                        </span>
                        <div className="w-6 h-px bg-gold-500/60" />
                        <span className="text-[7px] text-white/30 mt-1">
                          4 mL &middot; Sterile
                        </span>
                      </div>
                    </div>

                    {/* Foam pad */}
                    <div className="mt-5 w-36 h-10 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200/80 mx-auto flex items-center justify-center shadow-sm">
                      <span className="text-[8px] text-slate-400 tracking-wider uppercase font-medium">
                        Sterile Application Pad
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-xs font-semibold text-navy-900 tracking-wider uppercase">
                      Complete Kit
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Solution + applicator pad &middot; Single patient use
                    </p>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <motion.div
                  className="absolute top-2 right-0 bg-white rounded-xl shadow-lg shadow-slate-200/50 px-4 py-2.5 border border-slate-100"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-[10px] font-bold text-navy-900 tracking-wider uppercase">
                    20 / Box
                  </p>
                  <p className="text-[8px] text-slate-400 mt-0.5">
                    Individually packaged
                  </p>
                </motion.div>

                {/* Floating badge — bottom left */}
                <motion.div
                  className="absolute bottom-4 left-0 bg-navy-950 rounded-xl shadow-lg px-4 py-2.5"
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                >
                  <p className="text-[10px] font-bold text-gold-400 tracking-wider uppercase">
                    AORN 3.11.1
                  </p>
                  <p className="text-[8px] text-slate-400 mt-0.5">
                    Guideline compliant
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — HOW IT WORKS ═══════════ */}
      <section
        id="how-it-works"
        className="relative bg-slate-50 section-padding overflow-hidden"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Simple Application
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Three Steps.{' '}
              <span className="text-gradient font-normal">Zero Complexity.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Lubrecision integrates seamlessly into any electrosurgical workflow
              — no special training, no setup time, no disruption.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative mt-16">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px">
              <div className="w-full h-full bg-gradient-to-r from-navy-200 via-gold-300 to-navy-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {[
                {
                  num: '01',
                  title: 'Apply',
                  desc: 'Dip the electrosurgical instrument tip into the Lubrecision solution using the sterile applicator pad. Takes under 5 seconds.',
                  icon: Droplets,
                },
                {
                  num: '02',
                  title: 'Protect',
                  desc: 'The biocompatible phospholipid formula creates an invisible, non-stick barrier on the electrode surface — preventing tissue adhesion at the molecular level.',
                  icon: ShieldCheck,
                },
                {
                  num: '03',
                  title: 'Perform',
                  desc: 'Proceed with your electrosurgical procedure. Eschar buildup is dramatically reduced, maintaining consistent current flow and uninterrupted surgical focus.',
                  icon: Zap,
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  className="relative text-center"
                  variants={reveal}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {/* Number orb */}
                  <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-white shadow-lg shadow-slate-200/40 border border-slate-100" />
                    <div className="absolute inset-3 rounded-full bg-navy-950 flex items-center justify-center">
                      <step.icon size={28} className="text-gold-400" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-bold text-navy-950">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — KEY BENEFITS ═══════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Benefits
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Engineered for{' '}
              <span className="text-gradient font-normal">
                Clinical Excellence
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: ShieldCheck,
                title: 'Reduces Eschar Buildup',
                desc: 'Our advanced phospholipid formulation creates a molecular barrier that dramatically reduces carbonized tissue accumulation on electrode tips throughout the procedure.',
              },
              {
                icon: Timer,
                title: 'Optimizes Procedure Time',
                desc: 'By virtually eliminating hand-backs for tip cleaning, Lubrecision helps maintain uninterrupted surgical flow — potentially saving 10–40 minutes of OR time per case.',
              },
              {
                icon: FlaskConical,
                title: 'AORN Guideline Compliant',
                desc: 'Aligns with AORN Guideline 3.11.1, which states that "high-quality evidence supports the use of an anti-stick phospholipid solution to reduce surgical time."',
              },
              {
                icon: HeartPulse,
                title: 'Biocompatible Formula',
                desc: 'Made from a naturally occurring fatty acid (biocompatible phospholipid) similar to compounds the human body produces. Non-toxic and non-allergenic.',
              },
              {
                icon: Zap,
                title: 'da Vinci® & Universal Compatibility',
                desc: 'Validated for robotic (da Vinci®), monopolar, bipolar, and laparoscopic instruments. Especially critical for robotic surgery where instruments lack anti-stick coatings and cleaning pauses require removing instruments from ports.',
              },
              {
                icon: Package,
                title: 'Sterile Single-Use',
                desc: 'Each kit contains a ready-to-use 4mL solution bottle and sterile foam applicator pad. Individually packaged for single-patient use — no preparation needed.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="group relative rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-xl hover:shadow-navy-900/[0.04] hover:border-slate-200 transition-all duration-500"
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center mb-5">
                  <card.icon size={20} className="text-gold-400" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — SPECIFICATIONS ═══════════ */}
      <section id="specifications" className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Technical Details
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Product Specifications
            </h2>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            {[
              { label: 'Product Name', value: 'Lubrecision Anti-Stick Solution' },
              {
                label: 'Format',
                value: 'Sterile solution bottle with foam applicator pad',
              },
              { label: 'Volume', value: '4 mL per unit' },
              { label: 'Packaging', value: '20 units per box · Individually sealed' },
              { label: 'Sterility', value: 'Sterile — single-patient use' },
              { label: 'Shelf Life', value: 'See product labeling' },
              { label: 'Storage', value: 'Store at room temperature (15–30 °C)' },
              {
                label: 'Composition',
                value:
                  'Biocompatible phospholipid (fatty acid derivative) · Non-toxic · Non-allergenic',
              },
              {
                label: 'Compatibility',
                value:
                  'All standard electrosurgical devices — monopolar, bipolar, laparoscopic, and robotic systems including da Vinci® (especially critical for uncoated robotic instrument tips)',
              },
              {
                label: 'Regulatory',
                value: 'FDA registered · Compliant with AORN Guideline 3.11.1',
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[140px,1fr] sm:grid-cols-[200px,1fr] gap-4 px-6 sm:px-8 py-4 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                } ${i < 9 ? 'border-b border-slate-100' : ''}`}
              >
                <span className="text-xs font-semibold tracking-wider uppercase text-navy-900">
                  {row.label}
                </span>
                <span className="text-sm text-slate-600">{row.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Download links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {['Instructions for Use', 'Safety Data Sheet', 'Product Literature'].map(
              (doc) => (
                <button
                  key={doc}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wide rounded-full border border-slate-200 text-slate-500 hover:border-navy-200 hover:text-navy-700 transition-all duration-200"
                >
                  <ScanLine size={13} />
                  {doc}
                </button>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 4.5 — ROBOTIC SURGERY ═══════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Robotic Surgery Ready
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Optimized for{' '}
              <span className="text-gradient font-normal">da Vinci® Systems</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              With over 2.7 million da Vinci procedures annually, Lubrecision
              addresses the unique challenges of robotic electrosurgery where
              instruments cannot be easily cleaned mid-procedure.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-navy-100 bg-navy-950 p-8 md:p-12 overflow-hidden relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Pre-Dock Application',
                  desc: 'Apply Lubrecision to all robotic instrument tips before docking. The phospholipid barrier protects throughout the entire case — no interruptions needed.',
                },
                {
                  title: 'Instrument Preservation',
                  desc: 'da Vinci instruments cost $600–$3,500 per procedure. By reducing eschar buildup and abrasive cleaning, Lubrecision helps extend instrument life and protect your investment.',
                },
                {
                  title: 'Uninterrupted Workflow',
                  desc: 'Robotic surgeons operate from the console, making instrument cleaning especially disruptive. Lubrecision eliminates these pauses, maintaining continuous surgical flow.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                >
                  <h3 className="text-sm font-semibold text-gold-400 tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="relative mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                'da Vinci Si®',
                'da Vinci Xi®',
                'da Vinci SP®',
                'Ion®',
                'All EndoWrist® Instruments',
              ].map((system) => (
                <span
                  key={system}
                  className="px-4 py-1.5 text-xs font-medium tracking-wide rounded-full border border-white/10 bg-white/[0.04] text-slate-300"
                >
                  {system}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — VS COMPETITOR ═══════════ */}
      <section className="relative bg-navy-950 section-padding overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Why Switch
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-white">
              Why Teams Are Switching to{' '}
              <span className="text-gradient-gold font-normal">Lubrecision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy Card */}
            <motion.div
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 md:p-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-red-400/70 mb-6">
                Legacy Solutions
              </h3>
              <ul className="space-y-4">
                {[
                  'Part of a massive conglomerate — not a focused priority',
                  'Multiple confusing SKUs and product versions',
                  'Generic corporate branding and support',
                  'Basic formulation with limited clinical data transparency',
                  'Buried in a catalog of 10,000+ products',
                  'Slow corporate procurement process',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle
                      size={16}
                      className="text-red-400/60 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-400 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Lubrecision Card */}
            <motion.div
              className="rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-8 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />

              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-6">
                Lubrecision
              </h3>
              <ul className="space-y-4">
                {[
                  '100% focused on electrosurgical anti-stick performance',
                  'One product, perfected — no confusing product lines',
                  'Dedicated clinical support and responsive partnership',
                  'Advanced phospholipid formulation with published evidence',
                  'Purpose-built brand with deep category expertise',
                  'Streamlined ordering and rapid fulfillment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-gold-400 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-gold-200/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — CTA ═══════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              Ready to See the{' '}
              <span className="text-gradient-gold font-normal">Difference</span>?
            </h2>
            <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
              Request a complimentary evaluation kit or speak with our clinical
              team about integrating Lubrecision into your OR workflow.
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
              href="/contact?type=sample"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Request a Free Sample
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-full border border-navy-200 text-navy-900 hover:bg-navy-50 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
