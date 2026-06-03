import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product — Anti-Stick Solution for Electrosurgery & Robotic Surgery',
  description:
    'Lubecision is an investigational single-use phospholipid anti-stick solution in development for electrosurgical and da Vinci robotic instrument tips. In development; pursuing FDA 510(k) clearance; not yet cleared or available for sale.',
  openGraph: {
    title: 'Lubecision Anti-Stick Solution',
    description:
      'An investigational single-use phospholipid anti-stick solution in development for electrosurgical and robotic instrument tips.',
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
