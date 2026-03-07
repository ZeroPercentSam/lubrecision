import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lubrecision — Our Mission & Story',
  description:
    'Lubrecision is dedicated to surgical excellence through precision-engineered anti-stick solutions for electrosurgery. Learn about our mission, values, and unwavering commitment to solving eschar buildup — one critical problem, perfected.',
  openGraph: {
    title: 'About Lubrecision — Our Mission & Story',
    description:
      'Dedicated to surgical excellence. One company, one mission: eliminating eschar buildup on electrosurgical instruments through precision-engineered solutions.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
