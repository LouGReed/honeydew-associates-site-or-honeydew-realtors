import { siteConfig } from '@/config/site';
import styles from './TrustStrip.module.css';

/**
 * TrustStrip — "Operating system" block
 * How we work + bullets + inline CTA
 */

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="How we work">
      <div className={`container ${styles.container}`}>
        {/* Gold rule motif */}
        <div className={styles.rule} aria-hidden="true" />

        <span className={styles.label}>How we work</span>

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
          Book a walkthrough →
        </a>
      </div>
    </section>
  );
}
