import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Honeydew | Austin Make-Ready Partner',
  description:
    'Pre-listing preparation and make-ready services for Austin real estate professionals. Homes ready. Listings strong.',
  icons: {
    icon: '/honeydew-associates-site-or-honeydew-realtors/img/brand/honeydewlogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="snap-main">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
