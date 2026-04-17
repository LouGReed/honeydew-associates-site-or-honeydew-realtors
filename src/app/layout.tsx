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
