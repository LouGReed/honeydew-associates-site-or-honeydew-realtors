import { siteConfig } from '@/config/site';
import { postValidationBand } from '@/config/pexels';
import styles from './BookingSection.module.css';

/**
 * BookingSection — Full-bleed CTA destination
 * BBQ image as background with booking overlay.
 * Single combined section, not stacked.
 */

export default function BookingSection() {
  return (
    <section
      id="book"
      className={`snap-section ${styles.booking}`}
      style={{ backgroundImage: `url(${encodeURI(postValidationBand.src)})` }}
    >
      {/* Dark overlay gradient */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
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
