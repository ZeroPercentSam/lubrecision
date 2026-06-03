import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Request Information',
  description:
    'Request information about Lubecision, an investigational single-use anti-stick solution in development for electrosurgical and robotic instrument tips. We aim to respond within a few business days.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
