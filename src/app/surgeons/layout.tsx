import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Surgeons — Electrosurgical & Robotic Workflow',
  description:
    'Lubecision is an investigational single-use phospholipid anti-stick solution in development, designed to address eschar and tissue sticking on electrosurgical and robotic instrument tips. In development; pursuing FDA 510(k) clearance; not yet cleared or available for sale.',
  openGraph: {
    title: 'For Surgeons — Electrosurgical & Robotic Workflow',
    description:
      'An investigational phospholipid anti-stick solution in development, designed to address eschar and tissue sticking on instrument tips.',
  },
};

export default function SurgeonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
