import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Common questions about Lubrecision anti-stick solution for electrosurgery. Learn about usage, compatibility, safety, ordering, and AORN compliance.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Lubrecision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubrecision is a precision-engineered anti-stick phospholipid solution designed for electrosurgical instruments. It is applied to electrode tips before a procedure to prevent eschar buildup, reducing surgical pauses and optimizing OR time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Lubrecision work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply dip or apply the electrosurgical instrument tip into the Lubrecision solution using the included sterile foam pad before the procedure begins. The phospholipid formula creates an invisible molecular barrier on the electrode surface that prevents tissue from adhering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubrecision compliant with AORN Guidelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lubrecision aligns with AORN Guideline 3.11.1 for Perioperative Practice, which supports the use of an anti-stick phospholipid solution to reduce surgical time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubrecision safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lubrecision is made from a biocompatible phospholipid that is non-toxic and non-allergenic. The product is FDA registered and manufactured under strict quality controls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a free sample before purchasing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. We offer complimentary evaluation kits so your surgical team can experience Lubrecision's performance firsthand. Each evaluation kit contains a full box of 20 units.",
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
