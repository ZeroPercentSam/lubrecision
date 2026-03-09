'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from 'framer-motion';
import {
  Crosshair,
  FlaskConical,
  Ear,
  Target,
  ShieldCheck,
  Factory,
  Award,
  MapPin,
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Heart,
  TrendingUp,
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

/* ════════════════════════════════════════════════════
   ABOUT PAGE
   ════════════════════════════════════════════════════ */
export default function AboutPage() {
  const values = [
    {
      icon: Crosshair,
      title: 'Surgical Precision',
      description:
        'We obsess over the details that matter in the OR. Every formulation variable, every application method, every packaging decision is engineered to deliver flawless performance when it counts most. There are no shortcuts in our process — because there are none in surgery.',
    },
    {
      icon: FlaskConical,
      title: 'Evidence-Based',
      description:
        'Every claim we make is backed by clinical data and peer-reviewed research. We don\'t rely on marketing superlatives — we rely on published evidence, independent testing, and the measurable outcomes that surgical teams report from the field.',
    },
    {
      icon: Ear,
      title: 'Surgeon-Centric',
      description:
        'Built by listening to the people who use it. Our product development is driven by direct feedback from surgeons, scrub techs, and perioperative nurses who deal with eschar buildup every single day. Their experience shapes every decision we make.',
    },
    {
      icon: Target,
      title: 'Relentless Focus',
      description:
        'One product. Perfected. Not a line item in a catalog of thousands. While conglomerates spread their attention across hundreds of product lines, we channel every resource into solving one critical problem better than anyone else in the world.',
    },
  ];

  const teamMembers = [
    {
      initials: 'JM',
      name: 'James Mitchell',
      title: 'CEO & Co-Founder',
      bio: 'Over 15 years of experience in medical device commercialization. Previously led product strategy at a leading surgical device company. Passionate about bringing focused, surgeon-driven innovation to the OR.',
      gradientFrom: 'from-navy-700',
      gradientTo: 'to-navy-900',
    },
    {
      initials: 'SR',
      name: 'Sarah Reynolds',
      title: 'VP of Clinical Affairs',
      bio: 'Former perioperative nurse and clinical researcher with deep expertise in electrosurgical safety protocols. Leads our clinical evidence program and maintains relationships with key healthcare institutions.',
      gradientFrom: 'from-gold-600',
      gradientTo: 'to-gold-800',
    },
    {
      initials: 'DK',
      name: 'David Kim',
      title: 'Director of R&D',
      bio: 'PhD in biomedical engineering with a specialization in biocompatible surface coatings. Oversees formulation development, quality control processes, and ongoing product innovation at Lubecision.',
      gradientFrom: 'from-navy-600',
      gradientTo: 'to-navy-800',
    },
    {
      initials: 'LP',
      name: 'Laura Patel',
      title: 'VP of Operations',
      bio: 'Brings a decade of cGMP manufacturing leadership to Lubecision. Ensures every unit that leaves our facility meets the exacting standards that surgical teams expect and patients deserve.',
      gradientFrom: 'from-gold-500',
      gradientTo: 'to-gold-700',
    },
  ];

  const qualityBadges = [
    {
      icon: ShieldCheck,
      label: 'FDA Registered',
      description: 'Fully registered with the U.S. Food and Drug Administration',
    },
    {
      icon: Factory,
      label: 'cGMP Compliant',
      description: 'Current Good Manufacturing Practices across all operations',
    },
    {
      icon: Award,
      label: 'ISO Standards',
      description: 'Manufactured in compliance with international quality standards',
    },
    {
      icon: MapPin,
      label: 'US-Based',
      description: 'Proudly manufactured in the United States of America',
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden animated-gradient">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hex-about"
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
            <rect width="100%" height="100%" fill="url(#hex-about)" />
          </svg>

          <motion.div
            className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
            }}
            animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[8%] w-80 h-80 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(42,68,148,0.1) 0%, transparent 70%)',
            }}
            animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart size={14} className="text-gold-400" />
            <span className="text-xs font-medium tracking-widest text-gold-400 uppercase">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Precision Is Not a Feature.
            <br />
            <span className="text-gradient-gold font-normal">
              It&apos;s Our Foundation.
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            We exist for one reason: to eliminate eschar buildup on electrosurgical
            instruments. Not as a side project. Not as one SKU among thousands. This is
            our singular, unwavering focus — and it drives everything we do.
          </motion.p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — OUR STORY
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
                Our Origin
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-tight text-navy-900 leading-tight">
                Why Lubecision{' '}
                <span className="text-gradient font-normal">Exists</span>
              </h2>

              <div className="mt-8 space-y-5 text-slate-600 leading-relaxed">
                <p>
                  It started with a simple observation that carried enormous consequences.
                  In operating rooms across the country, surgeons were losing precious
                  minutes — sometimes ten, sometimes forty — to the same recurring
                  problem: eschar buildup on electrosurgical tips. Every pause to hand
                  back an instrument for cleaning disrupted flow, extended anesthesia
                  time, and added measurable cost. Yet this problem was treated as an
                  unavoidable reality of surgery.
                </p>
                <p>
                  The solutions that existed were afterthoughts — products from massive
                  medical conglomerates that treated anti-stick coatings as just another
                  line item buried in catalogs of ten thousand products. No one was
                  dedicating real R&amp;D, real clinical attention, or real manufacturing
                  precision to solving this specific problem. The gap wasn&apos;t just in
                  the product — it was in the focus.
                </p>
                <p>
                  That&apos;s why Lubecision was founded: to be a company dedicated
                  solely to solving this one critical challenge. We assembled a team of
                  biomedical engineers, perioperative clinicians, and manufacturing
                  experts with one mandate — engineer the most effective anti-stick
                  solution on the market, then prove it with data. The result is
                  Lubecision: a precision-engineered phospholipid solution from a team
                  that cares about nothing else.
                </p>
              </div>
            </motion.div>

            {/* Right — Visual Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy-100/60 via-transparent to-gold-100/40" />

                {/* Visual placeholder */}
                <div className="absolute inset-6 rounded-2xl bg-white shadow-2xl shadow-navy-900/5 border border-slate-100 overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="h-2 bg-gradient-to-r from-navy-800 via-navy-600 to-gold-500" />

                  <div className="flex flex-col items-center justify-center h-full p-10">
                    {/* Abstract visual — converging lines representing focus */}
                    <div className="relative w-48 h-48">
                      {[0, 45, 90, 135].map((deg) => (
                        <motion.div
                          key={deg}
                          className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-navy-300 to-transparent origin-left"
                          style={{
                            transform: `rotate(${deg}deg) translateX(-50%)`,
                          }}
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: deg * 0.01,
                          }}
                        />
                      ))}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Target size={24} className="text-white" />
                      </motion.div>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-sm font-semibold text-navy-900 tracking-wide">
                        One Mission. Zero Distractions.
                      </p>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed max-w-xs">
                        While others spread their focus across thousands of products, we
                        channel everything into perfecting one solution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -right-3 top-[35%] bg-white rounded-xl shadow-lg shadow-slate-200/60 px-4 py-3 border border-slate-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="text-[10px] font-semibold text-navy-900 tracking-wide">
                    DEDICATED R&amp;D
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5">
                    100% focused on anti-stick
                  </p>
                </motion.div>

                <motion.div
                  className="absolute -left-3 bottom-[30%] bg-white rounded-xl shadow-lg shadow-slate-200/60 px-4 py-3 border border-slate-100"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                >
                  <p className="text-[10px] font-semibold text-gold-600 tracking-wide">
                    CLINICAL EVIDENCE
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5">
                    Data-driven development
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — OUR VALUES
          ═══════════════════════════════════════════ */}
      <section className="relative bg-slate-50 section-padding">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              What{' '}
              <span className="text-gradient font-normal">Drives Us</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Four principles guide every decision we make — from formulation
              chemistry to how we answer the phone.
            </p>
          </motion.div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="relative rounded-2xl bg-white border border-slate-100 p-8 md:p-10 group hover:shadow-xl hover:shadow-navy-900/5 hover:border-navy-100 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-navy-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-950">
                    <value.icon size={24} className="text-gold-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy-900 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — BY THE NUMBERS
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Our Impact
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
              By the{' '}
              <span className="text-gradient font-normal">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-14">
            {[
              {
                value: 50000,
                suffix: '+',
                label: 'Procedures Supported',
                icon: TrendingUp,
              },
              {
                value: 200,
                suffix: '+',
                label: 'Healthcare Facilities',
                icon: Building2,
              },
              {
                value: 98,
                suffix: '%',
                label: 'Satisfaction Rate',
                icon: Heart,
              },
              {
                value: 1,
                suffix: '',
                label: 'Singular Focus',
                icon: Target,
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 mb-5">
                  <stat.icon size={22} className="text-navy-600" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-navy-900">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-12 text-slate-300 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            * All statistics are representative placeholders and will be updated
            with verified figures.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — TEAM (LEADERSHIP)
          ═══════════════════════════════════════════ */}
      <section className="relative bg-navy-950 section-padding overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              The People Behind the Product
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Leadership
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              A focused team of industry veterans united by a shared conviction: that
              surgical teams deserve better.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Avatar placeholder */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-lg font-semibold text-white tracking-wide">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gold-400 tracking-wide uppercase">
                    {member.title}
                  </p>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-10 text-slate-500 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            * Team profiles are representative placeholders.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — QUALITY & MANUFACTURING
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
                Quality Assurance
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-tight text-navy-900 leading-tight">
                Commitment to{' '}
                <span className="text-gradient font-normal">Quality</span>
              </h2>

              <div className="mt-8 space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Every unit of Lubecision is manufactured under rigorous quality
                  control standards designed for the demands of the modern operating
                  room. Our facilities adhere to current Good Manufacturing Practices
                  (cGMP) and are registered with the FDA, ensuring full regulatory
                  compliance at every stage of production.
                </p>
                <p>
                  From raw material sourcing to final sterile packaging, our quality
                  management system maintains traceability, consistency, and safety
                  across every production lot. We believe that a product used in surgery
                  should be manufactured with the same precision it&apos;s designed to
                  deliver.
                </p>
              </div>
            </motion.div>

            {/* Right — Quality Badges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {qualityBadges.map((badge, i) => (
                  <motion.div
                    key={badge.label}
                    className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-7 hover:shadow-lg hover:shadow-slate-100 hover:border-navy-100 transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-950 group-hover:scale-105 transition-transform duration-300">
                      <badge.icon size={22} className="text-gold-400" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy-900">
                      {badge.label}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {badge.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — CTA
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Top accent line */}
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
                Work With Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900">
                Partner with Us
              </h2>
              <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
                Join the growing network of healthcare facilities that trust Lubecision
                to optimize their electrosurgical workflows. Whether you&apos;re a
                surgeon, a materials manager, or a GPO representative, we&apos;d love to
                start the conversation.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Contact Our Team
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/contact?type=sample"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide rounded-full border border-navy-200 text-navy-900 hover:border-navy-300 hover:bg-navy-50 transition-all duration-300"
              >
                Request a Sample
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Trust reinforcement */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[
                { icon: Users, label: '200+ Facilities' },
                { icon: ShieldCheck, label: 'FDA Registered' },
                { icon: Award, label: 'cGMP Compliant' },
                { icon: MapPin, label: 'US-Based' },
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
