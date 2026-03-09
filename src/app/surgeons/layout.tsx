import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Surgeons — Optimize Your Electrosurgical Workflow',
  description:
    'Lubecision eliminates eschar buildup to deliver uninterrupted electrosurgical performance. Reduce case times by up to 40 minutes, maintain consistent current flow, and optimize your procedural workflow with a single pre-operative application.',
  openGraph: {
    title: 'For Surgeons — Optimize Your Electrosurgical Workflow',
    description:
      'Eliminate eschar buildup, reduce surgical pauses, and maintain uninterrupted procedural focus with Lubecision anti-stick solution.',
  },
};

export default function SurgeonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
