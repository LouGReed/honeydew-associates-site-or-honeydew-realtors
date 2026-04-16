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
          <li>Paint, repairs, installs, flooring, landscaping, and builds</li>
          <li>Fast turnarounds and sensitivity to listing deadlines</li>
          <li>Daily updates, line item invoices, no costly surprises</li>
        </ul>

        <div className={styles.ctaGroup}>
          <a
            href={siteConfig.housecallProUrl}
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a walkthrough →
          </a>
          <a
            href={siteConfig.smsHref}
            className={styles.cta}
            aria-label={`Text us at ${siteConfig.smsPhone}`}
          >
            Or text us →
          </a>
        </div>
      </div>
    </section>
  );
}
