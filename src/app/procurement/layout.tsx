import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Procurement — Evaluation & Evidence Information',
  description:
    'Information for procurement and supply-chain teams following Lubecision, an investigational single-use anti-stick solution in development for electrosurgical and robotic instrument tips. In development; pursuing FDA 510(k) clearance; not yet available for sale.',
  openGraph: {
    title: 'For Procurement — Evaluation & Evidence Information',
    description:
      'Information for procurement teams following Lubecision, an investigational anti-stick solution in development. In development; pursuing FDA 510(k) clearance.',
  },
};

export default function ProcurementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
