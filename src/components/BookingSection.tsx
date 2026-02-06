import { siteConfig } from '@/config/site';
import styles from './BookingSection.module.css';

/**
 * BookingSection — Final CTA before footer
 * Single conversion action: Book via Housecall Pro
 * No contact form. Clean, confident, minimal.
 */

export default function BookingSection() {
  return (
    <section id="book" className={`snap-section ${styles.booking}`}>
      <div className={`container ${styles.container}`}>
        <header className={styles.content}>
          <span className="eyebrow">Ready to start?</span>
          <h2 className={styles.title}>Book a Walkthrough</h2>
          <p className={styles.subtitle}>
            Pick a time that works. We'll confirm quickly and handle the rest.
          </p>
        </header>

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
    </section>
  );
}
