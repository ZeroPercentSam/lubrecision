import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lubecision.com"),
  title: {
    default: "Lubecision | Advanced Anti-Stick Solution for Electrosurgery",
    template: "%s | Lubecision",
  },
  description:
    "Lubecision is a next-generation anti-stick phospholipid solution engineered to eliminate eschar buildup on electrosurgical instruments. Reduce OR time, improve outcomes, and optimize every procedure.",
  keywords: [
    "anti-stick solution",
    "electrosurgical",
    "eschar prevention",
    "surgical instrument lubricant",
    "phospholipid solution",
    "operating room efficiency",
    "electrosurgery",
    "cautery tip cleaner",
    "AORN guidelines",
    "surgical anti-stick",
    "Lubecision",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lubecision.com",
    siteName: "Lubecision",
    title: "Lubecision | Advanced Anti-Stick Solution for Electrosurgery",
    description:
      "Next-generation anti-stick phospholipid solution engineered to eliminate eschar buildup. Trusted by surgical teams nationwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lubecision Anti-Stick Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lubecision | Advanced Anti-Stick Solution for Electrosurgery",
    description:
      "Next-generation anti-stick phospholipid solution engineered to eliminate eschar buildup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalDevice',
  name: 'Lubecision Anti-Stick Solution',
  description:
    'Next-generation anti-stick phospholipid solution engineered to eliminate eschar buildup on electrosurgical instruments.',
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubecision',
    url: 'https://lubecision.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-1234',
      contactType: 'sales',
      email: 'info@lubecision.com',
    },
  },
  url: 'https://lubecision.com/product',
  category: 'Electrosurgical Accessories',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F1B3D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-950 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
