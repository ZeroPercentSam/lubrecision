'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  DollarSign,
  Clock,
  TrendingDown,
  AlertTriangle,
  Calculator,
  ShieldCheck,
  FileCheck,
  FileText,
  Package,
  ScanLine,
  BadgeCheck,
  ClipboardList,
  Send,
  Handshake,
  HeadphonesIcon,
  Building2,
  Phone,
  Mail,
  Download,
  Sliders,
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
          nodeRef.current.textContent = prefix + v.toFixed(decimals) + suffix;
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

/* ════════════════════════════════════════
   PROCUREMENT PAGE
   ════════════════════════════════════════ */
export default function ProcurementPage() {
  /* ── ROI Calculator State ── */
  const [numORs, setNumORs] = useState(10);
  const [casesPerOR, setCasesPerOR] = useState(4);
  const [operatingDays, setOperatingDays] = useState(250);
  const [pausesSaved, setPausesSaved] = useState(6);
  const [costPerMinute, setCostPerMinute] = useState(45);
  const [timeSavedPerPause, setTimeSavedPerPause] = useState(2.5);

  /* ── Derived Calculations ── */
  const annualCases = numORs * casesPerOR * operatingDays;
  const totalMinutesSaved = annualCases * pausesSaved * timeSavedPerPause;
  const totalHoursSaved = totalMinutesSaved / 60;
  const annualSavings = totalMinutesSaved * costPerMinute;

  return (
    <>
      {/* ═══════════ SECTION 1 — PAGE HERO ═══════════ */}
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
            <span className="text-navy-900 font-medium">For Procurement</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-tight text-navy-900 leading-[1.12]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              The Business Case for{' '}
              <span className="text-gradient font-normal">Lubecision</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quantifiable cost savings. Compliance documentation. Streamlined
              procurement.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
            >
              <Link
                href="/contact?type=quote"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              >
                Request a Quote
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#cost-analysis"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-slate-200 text-navy-900 hover:border-navy-200 hover:bg-navy-50/40 transition-all duration-300"
              >
                <Download size={15} />
                Download Cost Analysis
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — THE COST PROBLEM ═══════════ */}
      <section
        id="cost-analysis"
        className="relative bg-navy-950 section-padding overflow-hidden"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Cost Analysis
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              The True Cost of Eschar{' '}
              <span className="text-gradient-gold font-normal">
                in Your OR
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Every surgical pause to clean eschar directly drains your
              operating budget. Here is the financial breakdown your CFO needs to
              see.
            </p>
          </motion.div>

          {/* Financial Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              {
                icon: DollarSign,
                stat: '$36-62',
                label: 'Per OR Minute',
                desc: 'Published cost per minute of OR time.',
                cite: 'JAMA Surgery',
              },
              {
                icon: Clock,
                stat: '5-12',
                label: 'Pauses Per Case',
                desc: 'Average surgical pauses per electrosurgical procedure to clean eschar.',
                cite: 'Perioperative data',
              },
              {
                icon: AlertTriangle,
                stat: '2-3 min',
                label: 'Per Pause',
                desc: 'Average time lost per hand-back for tip cleaning and eschar removal.',
                cite: 'OR workflow analysis',
              },
              {
                icon: TrendingDown,
                stat: '$360-2,232',
                label: 'Wasted Per Case',
                desc: 'Estimated cost per case in wasted OR time due to eschar-related pauses.',
                cite: 'Calculated impact',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 group hover:border-gold-500/20 transition-all duration-500"
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <card.icon size={20} className="text-gold-400" />
                </div>
                <div className="text-3xl font-semibold text-white">
                  {card.stat}
                </div>
                <div className="mt-1 text-sm font-semibold text-gold-400 tracking-wide">
                  {card.label}
                </div>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
                <p className="mt-3 text-[10px] text-slate-500 uppercase tracking-wider">
                  Source: {card.cite}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Annual Impact — BIG number */}
          <motion.div
            className="mt-14 rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-10 md:p-14 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-500/5 to-transparent rounded-tr-full" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
                Annual Impact for a 10-OR Facility
              </p>
              <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
                <span className="text-gradient-gold font-normal">
                  <Counter
                    from={0}
                    to={1.3}
                    prefix="$"
                    suffix="M"
                    decimals={1}
                    duration={2.5}
                  />
                  –
                  <Counter
                    from={0}
                    to={8}
                    prefix="$"
                    suffix="M+"
                    decimals={0}
                    duration={2.5}
                  />
                </span>
              </div>
              <p className="mt-4 text-lg text-slate-300 font-light">
                in preventable OR costs every year
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Based on published OR cost data and perioperative workflow
                analyses
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — ROI CALCULATOR ═══════════ */}
      <section id="roi" className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              ROI Calculator
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              Calculate{' '}
              <span className="text-gradient font-normal">Your Savings</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Adjust the inputs below to match your facility. See exactly how
              much Lubecision can save your organization.
            </p>
          </motion.div>

          {/* Calculator */}
          <motion.div
            className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Left — Inputs */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center">
                  <Sliders size={18} className="text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 tracking-tight">
                  Your Facility Parameters
                </h3>
              </div>

              <div className="space-y-8">
                {/* Number of ORs */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-navy-900">
                      Number of ORs
                    </label>
                    <span className="text-sm font-semibold text-navy-900 tabular-nums">
                      {numORs}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    step={1}
                    value={numORs}
                    onChange={(e) => setNumORs(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-gold-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-gold-500/25 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Cases per OR per day */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-navy-900">
                      Electrosurgical Cases per OR / Day
                    </label>
                    <span className="text-sm font-semibold text-navy-900 tabular-nums">
                      {casesPerOR}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={casesPerOR}
                    onChange={(e) => setCasesPerOR(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-gold-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-gold-500/25 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1</span>
                    <span>12</span>
                  </div>
                </div>

                {/* Operating days per year */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-navy-900">
                      Operating Days per Year
                    </label>
                    <span className="text-sm font-semibold text-navy-900 tabular-nums">
                      {operatingDays}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={365}
                    step={5}
                    value={operatingDays}
                    onChange={(e) => setOperatingDays(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-gold-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-gold-500/25 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>100</span>
                    <span>365</span>
                  </div>
                </div>

                {/* Pauses saved per case */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-navy-900">
                      Pauses Saved per Case
                    </label>
                    <span className="text-sm font-semibold text-navy-900 tabular-nums">
                      {pausesSaved}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={pausesSaved}
                    onChange={(e) => setPausesSaved(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-gold-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-gold-500/25 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1</span>
                    <span>12</span>
                  </div>
                </div>

                {/* Average OR cost per minute */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-navy-900">
                      OR Cost per Minute
                    </label>
                    <span className="text-sm font-semibold text-navy-900 tabular-nums">
                      ${costPerMinute}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={100}
                    step={1}
                    value={costPerMinute}
                    onChange={(e) => setCostPerMinute(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-gold-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-gold-500/25 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>$20</span>
                    <span>$100</span>
                  </div>
                </div>

                {/* Time saved per avoided pause */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-navy-900">
                      Time Saved per Avoided Pause (min)
                    </label>
                    <span className="text-sm font-semibold text-navy-900 tabular-nums">
                      {timeSavedPerPause} min
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={5}
                    step={0.5}
                    value={timeSavedPerPause}
                    onChange={(e) =>
                      setTimeSavedPerPause(Number(e.target.value))
                    }
                    className="w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-gold-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-gold-500/25 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>0.5 min</span>
                    <span>5 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Results */}
            <div className="flex flex-col gap-5">
              {/* Annual Cases */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2">
                  Annual Cases
                </p>
                <p className="text-3xl font-light text-navy-900 tabular-nums">
                  {annualCases.toLocaleString()}
                </p>
              </div>

              {/* Total Time Saved */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2">
                  Total Time Saved
                </p>
                <p className="text-3xl font-light text-navy-900 tabular-nums">
                  {totalHoursSaved.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}{' '}
                  <span className="text-lg text-slate-400">hours / year</span>
                </p>
              </div>

              {/* Annual Cost Savings — THE BIG ONE */}
              <div className="flex-1 rounded-2xl border-2 border-gold-400/40 bg-gradient-to-br from-gold-50 via-white to-gold-50/30 p-8 relative overflow-hidden">
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-200/30 to-transparent rounded-bl-full" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Calculator size={16} className="text-gold-600" />
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-700">
                      Estimated Annual Savings
                    </p>
                  </div>
                  <p className="text-5xl md:text-6xl font-light tracking-tight text-navy-900 tabular-nums">
                    <span className="text-gradient-gold font-normal">
                      $
                      {annualSavings.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    Projected annual OR time savings by eliminating eschar-related
                    surgical pauses across your facility.
                  </p>

                  <Link
                    href="/contact?type=quote"
                    className="group inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    Get Your Custom Analysis
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 3.5 — ROBOTIC SURGERY ROI ═══════════ */}
      <section className="relative bg-navy-950 section-padding overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
            backgroundSize: '24px 24px',
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
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Robotic Surgery Market
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              The Growing Case for{' '}
              <span className="text-gradient-gold font-normal">
                Robotic OR Investment
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              da Vinci® robotic surgery is the fastest-growing segment in
              electrosurgery. If your facility has robotic ORs, Lubecision
              delivers outsized ROI by protecting high-cost instruments and
              eliminating costly workflow interruptions.
            </p>
          </motion.div>

          {/* Key Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              {
                stat: '2.7M+',
                label: 'da Vinci Procedures in 2024',
                desc: 'Growing 17% year-over-year — the fastest-growing surgical platform.',
              },
              {
                stat: '$600–$3.5K',
                label: 'Instrument Cost Per Case',
                desc: 'Robotic instruments cost significantly more than traditional electrosurgical tools.',
              },
              {
                stat: '$0.5–2.5M',
                label: 'System Capital Cost',
                desc: 'Plus $190K+ in annual service contracts per da Vinci system.',
              },
              {
                stat: '17.1%',
                label: 'Market CAGR',
                desc: 'Robotic surgery market projected to reach $7.28B by 2032.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 group hover:border-gold-500/20 transition-all duration-500"
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
              >
                <div className="text-2xl md:text-3xl font-semibold text-white">
                  {card.stat}
                </div>
                <div className="mt-1 text-sm font-semibold text-gold-400 tracking-wide">
                  {card.label}
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ROI Argument */}
          <motion.div
            className="mt-10 rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Why Lubecision Is Essential for Robotic Programs
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Robotic instruments lack anti-stick coatings. When eschar
                  builds up during procedures, surgeons must remove instruments
                  from ports for cleaning — a process far more disruptive than
                  in open surgery. This means more OR time wasted, faster
                  instrument degradation, and higher per-case costs.
                </p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Lubecision eliminates this problem with a single
                  pre-operative application, protecting your highest-cost
                  instruments and keeping your robotic ORs running at peak
                  efficiency.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Extends da Vinci instrument usable life',
                  'Reduces per-case instrument replacement costs',
                  'Eliminates instrument removal for cleaning',
                  'Improves robotic OR throughput and scheduling',
                  'Protects your $0.5–2.5M system investment',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-gold-200/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — COMPLIANCE & DOCUMENTATION ═══════════ */}
      <section className="relative bg-slate-50 section-padding">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Documentation
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Compliance{' '}
              <span className="text-gradient font-normal">Made Simple</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Every document your VAC committee needs — ready before your first
              evaluation call.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: ShieldCheck,
                title: 'AORN Guideline 3.11.1 Compliant',
                desc: 'Fully aligned with AORN perioperative recommendations for electrosurgical anti-stick solutions. Documentation provided for your compliance records.',
              },
              {
                icon: BadgeCheck,
                title: 'FDA Registered',
                desc: 'Lubecision is manufactured in an FDA-registered facility and meets all applicable regulatory requirements for medical device classification.',
              },
              {
                icon: FileText,
                title: 'Safety Data Sheet Available',
                desc: 'Complete SDS documentation available for your environmental health and safety team. Non-toxic, non-allergenic phospholipid formulation.',
              },
              {
                icon: FileCheck,
                title: 'Instructions for Use Documentation',
                desc: 'Clear IFU documentation for clinical staff onboarding. Simple three-step application process requires no specialized training.',
              },
              {
                icon: Package,
                title: 'Sterile Single-Use Packaging',
                desc: 'Individually sealed sterile kits ensure infection control compliance. Each kit contains solution bottle and applicator pad for single-patient use.',
              },
              {
                icon: ScanLine,
                title: 'Lot Traceability',
                desc: 'Full lot traceability on every unit for your supply chain and quality assurance documentation. Supports your facility recall management protocols.',
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

      {/* ═══════════ SECTION 5 — PROCUREMENT PROCESS ═══════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Simple{' '}
              <span className="text-gradient font-normal">
                Procurement Process
              </span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative mt-16">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
              <div className="w-full h-full bg-gradient-to-r from-navy-200 via-gold-300 to-navy-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {[
                {
                  num: '01',
                  icon: Send,
                  title: 'Request a Quote',
                  desc: 'Contact us for volume pricing tailored to your facility size and case volume.',
                },
                {
                  num: '02',
                  icon: ClipboardList,
                  title: 'Evaluate',
                  desc: 'Free sample kits for clinical evaluation by your surgical teams and VAC committee.',
                },
                {
                  num: '03',
                  icon: Handshake,
                  title: 'Order',
                  desc: 'Purchase direct or through your GPO. Flexible ordering channels to fit your workflow.',
                },
                {
                  num: '04',
                  icon: HeadphonesIcon,
                  title: 'Support',
                  desc: 'Dedicated account management and clinical support for seamless integration.',
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
                      <step.icon size={26} className="text-gold-400" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-bold text-navy-950">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-navy-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GPO Note */}
          <motion.div
            className="mt-14 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-navy-50/60 border border-navy-100 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <Building2 size={16} className="text-navy-600 shrink-0" />
            <p className="text-sm text-navy-700 font-medium">
              Compatible with major Group Purchasing Organizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — PRODUCT ECONOMICS ═══════════ */}
      <section className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Purchasing Details
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Product Details{' '}
              <span className="text-gradient font-normal">for Purchasing</span>
            </h2>
          </motion.div>

          {/* Product Table */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-[1fr,1.5fr,1fr,1fr] gap-4 px-6 sm:px-8 py-4 bg-navy-950">
              {['Product Number', 'Description', 'Packaging', 'Format'].map(
                (h) => (
                  <span
                    key={h}
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold-400"
                  >
                    {h}
                  </span>
                ),
              )}
            </div>

            {/* Row */}
            <div className="grid grid-cols-[1fr,1.5fr,1fr,1fr] gap-4 px-6 sm:px-8 py-5 border-b border-slate-100">
              <span className="text-sm font-semibold text-navy-900">
                LBR-4ML-20
              </span>
              <span className="text-sm text-slate-600">
                Lubecision Anti-Stick Solution with Sterile Applicator Pad
              </span>
              <span className="text-sm text-slate-600">20 units / box</span>
              <span className="text-sm text-slate-600">
                4 mL bottle + foam pad
              </span>
            </div>
          </motion.div>

          {/* Volume / Ordering info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h4 className="text-sm font-semibold text-navy-900 tracking-tight mb-3">
                Volume Pricing
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Tiered pricing available for facilities ordering 10+ cases per
                month. Contact our procurement team for a custom quote based on
                your case volume.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h4 className="text-sm font-semibold text-navy-900 tracking-tight mb-3">
                Ordering Channels
              </h4>
              <ul className="space-y-2">
                {[
                  'Direct — order through Lubecision sales',
                  'GPO — compatible with major group purchasing organizations',
                  'Distribution — available through select distribution partners',
                ].map((ch) => (
                  <li key={ch} className="flex items-start gap-2">
                    <ChevronRight
                      size={14}
                      className="text-gold-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-500">{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 7 — FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden">
        {/* Gold gradient accent at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        <div className="relative bg-gradient-to-b from-white via-gold-50/30 to-white section-padding">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
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
                Ready to Optimize Your{' '}
                <span className="text-gradient-gold font-normal">
                  OR Budget
                </span>
                ?
              </h2>
            </motion.div>

            {/* Two paths */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Request a Quote */}
              <Link href="/contact?type=quote" className="group block">
                <div className="rounded-2xl bg-navy-950 p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/20">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={22} className="text-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    Request a Quote
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Volume pricing for facilities and health systems.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                    Get Pricing
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>

              {/* Request a Sample */}
              <Link href="/contact?type=sample" className="group block">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/5 hover:border-gold-200">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mx-auto mb-4">
                    <Package size={22} className="text-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 tracking-tight">
                    Request a Sample
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Free evaluation kits for clinical assessment.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                    Start Evaluation
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-8 border-t border-slate-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Phone size={15} className="text-gold-500" />
                <span>Procurement Inquiries: </span>
                <span className="font-semibold text-navy-900">
                  (800) 555-0199
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Mail size={15} className="text-gold-500" />
                <a
                  href="mailto:procurement@lubecision.com"
                  className="font-semibold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  procurement@lubecision.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
