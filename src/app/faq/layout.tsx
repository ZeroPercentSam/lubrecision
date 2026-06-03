import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Common questions about Lubecision, an investigational anti-stick solution in development for electrosurgery. Usage, compatibility, safety, development status, and AORN surgical-energy-safety guidance.',
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
        text: 'Lubecision is a precision-engineered anti-stick phospholipid solution designed for electrosurgical instruments. It is intended to be applied to electrode tips before a procedure with the goal of reducing eschar buildup. Its performance has not been established by the FDA.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Lubecision work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The electrosurgical instrument tip is dipped or coated using the included sterile foam pad before the procedure begins. The phospholipid formula is designed to form a thin layer on the electrode surface intended to reduce tissue adhesion. This proposed mechanism has not been evaluated by the FDA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubecision aligned with AORN Guidelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Designed with AORN surgical-energy-safety guidance in mind. AORN does not endorse or approve specific products.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubecision FDA cleared?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubecision is an investigational device in development. We are pursuing FDA 510(k) clearance. It has not been cleared or approved by the FDA and is not available for sale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lubecision safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubecision is formulated from a phospholipid similar to compounds naturally produced by the human body. Its safety profile is being evaluated as part of the FDA 510(k) process and has not yet been established. Lubecision is intended to be manufactured under cGMP and ISO 13485 quality systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a free sample or evaluation kit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at this time. Because Lubecision is in development and has not been cleared by the FDA, samples and evaluation kits are not being distributed. We are happy to add you to our list for general updates.',
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
