import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>Ready to Get Started?</h2>
          <p className={styles.body}>
            Tell us about the home and we&apos;ll take it from there.
          </p>
          <Link
            href={siteConfig.housecallProUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Online in Minutes
          </Link>
        </div>
      </div>
    </section>
  );
}
