import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Request a Sample or Quote',
  description:
    'Request a free Lubrecision evaluation kit, get a volume quote, or speak with our clinical team. We respond within 24 hours.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
