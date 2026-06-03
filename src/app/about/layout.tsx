import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lubecision — Our Mission & Story',
  description:
    'Lubecision is a focused company developing an investigational single-use phospholipid anti-stick solution for electrosurgical and robotic instrument tips. Learn about our mission, our team, and our work toward FDA 510(k) clearance.',
  openGraph: {
    title: 'About Lubecision — Our Mission & Story',
    description:
      'A focused company developing an investigational anti-stick solution for electrosurgical and robotic instrument tips. In development; pursuing FDA 510(k) clearance.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
