import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Science & Technology — The Phospholipid Anti-Stick Approach',
  description:
    'Explore the phospholipid science behind Lubecision and the published research on anti-stick solutions as a product class, with context on AORN surgical-energy-safety guidance. In development; pursuing FDA 510(k) clearance.',
  openGraph: {
    title: 'Science & Technology — Lubecision',
    description:
      'The phospholipid science behind Lubecision and published research on the anti-stick product class. In development; pursuing FDA 510(k) clearance.',
  },
};

export default function ScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
