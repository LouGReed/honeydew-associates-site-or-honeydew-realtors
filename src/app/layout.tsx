import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import './globals.css';

const BASE_URL = 'https://lougreed.github.io/honeydew-associates-site-or-honeydew-realtors';

export const metadata: Metadata = {
  title: 'Honeydew Homes | Homes Ready. Listings Strong.',
  description:
    'Austin make-ready contractors specializing in pre-listing repairs and improvements for real estate professionals.',
  icons: {
    icon: '/honeydew-associates-site-or-honeydew-realtors/img/brand/honeydewlogo.png',
  },
  openGraph: {
    title: 'Honeydew Homes | Homes Ready. Listings Strong.',
    description: 'Austin make-ready contractors specializing in pre-listing repairs and improvements for real estate professionals.',
    url: BASE_URL,
    siteName: 'Honeydew Homes',
    images: [
      {
        url: `${BASE_URL}/assets/imagery/Pexel%20Assets/Honeydew%20Pexel%20Assets/Pexel%20Favorites%20for%20Honeydew/slideshow/order/01.jpg`,
        width: 1200,
        height: 630,
        alt: 'Austin home — warm living space',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honeydew Homes | Homes Ready. Listings Strong.',
    description: 'Austin make-ready contractors specializing in pre-listing repairs and improvements for real estate professionals.',
    images: [`${BASE_URL}/assets/imagery/Pexel%20Assets/Honeydew%20Pexel%20Assets/Pexel%20Favorites%20for%20Honeydew/slideshow/order/01.jpg`],
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
