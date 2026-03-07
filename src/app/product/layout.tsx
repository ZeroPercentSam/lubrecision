import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product — Anti-Stick Solution for Electrosurgery',
  description:
    'Lubrecision is a precision-engineered phospholipid anti-stick solution that eliminates eschar buildup on electrosurgical instruments. Sterile, single-use, biocompatible, AORN compliant.',
  openGraph: {
    title: 'Lubrecision Anti-Stick Solution',
    description:
      'Precision-engineered phospholipid formula for electrosurgical instruments. Sterile, single-use, biocompatible.',
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
