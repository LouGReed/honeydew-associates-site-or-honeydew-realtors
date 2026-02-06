import { siteConfig } from '@/config/site';
import styles from './TrustStrip.module.css';

/**
 * TrustStrip — Type-only value proposition
 * "Sell first, gallery later" — placed after intro copy, before lifestyle images.
 * No icons, no cards, no background images. Just confident type.
 */

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Value proposition">
      <div className={`container ${styles.container}`}>
        <span className={styles.label}>Realtor-first make-ready</span>
        <ul className={styles.list}>
          <li>Fast turnarounds for listing deadlines</li>
          <li>Punch lists, paint, light improvements</li>
          <li>Daily updates. No surprises.</li>
        </ul>
        <a
          href={siteConfig.housecallProUrl}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a walkthrough &rarr;
        </a>
      </div>
    </section>
  );
}
