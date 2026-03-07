'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  PauseCircle,
  Activity,
  Clock,
  HandMetal,
  Zap,
  ThermometerSun,
  Wrench,
  RotateCcw,
  ShieldCheck,
  Star,
  Quote,
  Stethoscope,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';

/* ─── Shared animation preset ─── */
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

/* ════════════════════════════════════════════════════
   FOR SURGEONS PAGE
   ════════════════════════════════════════════════════ */
export default function SurgeonsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden animated-gradient">
        {/* Subtle hex grid overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hex-surgeons"
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
            <rect width="100%" height="100%" fill="url(#hex-surgeons)" />
          </svg>

          {/* Floating orbs */}
          <motion.div
            className="absolute top-[20%] right-[12%] w-64 h-64 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
            }}
            animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[8%] w-80 h-80 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(42,68,148,0.1) 0%, transparent 70%)',
            }}
            animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center py-32 md:py-40">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center justify-center gap-1.5 text-xs text-white/50 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white font-medium">For Surgeons</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="text-xs font-medium tracking-widest text-gold-400 uppercase">
              For Surgical Professionals
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Engineered for Surgeons
            <br />
            <span className="text-gradient-gold font-normal">
              Who Demand Precision
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Lubrecision eliminates eschar buildup with a single pre-operative
            application, so you can maintain uninterrupted focus from first
            incision to close.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link
              href="/contact?type=evaluation"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Request Your Evaluation Kit
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — THE FRUSTRATION
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
              The Challenge
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              You Know the{' '}
              <span className="text-gradient font-normal">Problem</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              You are mid-procedure, focused, in rhythm. Then the tip sticks.
              Eschar builds. You pause, hand back the instrument, wait for it to
              be cleaned, reposition, and re-establish your plane. It happens
              again. And again. It is the most preventable disruption in
              electrosurgery — and it compounds with every case.
            </p>
          </motion.div>

          {/* Pain Point Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: PauseCircle,
                title: 'Mid-Procedure Interruptions',
                desc: 'Every pause to clean an electrode tip breaks your concentration, disrupts the surgical rhythm, and forces you to re-establish your operative plane. These interruptions are not minor — they fragment the cognitive flow that complex procedures demand.',
                color: 'text-red-500',
                bg: 'bg-red-50',
                border: 'border-red-100',
              },
              {
                icon: Activity,
                title: 'Inconsistent Performance',
                desc: 'As eschar accumulates, impedance rises. You compensate with higher power settings, but that introduces greater thermal spread and less predictable tissue effect. The instrument becomes progressively less precise as the case continues.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
              },
              {
                icon: Clock,
                title: 'Extended Case Times',
                desc: 'Each hand-back costs 30 to 90 seconds. Across 5 to 12 cleaning pauses per case, you are adding 10 to 40 minutes of non-operative time. Multiply that across your weekly caseload, and the cumulative delay is substantial.',
                color: 'text-orange-500',
                bg: 'bg-orange-50',
                border: 'border-orange-100',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className={`relative rounded-2xl border ${card.border} ${card.bg} p-8 hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.bg} ${card.color}`}
                >
                  <card.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — THE SOLUTION (Before / After)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              The Solution
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              What Changes with{' '}
              <span className="text-gradient font-normal">Lubrecision</span>
            </h2>
          </motion.div>

          {/* Before / After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-red-400 mb-6">
                Without Lubrecision
              </h3>
              <div className="space-y-3">
                {[
                  { step: 'Apply instrument', muted: false },
                  { step: 'Eschar builds on tip', muted: true },
                  { step: 'Pause procedure', muted: true },
                  { step: 'Hand back for cleaning', muted: true },
                  { step: 'Reposition and re-orient', muted: true },
                  { step: 'Resume cutting', muted: false },
                  { step: 'Repeat cycle 5\u201312 times', muted: true },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <div className={`w-2 h-2 rounded-full shrink-0 ${item.muted ? 'bg-red-300' : 'bg-slate-300'}`} />
                    <span className={`text-sm ${item.muted ? 'text-red-400' : 'text-slate-600'}`}>
                      {item.step}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs text-slate-400 leading-relaxed">
                  A fragmented workflow with repeated disruptions, lost
                  concentration, and cumulative time loss across the case.
                </p>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              className="rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-50/60 to-white p-8 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-100/60 to-transparent rounded-bl-full" />

              <h3 className="relative text-xs font-semibold tracking-[0.15em] uppercase text-gold-600 mb-6">
                With Lubrecision
              </h3>
              <div className="relative space-y-3">
                {[
                  { step: 'Apply Lubrecision pre-operatively', highlight: true },
                  { step: 'Begin procedure', highlight: false },
                  { step: 'Continuous, uninterrupted electrosurgical flow', highlight: true },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                  >
                    <div className={`w-2 h-2 rounded-full shrink-0 ${item.highlight ? 'bg-gold-500' : 'bg-navy-300'}`} />
                    <span className={`text-sm font-medium ${item.highlight ? 'text-navy-900' : 'text-slate-600'}`}>
                      {item.step}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Visual emphasis */}
              <motion.div
                className="mt-8 rounded-xl bg-navy-950 p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.35 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={16} className="text-gold-400" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold-400">
                    Uninterrupted Performance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Progress bar visualization */}
                  <div className="flex-1 h-2 rounded-full bg-navy-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, delay: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-[10px] text-gold-400 font-medium whitespace-nowrap">
                    Full procedure
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Consistent current flow from start to finish — no cleaning
                  pauses, no workflow interruptions.
                </p>
              </motion.div>

              <div className="relative mt-6 pt-5 border-t border-gold-200/60">
                <p className="text-xs text-slate-500 leading-relaxed">
                  A streamlined workflow. One application. Continuous operative
                  flow. Your full attention stays on the patient.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — CLINICAL BENEFITS
          ═══════════════════════════════════════════ */}
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
              Clinical Impact
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              Clinical{' '}
              <span className="text-gradient font-normal">Advantages</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: HandMetal,
                title: 'Fewer Hand-Backs for Tip Cleaning',
                desc: 'Dramatically reduce the number of times you pause to hand back instruments for eschar removal. Maintain your operative rhythm throughout the case.',
              },
              {
                icon: Zap,
                title: 'Consistent Current Flow Throughout',
                desc: 'Without eschar insulating the electrode, impedance remains stable. Your energy delivery stays predictable from the first application to the last.',
              },
              {
                icon: Activity,
                title: 'Reduced Need for Increased Power',
                desc: 'When tips stay clean, you can operate at your preferred settings. No compensatory power increases that change tissue effect profiles.',
              },
              {
                icon: ThermometerSun,
                title: 'Lower Risk of Thermal Spread',
                desc: 'Stable impedance means controlled energy delivery. Reduced need for higher power settings decreases the risk of unintended lateral thermal injury to adjacent tissue.',
              },
              {
                icon: Wrench,
                title: 'Preserved Instrument Integrity',
                desc: 'Eliminating repeated abrasive scrubbing extends electrode tip life. Less mechanical degradation means more consistent performance throughout each instrument cycle.',
              },
              {
                icon: RotateCcw,
                title: 'Faster Case Turnover',
                desc: 'Shorter operative times and fewer cleaning-related delays contribute to improved OR throughput, allowing your team to start the next case on schedule.',
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

      {/* ═══════════════════════════════════════════
          SECTION 4.5 — ROBOTIC SURGERY
          ═══════════════════════════════════════════ */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              da Vinci® Compatible
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              Built for the{' '}
              <span className="text-gradient font-normal">Robotic OR</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Robotic surgery introduces unique workflow constraints that make
              anti-stick protection not just beneficial — but essential. When
              you are operating from the console, instrument cleaning pauses
              are exponentially more disruptive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
            {/* Left — The Robotic Challenge */}
            <motion.div
              className="rounded-2xl border border-navy-100 bg-navy-950 p-8 md:p-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">
                The Robotic Surgery Challenge
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: 'Console-Based Workflow',
                    desc: 'In robotic surgery, you are physically separated from the operative field. When eschar builds on your instrument tips, you cannot simply hand the tool to your scrub nurse. The instrument must be removed from the port, cleaned, and reinserted — a process that can take several minutes and requires breaking your operative flow.',
                  },
                  {
                    title: 'Complex Instrument Design',
                    desc: 'da Vinci instruments feature intricate articulating wrist mechanisms and multi-jointed tips. These complex geometries create more surface area for tissue adhesion and make cleaning more difficult than with standard electrosurgical devices.',
                  },
                  {
                    title: 'High-Cost Instruments at Risk',
                    desc: 'At $600–$3,500 per procedure, da Vinci instruments represent a significant investment. Eschar buildup and repeated abrasive cleaning accelerate wear, particularly on the precision articulation mechanisms that define robotic surgery.',
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
            </motion.div>

            {/* Right — How Lubrecision Solves It */}
            <div className="space-y-6">
              <motion.div
                className="rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-50/60 to-white p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-100/60 to-transparent rounded-bl-full" />
                <h3 className="relative text-sm font-semibold tracking-wider uppercase text-gold-600 mb-5">
                  The Lubrecision Advantage
                </h3>
                <div className="relative space-y-4">
                  {[
                    'Apply pre-operatively to all robotic instrument tips before docking',
                    'Maintain continuous electrosurgical performance throughout the entire case',
                    'Eliminate the need to undock and clean instruments mid-procedure',
                    'Preserve instrument articulation and precision mechanisms',
                    'Reduce capacitive coupling risk from eschar insulation buildup',
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                    >
                      <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                className="rounded-2xl border border-slate-100 bg-white p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Quote size={20} className="text-gold-200 mb-3" />
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;We use the product for our robotically assisted laparoscopic
                  cases. It reduces tissue sticking to the tips and greatly reduces
                  charring of the cautery tips. Very time beneficial since we do not
                  have to stop and remove instruments to continually clean
                  them.&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold text-navy-900">
                  Robotic Surgery Clinical Team
                </p>
                <p className="text-[11px] text-slate-400">
                  Robotically Assisted Laparoscopic Cases
                </p>
              </motion.div>
            </div>
          </div>

          {/* Robotic surgery stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { stat: '2.7M+', label: 'Robotic Procedures in 2024' },
              { stat: '17%', label: 'Annual Growth Rate' },
              { stat: '7,500+', label: 'da Vinci Systems Worldwide' },
              { stat: '$600–$3.5K', label: 'Instrument Cost Per Case' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-xl border border-slate-100 bg-white p-5 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-xl md:text-2xl font-semibold text-navy-900">{item.stat}</div>
                <p className="mt-1 text-[11px] text-slate-500 leading-tight">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — SPECIALTIES
          ═══════════════════════════════════════════ */}
      <section className="relative bg-navy-950 section-padding overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Universal Application
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Applicable Across{' '}
              <span className="text-gradient-gold font-normal">
                All Electrosurgical Specialties
              </span>
            </h2>
          </motion.div>

          {/* Specialty Pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {[
              'Robotic Surgery (da Vinci®)',
              'General Surgery',
              'ENT',
              'OB/GYN',
              'Orthopedics',
              'Urology',
              'Plastic Surgery',
              'Cardiothoracic',
              'Neurosurgery',
              'Dermatology',
              'Pediatric Surgery',
            ].map((specialty, i) => (
              <motion.span
                key={specialty}
                className="px-5 py-2.5 text-sm font-medium tracking-wide rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:border-gold-500/30 hover:bg-gold-500/[0.06] hover:text-gold-300 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.04 }}
              >
                {specialty}
              </motion.span>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            className="text-center mt-10 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Stethoscope size={14} className="inline-block mr-2 text-gold-500/60 -mt-0.5" />
            Any procedure using monopolar, bipolar, laparoscopic, or
            robotic electrosurgical devices.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — TESTIMONIAL PLACEHOLDER
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Surgeon Feedback
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              What Surgeons Are{' '}
              <span className="text-gradient font-normal">Saying</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'I used to stop five or six times per case to clean my tip. With Lubrecision, I cannot remember the last time I had to pause for eschar. The workflow difference is immediate and obvious.',
                name: 'Dr. Sarah M.',
                specialty: 'General Surgery',
                institution: 'Regional Medical Center',
              },
              {
                quote:
                  'In ENT procedures where precision is everything, consistent energy delivery matters. Lubrecision keeps the electrode performing the way it should from start to finish. My team noticed the difference on the first case.',
                name: 'Dr. James T.',
                specialty: 'Otolaryngology',
                institution: 'University Hospital',
              },
              {
                quote:
                  'We evaluated Lubrecision across 30 cases in our department. Case times came down, the scrub nurses had fewer hand-backs, and I could maintain my operative focus. It has become standard in our prep.',
                name: 'Dr. Priya K.',
                specialty: 'OB/GYN',
                institution: 'Academic Health System',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                className="relative rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-lg hover:shadow-slate-100/80 transition-shadow duration-500"
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                {/* Quote Icon */}
                <Quote size={24} className="text-gold-200 mb-4" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-sm font-semibold text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {testimonial.specialty} &middot; {testimonial.institution}
                  </p>
                </div>

                {/* Placeholder badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] font-medium tracking-wider uppercase text-slate-300 bg-slate-50 px-2 py-1 rounded">
                    Placeholder
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — FINAL CTA
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
                Try Lubrecision in
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gradient-gold">
                Your Next Case
              </p>
              <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
                We provide complimentary evaluation kits so you can experience
                the difference firsthand. See what uninterrupted electrosurgical
                flow feels like in your own OR.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact?type=evaluation"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Request Evaluation Kit
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/science"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full border border-navy-200 text-navy-900 hover:bg-navy-50 hover:border-navy-300 transition-all duration-300"
              >
                See the Science
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Trust micro-badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[
                { icon: ShieldCheck, label: 'FDA Registered' },
                { icon: FlaskConical, label: 'AORN Compliant' },
                { icon: Stethoscope, label: 'Free Evaluation' },
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
