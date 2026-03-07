'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Overview', href: '/product' },
    { label: 'Science & Technology', href: '/science' },
    { label: 'How It Works', href: '/product#how-it-works' },
    { label: 'Specifications', href: '/product#specifications' },
  ],
  Solutions: [
    { label: 'For Surgeons', href: '/surgeons' },
    { label: 'For Procurement', href: '/procurement' },
    { label: 'Clinical Evidence', href: '/science#evidence' },
    { label: 'ROI Calculator', href: '/procurement#roi' },
  ],
  Company: [
    { label: 'About Lubrecision', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Request a Sample', href: '/contact?type=sample' },
  ],
  Resources: [
    { label: 'AORN Guidelines', href: '/science#aorn' },
    { label: 'Safety Data Sheet', href: '#' },
    { label: 'Instructions for Use', href: '#' },
    { label: 'Product Literature', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-navy-800/30 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-gold-900/10 to-transparent rounded-tr-full pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-white">
                Ready to optimize your OR?
              </h2>
              <p className="mt-3 text-slate-400 text-lg max-w-xl">
                Join the growing number of surgical teams switching to Lubrecision.
                Request a free sample or speak with our clinical specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?type=sample"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-all duration-300"
              >
                Request Free Sample
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-0.5" aria-label="Lubrecision home">
              <span className="text-xl font-semibold tracking-[0.18em] text-white">
                LUBRE
              </span>
              <span className="text-xl font-semibold tracking-[0.18em] text-gold-500">
                CISION
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              Next-generation anti-stick phospholipid solution engineered for
              precision electrosurgery. Reducing eschar, optimizing outcomes.
            </p>

            {/* Contact info */}
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href="mailto:info@lubrecision.com"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-gold-400 transition-colors"
              >
                <Mail size={14} className="text-gold-600" />
                info@lubrecision.com
              </a>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-gold-400 transition-colors"
              >
                <Phone size={14} className="text-gold-600" />
                1-800-555-1234
              </a>
              <span className="inline-flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin size={14} className="text-gold-600" />
                United States
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-500/80 mb-4">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Lubrecision. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Regulatory
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
