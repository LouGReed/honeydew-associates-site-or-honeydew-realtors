import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Make-Ready Services for Austin Realtors`,
  description: 'We help Austin realtors prepare homes for market with reliable, respectful, efficient contracting—so listings show well and move fast.',
  keywords: ['Austin contractor', 'make-ready services', 'real estate prep', 'Compass realtor', 'home repairs Austin'],
  openGraph: {
    title: `${siteConfig.businessName} | Make-Ready Services for Austin Realtors`,
    description: 'We help Austin realtors prepare homes for market with reliable, respectful, efficient contracting.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/brand/Honey Dew Logos/Untitled design (19).png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
