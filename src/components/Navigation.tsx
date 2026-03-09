'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/product', label: 'Product' },
  { href: '/science', label: 'Science' },
  { href: '/surgeons', label: 'For Surgeons' },
  { href: '/procurement', label: 'For Procurement' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const isHome = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.92)'
            : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {/* Subtle bottom border on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          initial={false}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-0.5 group" aria-label="Lubecision home">
            <span
              className="text-[22px] font-semibold tracking-[0.18em] transition-colors duration-300"
              style={{ color: isScrolled || mobileOpen || !isHome ? '#0F1B3D' : '#ffffff' }}
            >
              LUBE
            </span>
            <span
              className="text-[22px] font-semibold tracking-[0.18em] transition-colors duration-300"
              style={{ color: '#D4A843' }}
            >
              CISION
            </span>
            {/* Precision dot */}
            <motion.span
              className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-gold-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-300 group"
                  style={{
                    color: isActive
                      ? '#D4A843'
                      : isScrolled || !isHome
                        ? '#434B65'
                        : 'rgba(255,255,255,0.85)',
                  }}
                >
                  {link.label}
                  {/* Active / Hover indicator */}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gold-500 transition-all duration-300"
                    style={{
                      width: isActive ? '60%' : '0%',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gold-300 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-[40%] w-0" />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?type=sample"
              className="relative px-5 py-2 text-[13px] font-semibold tracking-wide rounded-full border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#D4A843',
                color: isScrolled ? '#D4A843' : '#D4A843',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212,168,67,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Request Sample
            </Link>
            <Link
              href="/contact?type=quote"
              className="relative px-5 py-2 text-[13px] font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              style={{
                backgroundColor: '#D4A843',
                color: '#0F1B3D',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#DFBD6A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A843';
              }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-10 lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} color="#0F1B3D" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu
                    size={24}
                    color={isScrolled || !isHome ? '#0F1B3D' : '#ffffff'}
                    strokeWidth={1.5}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Decorative gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-100/60 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-navy-50/40 to-transparent rounded-tr-full" />

            <div className="flex flex-col justify-center items-center h-full px-8 pt-[72px]">
              <nav className="flex flex-col items-center gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05 + i * 0.06,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 text-center text-2xl font-light tracking-wide transition-colors duration-200"
                        style={{
                          color: isActive ? '#D4A843' : '#1A1F2E',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTAs */}
              <motion.div
                className="flex flex-col gap-3 mt-10 w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.35, ease: 'easeOut' }}
              >
                <Link
                  href="/contact?type=sample"
                  className="flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-gold-500 text-gold-600 hover:bg-gold-50 transition-colors duration-200"
                >
                  Request Sample
                </Link>
                <Link
                  href="/contact?type=quote"
                  className="flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </motion.div>

              {/* Bottom tagline */}
              <motion.p
                className="absolute bottom-8 text-[11px] tracking-[0.2em] text-slate-400 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Precision in Every Procedure
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
