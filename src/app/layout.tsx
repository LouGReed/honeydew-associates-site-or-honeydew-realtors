import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Austin Make-Ready Partner`,
  description: 'Pre-listing preparation and make-ready services for Austin real estate professionals. Homes ready. Listings strong.',
  keywords: ['Austin make-ready', 'pre-listing services', 'real estate prep', 'Austin contractor', 'home repairs'],
  openGraph: {
    title: `${siteConfig.businessName} | Austin Make-Ready Partner`,
    description: 'Pre-listing preparation and make-ready services for Austin real estate professionals.',
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
        <link rel="icon" href="/assets/brand/Honey Dew Logos/honeydewfinal.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
