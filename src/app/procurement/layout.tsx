import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Procurement — ROI Analysis & Cost Savings',
  description:
    'Quantify the cost of eschar in your OR. Lubecision delivers measurable cost optimization, documented ROI, full compliance documentation, and streamlined procurement for surgical anti-stick solutions.',
  openGraph: {
    title: 'For Procurement — ROI Analysis & Cost Savings',
    description:
      'Calculate OR cost savings with Lubecision. FDA registered, AORN compliant, GPO compatible. Request volume pricing and free evaluation kits.',
  },
};

export default function ProcurementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
