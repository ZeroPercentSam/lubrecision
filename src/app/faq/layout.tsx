import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Common questions about Lubecision anti-stick solution for electrosurgery. Learn about usage, compatibility, safety, ordering, and AORN compliance.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Lubecision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubecision is a precision-engineered anti-stick phospholipid solution designed for electrosurgical instruments. It is applied to electrode tips before a procedure to prevent eschar buildup, reducing surgical pauses and optimizing OR time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Lubecision work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply dip or apply the electrosurgical instrument tip into the Lubecision solution using the included sterile foam pad before the procedure begins. The phospholipid formula creates an invisible molecular barrier on the electrode surface that prevents tissue from adhering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubecision aligned with AORN Guidelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AORN Perioperative Practice Guidelines recognize anti-stick lubricants as part of electrosurgical safety and instrument-care best practice. Lubecision is designed to support facilities’ alignment with those guidelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubecision FDA cleared?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubecision is currently in the FDA 510(k) submission process via a predicate-based pathway. Anticipated clearance Q4 2026. Evaluation samples are available to qualified surgical teams pending clearance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubecision safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubecision is made from a biocompatible phospholipid that is non-toxic and non-allergenic — similar to compounds naturally produced by the human body. It is manufactured under cGMP and ISO 13485 standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a free sample before purchasing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. We offer complimentary evaluation kits so your surgical team can experience Lubecision's performance firsthand. Each evaluation kit contains a full box of 20 units.",
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
