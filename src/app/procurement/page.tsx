'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
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
  Mail,
  CheckCircle2,
} from 'lucide-react';
import {
  FDA_STATUS_SHORT,
  FDA_STATUS_LINE,
  MANUFACTURING_INTENT,
  AORN_NOTE,
} from '@/lib/compliance';

/* ─── Shared animation preset ─── */
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

/* ════════════════════════════════════════
   PROCUREMENT PAGE
   ════════════════════════════════════════ */
export default function ProcurementPage() {
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
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-gold-200 bg-gold-50/60"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-700">
                {FDA_STATUS_SHORT}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-tight text-navy-900 leading-[1.12]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Evaluation &amp; Evidence Information for{' '}
              <span className="text-gradient font-normal">Lubecision</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Information for value-analysis and procurement teams evaluating
              Lubecision. {FDA_STATUS_LINE}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              >
                Request Information
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#documentation"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-slate-200 text-navy-900 hover:border-navy-200 hover:bg-navy-50/40 transition-all duration-300"
              >
                <FileText size={15} />
                Documentation Overview
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — OPERATIONAL CONTEXT ═══════════ */}
      <section
        id="operational-context"
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

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
              Operational Context
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              A Known Concern in the{' '}
              <span className="text-gradient-gold font-normal">
                Operating Room
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Operating room time and the consumption of single-use disposables
              are well-recognized operational concerns for perioperative and
              value-analysis teams. Eschar accumulation on electrosurgical
              instrument tips, and the interruptions associated with cleaning
              them, are part of that broader picture. Lubecision is being
              developed as an investigational anti-stick solution intended to be
              studied in this context.
            </p>
            <p className="mt-5 text-sm text-slate-500 leading-relaxed">
              {FDA_STATUS_LINE} Any performance characteristics remain under
              evaluation and are not established claims.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 3.5 — ROBOTIC SURGERY MARKET CONTEXT ═══════════ */}
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
              Market Context
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              The Robotic Surgery{' '}
              <span className="text-gradient-gold font-normal">
                Landscape
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Robotic-assisted surgery is among the fastest-growing segments in
              electrosurgery. The neutral market figures below provide general
              context for teams evaluating the category in which Lubecision is
              being developed.
            </p>
          </motion.div>

          {/* Neutral market context */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14 max-w-3xl mx-auto">
            {[
              {
                stat: '2.7M+',
                label: 'da Vinci® Procedures in 2024',
                desc: 'Reported annual robotic-assisted procedure volume (Intuitive Surgical 2024 annual reporting).',
              },
              {
                stat: '17.1%',
                label: 'Reported Market CAGR',
                desc: 'Robotic surgery market growth projected by published industry analyst consensus.',
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

          <p className="mt-4 text-xs text-slate-500 text-center max-w-2xl mx-auto">
            Market figures are general industry context sourced from public
            Intuitive Surgical financial disclosures and published analyst
            reports. They do not describe Lubecision or imply any product
            outcome.
          </p>

          {/* Mechanistic hypothesis */}
          <motion.div
            className="mt-10 rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-8 md:p-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Mechanistic Rationale Under Investigation
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              In robotic procedures, eschar accumulation on instrument tips can
              prompt removal of instruments from ports for cleaning. The working
              hypothesis behind Lubecision is that a phospholipid anti-stick film
              applied to instrument tips may reduce eschar adhesion. This is a
              mechanistic hypothesis under evaluation, not an established benefit.
            </p>
            <div className="mt-5 flex items-start gap-3">
              <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gold-200/90 leading-relaxed">
                Any effect on instrument handling, workflow, or outcomes remains
                to be studied and is not claimed.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — COMPLIANCE & DOCUMENTATION ═══════════ */}
      <section id="documentation" className="relative bg-slate-50 section-padding">
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
              An overview of the documentation intended to support value-analysis
              and procurement review as development progresses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: ShieldCheck,
                title: 'AORN Guidance',
                desc: AORN_NOTE,
              },
              {
                icon: BadgeCheck,
                title: FDA_STATUS_SHORT,
                desc: `${FDA_STATUS_LINE} ${MANUFACTURING_INTENT}`,
              },
              {
                icon: FileText,
                title: 'Safety Data Sheet (Planned)',
                desc: 'SDS documentation is intended to be made available for environmental health and safety review. Lubecision is based on a phospholipid formulation; safety characteristics are part of the development and evaluation process.',
              },
              {
                icon: FileCheck,
                title: 'Instructions for Use (Planned)',
                desc: 'Instructions-for-use documentation is intended to support clinical staff onboarding, with a straightforward application process.',
              },
              {
                icon: Package,
                title: 'Sterile Single-Use Packaging (Intended)',
                desc: 'The product is intended to be supplied as individually sealed, sterile single-use kits containing a solution bottle and applicator pad for single-patient use.',
              },
              {
                icon: ScanLine,
                title: 'Lot Traceability (Intended)',
                desc: 'Lot traceability is intended on every unit to support supply-chain and quality-assurance documentation and facility recall-management protocols.',
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
              The{' '}
              <span className="text-gradient font-normal">
                Evaluation Pathway
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
                  title: 'Request Information',
                  desc: 'Reach out to receive development and evaluation information for your facility and value-analysis committee.',
                },
                {
                  num: '02',
                  icon: ClipboardList,
                  title: 'Review Evidence',
                  desc: 'Review the available documentation and the investigational basis for Lubecision as development progresses.',
                },
                {
                  num: '03',
                  icon: Handshake,
                  title: 'Stay Informed',
                  desc: 'Be kept up to date on regulatory progress and the evaluation roadmap toward potential availability.',
                },
                {
                  num: '04',
                  icon: HeadphonesIcon,
                  title: 'Clinical Dialogue',
                  desc: 'Connect with the team for clinical and scientific questions as you assess the category.',
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
                Evaluating the{' '}
                <span className="text-gradient-gold font-normal">
                  Category
                </span>
                ?
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
                Request development and evaluation information for your
                value-analysis and procurement review.
              </p>
            </motion.div>

            {/* Single path */}
            <motion.div
              className="mt-12 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link href="/contact" className="group block">
                <div className="rounded-2xl bg-navy-950 p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/20">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                    <FileText size={22} className="text-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    Request Information
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Evaluation and evidence information for facilities and
                    health systems.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                    Get in Touch
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
                <Mail size={15} className="text-gold-500" />
                <span>Inquiries: </span>
                <a
                  href="mailto:info@lubecision.com"
                  className="font-semibold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  info@lubecision.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
