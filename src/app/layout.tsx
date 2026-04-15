import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Honeydew Homes | Homes Ready. Listings Strong.',
  description:
    'Austin make-ready contractors specializing in pre-listing repairs and improvements for real estate professionals.',
  openGraph: {
    title: 'Honeydew Homes | Homes Ready. Listings Strong.',
    description:
      'Austin make-ready contractors specializing in pre-listing repairs and improvements for real estate professionals.',
    siteName: 'Honeydew Homes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honeydew Homes | Homes Ready. Listings Strong.',
    description:
      'Austin make-ready contractors specializing in pre-listing repairs and improvements for real estate professionals.',
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
            width: 96px;
            height: 96px;
            object-fit: contain;
            animation: hd-splash-pulse 1800ms ease-in-out infinite;
          }
          #honeydew-splash.hd-splash-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
          @keyframes hd-splash-pulse {
            0%, 100% { transform: scale(1); opacity: 0.85; }
            50% { transform: scale(1.04); opacity: 1; }
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
            src="/honeydew-associates-site-or-honeydew-realtors/img/brand/melon.png"
            alt=""
          />
        </div>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var hide = function() {
              var el = document.getElementById('honeydew-splash');
              if (el) el.classList.add('hd-splash-hidden');
            };
            if (document.readyState === 'complete') {
              setTimeout(hide, 400);
            } else {
              window.addEventListener('load', function() { setTimeout(hide, 400); });
            }
            // Failsafe — never leave splash up for more than 4s
            setTimeout(hide, 4000);
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
