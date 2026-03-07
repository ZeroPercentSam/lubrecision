'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, ArrowRight, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Product
  {
    category: 'Product',
    question: 'What is Lubrecision?',
    answer:
      'Lubrecision is a precision-engineered anti-stick phospholipid solution designed for electrosurgical instruments. It is applied to electrode tips before a procedure to prevent eschar (burned tissue) buildup, reducing surgical pauses and optimizing OR time.',
  },
  {
    category: 'Product',
    question: 'What is Lubrecision made of?',
    answer:
      'Lubrecision is a non-toxic solution made from a biocompatible phospholipid — a naturally occurring fatty acid similar to what the human body produces. It is non-allergenic and designed to be safe for use in surgical environments.',
  },
  {
    category: 'Product',
    question: 'How does Lubrecision work?',
    answer:
      'Simply dip or apply the electrosurgical instrument tip into the Lubrecision solution using the included sterile foam pad before the procedure begins. The phospholipid formula creates an invisible molecular barrier on the electrode surface that prevents tissue from adhering, dramatically reducing eschar buildup throughout the case.',
  },
  {
    category: 'Product',
    question: 'What comes in each Lubrecision kit?',
    answer:
      'Each unit includes a sterile 4mL bottle of Lubrecision solution and a sterile foam application pad. Units are individually packaged for single-patient use and come in boxes of 20.',
  },
  // Usage
  {
    category: 'Usage',
    question: 'What types of procedures can Lubrecision be used in?',
    answer:
      'Lubrecision can be used in any procedure where electrosurgical devices are employed. This includes general surgery, ENT, OB/GYN, orthopedics, urology, plastic surgery, cardiothoracic, neurosurgery, dermatology, and pediatric surgery — among others.',
  },
  {
    category: 'Usage',
    question: 'What types of devices is Lubrecision compatible with?',
    answer:
      'Lubrecision is recommended for all standard electrosurgical devices including monopolar pencils, bipolar forceps, laparoscopic instruments, and robotic instruments. It is designed for use on uncoated instruments. As always, consult the device instructions for use prior to application.',
  },
  {
    category: 'Usage',
    question: 'Is Lubrecision single-use?',
    answer:
      'Yes. Each Lubrecision kit is sterile and designed for single-patient use. This ensures the highest level of sterility and compliance with perioperative best practices. Do not reuse or resterilize.',
  },
  {
    category: 'Usage',
    question: 'Does Lubrecision require any special training?',
    answer:
      'No. Lubrecision is designed for intuitive use with zero learning curve. Simply apply the solution to the instrument tip using the included foam pad before the procedure. The entire application takes under 5 seconds.',
  },
  // Safety & Compliance
  {
    category: 'Safety & Compliance',
    question: 'Is Lubrecision safe?',
    answer:
      'Yes. Lubrecision is made from a biocompatible phospholipid that is non-toxic and non-allergenic. It is similar to compounds naturally produced by the human body. The product is FDA registered and manufactured under strict quality controls.',
  },
  {
    category: 'Safety & Compliance',
    question: 'Is Lubrecision compliant with AORN Guidelines?',
    answer:
      'Yes. Lubrecision aligns with AORN Guideline 3.11.1 for Perioperative Practice, which states: "High-quality evidence supports the use of an anti-stick phospholipid solution to reduce surgical time." Using Lubrecision supports your facility\'s compliance with evidence-based perioperative standards.',
  },
  {
    category: 'Safety & Compliance',
    question: 'Is Lubrecision FDA registered?',
    answer:
      'Yes. Lubrecision is manufactured in an FDA-registered facility and complies with all applicable regulatory requirements for medical devices in its classification.',
  },
  // Ordering
  {
    category: 'Ordering',
    question: 'How do I order Lubrecision?',
    answer:
      'You can order Lubrecision directly through our sales team, through your Group Purchasing Organization (GPO), or through authorized distribution partners. Contact us at info@lubrecision.com or call 1-800-555-1234 for ordering details.',
  },
  {
    category: 'Ordering',
    question: 'Can I get a free sample before purchasing?',
    answer:
      'Absolutely. We offer complimentary evaluation kits so your surgical team can experience Lubrecision\'s performance firsthand. Each evaluation kit contains a full box of 20 units. Request yours on our Contact page.',
  },
  {
    category: 'Ordering',
    question: 'Is Lubrecision available through GPOs?',
    answer:
      'Yes. Lubrecision is compatible with major Group Purchasing Organizations. Contact our procurement team for information about GPO contracts and pricing agreements available for your facility.',
  },
  {
    category: 'Ordering',
    question: 'What is the shelf life and storage requirement?',
    answer:
      'Lubrecision should be stored at room temperature (15–30°C / 59–86°F). Please refer to the product labeling for specific shelf life information. Store in a clean, dry environment away from direct sunlight.',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];

function FAQAccordion({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={toggle}
        className="flex items-start justify-between gap-4 w-full py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-medium transition-colors duration-200 ${
            isOpen ? 'text-gold-600' : 'text-navy-900 group-hover:text-navy-700'
          }`}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown
            size={18}
            className={isOpen ? 'text-gold-500' : 'text-slate-400'}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed pr-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = faqs.filter((f) => {
    const matchesCategory =
      activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-white">
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,27,61,0.04) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <motion.nav
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/" className="hover:text-navy-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-navy-900 font-medium">FAQ</span>
          </motion.nav>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-navy-900">
              Frequently Asked{' '}
              <span className="text-gradient font-normal">Questions</span>
            </h1>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Everything you need to know about Lubrecision — from product details
              to ordering and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FAQ CONTENT ═══════════ */}
      <section className="relative bg-slate-50 section-padding">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Search */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-400 transition-all"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-950 text-gold-400 border-navy-950'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-navy-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            className="rounded-2xl bg-white border border-slate-100 px-6 md:px-8 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filtered.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-slate-400 text-sm">
                  No questions match your search. Try different keywords or{' '}
                  <Link
                    href="/contact"
                    className="text-gold-600 hover:text-gold-500 font-medium"
                  >
                    contact us directly
                  </Link>
                  .
                </p>
              </div>
            ) : (
              filtered.map((item, i) => (
                <FAQAccordion
                  key={item.question}
                  item={item}
                  isOpen={openIndex === i}
                  toggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative bg-white section-padding">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-navy-900">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Our clinical and sales teams are here to help. Reach out and
              we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide rounded-full bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              >
                Contact Us
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/contact?type=sample"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-navy-200 text-navy-900 hover:bg-navy-50 transition-all duration-300"
              >
                Request a Sample
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
