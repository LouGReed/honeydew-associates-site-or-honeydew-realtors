import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import './globals.css';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://honeydew-homes.com/#business',
      name: 'Honeydew Homes',
      alternateName: 'Honeydew',
      description:
        'Austin general contractor serving realtors and homeowners. Make-ready turnovers, repairs, paint, installs, landscaping, and more.',
      url: 'https://honeydew-homes.com',
      telephone: '+15127169176',
      email: 'honeydewzack@gmail.com',
      image: 'https://honeydew-homes.com/img/brand/honeydewlogo.png',
      logo: 'https://honeydew-homes.com/img/brand/honeydewlogo.png',
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Check',
      areaServed: [
        { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Round Rock', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Cedar Park', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Georgetown', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Pflugerville', containedInPlace: { '@type': 'State', name: 'Texas' } },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.2672,
        longitude: -97.7431,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Home Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Make-Ready & Turnovers', description: 'Get a home listing ready before it hits the market.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Repairs & Punch Lists', description: 'General home repairs and punch list completion.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint & Wall Repair', description: 'Wall flattening, interior and exterior paint.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installs & Improvements', description: 'Appliances, fixtures, water filtration systems.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscaping & Nursery Services', description: 'Landscaping, mulching, tree selection and planting.' } },
        ],
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://honeydew-homes.com/#website',
      url: 'https://honeydew-homes.com',
      name: 'Honeydew Homes',
      publisher: { '@id': 'https://honeydew-homes.com/#business' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://honeydew-homes.com/#webpage',
      url: 'https://honeydew-homes.com',
      name: 'Honeydew Homes | Austin General Contractor',
      isPartOf: { '@id': 'https://honeydew-homes.com/#website' },
      about: { '@id': 'https://honeydew-homes.com/#business' },
      description:
        'Full service contracting for the houses and the people that make Austin home.',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://honeydew-homes.com'),
  title: 'Honeydew Homes | Austin General Contractor — Make-Ready, Repairs, Paint & More',
  description:
    'Austin general contractor serving realtors and homeowners. Make-ready turnovers, repairs, paint, installs, landscaping, and more across Austin, Round Rock, Cedar Park, Georgetown, and Pflugerville. Free walkthrough and transparent quoting.',
  keywords: [
    'Austin general contractor',
    'Austin make-ready contractor',
    'Austin home repairs',
    'Austin handyman services',
    'make-ready services Austin TX',
    'pre-listing contractor Austin',
    'Austin painter',
    'home improvement Austin Texas',
    'Austin landscaping services',
    'Austin appliance installation',
    'general contractor Round Rock',
    'general contractor Cedar Park',
    'contractor near me Austin',
  ],
  alternates: {
    canonical: 'https://honeydew-homes.com',
  },
  openGraph: {
    title: 'Honeydew Homes | Austin General Contractor',
    description:
      'Full service contracting for Austin realtors and homeowners. Make-ready turnovers, repairs, paint, installs, landscaping, and more. Free walkthrough.',
    siteName: 'Honeydew Homes',
    locale: 'en_US',
    type: 'website',
    url: 'https://honeydew-homes.com',
    images: [
      {
        url: '/img/brand/honeydewlogo.png',
        width: 600,
        height: 600,
        alt: 'Honeydew Homes — Austin General Contractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honeydew Homes | Austin General Contractor',
    description:
      'Full service contracting for Austin realtors and homeowners. Make-ready, repairs, paint, installs, landscaping, and more.',
    images: ['/img/brand/honeydewlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZE6J3VS0L0" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZE6J3VS0L0');
        ` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Splash: shows instantly (before React hydrates), then fades.
            Uses inline styles/script so it works before any JS/CSS loads. */}
        <style dangerouslySetInnerHTML={{ __html: `
          #honeydew-splash {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FDFBF7;
            opacity: 1;
            transition: opacity 600ms ease 200ms, visibility 0ms 800ms;
          }
          #honeydew-splash img {
            width: 112px;
            height: 112px;
            object-fit: contain;
            transform-origin: center 60%;
            animation:
              hd-melon-tumble 1400ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
              hd-melon-idle 2400ms ease-in-out 1400ms infinite;
          }
          #honeydew-splash.hd-splash-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
          /* Tumble entrance: drops diagonally from upper-left, bounces, settles center */
          @keyframes hd-melon-tumble {
            0%   { transform: translate(-40vw, -110vh) rotate(-540deg) scale(0.9); opacity: 0; }
            25%  { opacity: 1; }
            65%  { transform: translate(0, 0) rotate(15deg) scale(1); }
            75%  { transform: translate(0, -18px) rotate(-8deg) scale(1.02); }
            85%  { transform: translate(0, 0) rotate(4deg) scaleY(0.94) scaleX(1.06); }
            92%  { transform: translate(0, -4px) rotate(-2deg) scale(1); }
            100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
          }
          /* Idle breathing after landing */
          @keyframes hd-melon-idle {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            50%      { transform: translateY(-3px) rotate(-1deg) scale(1.02); }
          }
          @media (prefers-reduced-motion: reduce) {
            #honeydew-splash img { animation: none; }
            #honeydew-splash { transition: opacity 200ms ease; }
          }
        ` }} />
      </head>
      <body>
        <div id="honeydew-splash" aria-hidden="true">
          <img
            src="/img/brand/melon.png"
            alt=""
          />
        </div>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var hide = function() {
              var el = document.getElementById('honeydew-splash');
              if (el) el.classList.add('hd-splash-hidden');
            };
            // Minimum display time so the tumble animation (1.4s) has time to play
            var MIN_SHOW_MS = 1700;
            var startedAt = Date.now();
            var hideWhenReady = function() {
              var elapsed = Date.now() - startedAt;
              var remaining = Math.max(0, MIN_SHOW_MS - elapsed);
              setTimeout(hide, remaining);
            };
            if (document.readyState === 'complete') {
              hideWhenReady();
            } else {
              window.addEventListener('load', hideWhenReady);
            }
            // Failsafe — never leave splash up for more than 5s
            setTimeout(hide, 5000);
          })();
        ` }} />
        <Navbar />
        <main className="snap-main">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
