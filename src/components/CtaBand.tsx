import { siteConfig } from '@/config/site';
import styles from './CtaBand.module.css';

/**
 * Mid-page CTA — decision point between Services and How It Works.
 * "Housecall Pro should be unavoidable."
 */

export default function CtaBand() {
  return (
    <section className={styles.ctaBand} aria-label="Book a walkthrough">
      <div className={styles.container}>
        <a
          href={siteConfig.housecallProUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Walkthrough
        </a>
      </div>
    </section>
  );
}
