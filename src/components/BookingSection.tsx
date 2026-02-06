import { siteConfig } from '@/config/site';
import styles from './BookingSection.module.css';

/**
 * BookingSection — Full-bleed hero CTA with BBQ image background
 * Single conversion action: Book via Housecall Pro
 * Overlay gradient for text readability, left-aligned content.
 */

const BACKGROUND_IMAGE = '/assets/imagery/Pexel%20Assets/Honeydew%20Pexel%20Assets/Pexel%20Favorites%20for%20Honeydew/familyatbbq.jpg';

export default function BookingSection() {
  return (
    <section
      id="book"
      className={`snap-section ${styles.booking}`}
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      {/* Dark overlay gradient */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {/* Accent rule */}
          <div className={styles.accentRule} aria-hidden="true" />

          <span className={styles.eyebrow}>Ready to start?</span>
          <h2 className={styles.title}>Book a Walkthrough</h2>
          <p className={styles.subtitle}>
            Pick a time that works. We'll confirm quickly and handle the rest.
          </p>

          <div className={styles.ctaBlock}>
            <a
              href={siteConfig.housecallProUrl}
              className={`btn btn-primary ${styles.ctaBtn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Now
            </a>
            <p className={styles.microcopy}>
              2–3 minute booking. No calls needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
