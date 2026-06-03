'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, ArrowRight, Search } from 'lucide-react';
import { FDA_STATUS_LINE, MANUFACTURING_INTENT, AORN_NOTE } from '@/lib/compliance';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Product
  {
    category: 'Product',
    question: 'What is Lubecision?',
    answer:
      'Lubecision is a precision-engineered anti-stick phospholipid solution designed for electrosurgical instruments. It is intended to be applied to electrode tips before a procedure with the goal of reducing eschar (burned tissue) buildup. Its performance has not been established by the FDA.',
  },
  {
    category: 'Product',
    question: 'What is Lubecision made of?',
    answer:
      'Lubecision is formulated from a phospholipid — a naturally occurring class of molecule similar to compounds the human body produces. It is being developed for use in surgical environments; its biocompatibility and safety profile are being evaluated as part of the regulatory process and have not been established by the FDA.',
  },
  {
    category: 'Product',
    question: 'How does Lubecision work?',
    answer:
      'The electrosurgical instrument tip is dipped or coated using the included sterile foam pad before the procedure begins. The phospholipid formula is designed to form a thin layer on the electrode surface intended to reduce tissue adhesion and eschar buildup during the case. This proposed mechanism has not been evaluated by the FDA.',
  },
  {
    category: 'Product',
    question: 'What comes in each Lubecision kit?',
    answer:
      'Each unit includes a sterile 4mL bottle of Lubecision solution and a sterile foam application pad. Units are individually packaged for single-patient use and come in boxes of 20.',
  },
  // Usage
  {
    category: 'Usage',
    question: 'What types of procedures can Lubecision be used in?',
    answer:
      'Lubecision is intended for use with common electrosurgical instruments across a range of surgical specialties, such as general surgery, ENT, OB/GYN, orthopedics, urology, plastic surgery, cardiothoracic, neurosurgery, dermatology, and pediatric surgery. Cleared indications for use are subject to FDA clearance.',
  },
  {
    category: 'Usage',
    question: 'What types of devices is Lubecision compatible with?',
    answer:
      'Lubecision is intended for use with common electrosurgical instruments such as monopolar pencils, bipolar forceps, laparoscopic instruments, and robotic instruments. It is designed for use on uncoated instruments. Cleared indications for use are subject to FDA clearance. As always, consult the device instructions for use prior to application.',
  },
  {
    category: 'Usage',
    question: 'Is Lubecision single-use?',
    answer:
      'Yes. Each Lubecision kit is sterile and designed for single-patient use. This ensures the highest level of sterility and compliance with perioperative best practices. Do not reuse or resterilize.',
  },
  {
    category: 'Usage',
    question: 'Does Lubecision require any special training?',
    answer:
      'No. Lubecision is designed for intuitive use with zero learning curve. Simply apply the solution to the instrument tip using the included foam pad before the procedure. The entire application takes under 5 seconds.',
  },
  // Safety & Compliance
  {
    category: 'Safety & Compliance',
    question: 'Is Lubecision FDA cleared?',
    answer: FDA_STATUS_LINE,
  },
  {
    category: 'Safety & Compliance',
    question: 'When will Lubecision be commercially available?',
    answer:
      'Lubecision is in development and is not yet available for sale. Commercial availability would follow FDA 510(k) clearance; no launch date is confirmed. You are welcome to register interest so we can share general updates as the program progresses.',
  },
  {
    category: 'Safety & Compliance',
    question: 'Is Lubecision safe?',
    answer:
      'Lubecision is formulated from a phospholipid similar to compounds naturally produced by the human body. Its safety profile is being evaluated as part of the FDA 510(k) process and has not yet been established. ' +
      MANUFACTURING_INTENT,
  },
  {
    category: 'Safety & Compliance',
    question: 'Is Lubecision aligned with AORN Guidelines?',
    answer: AORN_NOTE,
  },
  {
    category: 'Safety & Compliance',
    question: 'Who manufactures Lubecision?',
    answer:
      MANUFACTURING_INTENT +
      ' A manufacturing partner has not yet been finalized. Upon production, units are intended to ship with lot traceability and standard medical-device documentation.',
  },
  // Robotic Surgery
  {
    category: 'Robotic Surgery',
    question: 'Can Lubecision be used with da Vinci® robotic surgical systems?',
    answer:
      'Lubecision is designed for use with da Vinci® robotic instruments, including those used on the Si, Xi, SP, and Ion platforms. Robotic instruments typically lack anti-stick coatings, and cleaning them mid-procedure requires removing them from ports — a more disruptive process than in open surgery. Compatibility and cleared indications are subject to FDA clearance.',
  },
  {
    category: 'Robotic Surgery',
    question: 'How do I apply Lubecision to robotic instruments?',
    answer:
      'Lubecision is intended to be applied to the electrosurgical instrument tips before docking the robotic arms. Dip or coat the instrument tips using the sterile foam applicator pad included in each kit. The application takes seconds and the phospholipid layer is intended to remain present during the procedure.',
  },
  {
    category: 'Robotic Surgery',
    question: 'Why is anti-stick protection especially important for robotic surgery?',
    answer:
      'In robotic surgery, the surgeon operates from a console and is physically separated from the patient. When eschar builds up on instrument tips, cleaning requires undocking and removing instruments from the ports — a process that can take several minutes and disrupt surgical flow. Lubecision is being developed to address these challenges with a single pre-operative application. Its effect on these outcomes has not been established by the FDA.',
  },
  {
    category: 'Robotic Surgery',
    question: 'Does Lubecision help with capacitive coupling concerns in robotic instruments?',
    answer:
      'Eschar buildup on instrument tips can create insulation that contributes to stray energy events and capacitive coupling — a known safety concern in robotic electrosurgery. By being designed to reduce eschar accumulation, Lubecision aims to support more consistent current flow. Whether it affects these events has not been established and is being evaluated as part of the regulatory process.',
  },
  // Ordering
  {
    category: 'Ordering',
    question: 'How do I order Lubecision?',
    answer:
      'Lubecision is in development, is not yet cleared by the FDA, and is not available for sale. We are not taking orders at this time. You are welcome to contact us at info@lubecision.com to register interest and receive general updates as the program progresses.',
  },
  {
    category: 'Ordering',
    question: 'Can I get a free sample or evaluation kit?',
    answer:
      'Not at this time. Because Lubecision is in development and has not been cleared by the FDA, samples and evaluation kits are not being distributed. We are happy to add you to our list for general updates — reach out via our Contact page.',
  },
  {
    category: 'Ordering',
    question: 'Is Lubecision available through GPOs?',
    answer:
      'Not yet. Lubecision is in development and has no executed Group Purchasing Organization agreements. GPO availability and pricing would follow FDA clearance. You are welcome to contact us to register interest for future updates.',
  },
  {
    category: 'Ordering',
    question: 'What is the shelf life and storage requirement?',
    answer:
      'Lubecision should be stored at room temperature (15–30°C / 59–86°F). Please refer to the product labeling for specific shelf life information. Store in a clean, dry environment away from direct sunlight.',
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
              Everything you need to know about Lubecision — from product details
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
              we aim to respond within a few business days.
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
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide rounded-full border border-navy-200 text-navy-900 hover:bg-navy-50 transition-all duration-300"
              >
                Request Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
