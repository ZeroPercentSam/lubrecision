import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Science & Technology — Clinical Evidence for Anti-Stick Solutions',
  description:
    'Explore the clinical evidence, AORN guideline compliance, and phospholipid science behind Lubecision anti-stick solution for electrosurgery. Published studies, performance data, and safety profile.',
  openGraph: {
    title: 'Science & Technology — Lubecision',
    description:
      'Clinical evidence, AORN compliance, and phospholipid science supporting Lubecision anti-stick solution for electrosurgical instruments.',
  },
};

export default function ScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
