import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          {/* Left rail: logo + service areas share same left edge */}
          <div className={styles.leftRail}>
            <a href="/" className={styles.logoLink} aria-label={siteConfig.businessName}>
              <span className={styles.logoImage} role="img" aria-label={siteConfig.businessName} />
            </a>

            {/* Phone — prominent */}
            <a href={`tel:${siteConfig.smsPhoneE164}`} className={styles.phone}>
              {siteConfig.phone}
            </a>

            <div className={styles.areas}>
              <span className={styles.areasLabel}>Service Areas</span>
              <span className={styles.areasList}>
                {siteConfig.serviceAreas.join(' \u00B7 ')}
              </span>
            </div>
          </div>

          {/* Right: nav links */}
          <nav className={styles.nav} aria-label="Footer navigation">
            {siteConfig.navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.location}>Austin, Texas</p>
          <a
            href="https://g.page/r/CQBiPArxLimYEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewLink}
          >
            How did we Honeydew? Leave a review &rarr;
          </a>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}
          </p>
        </div>
      </div>
    </footer>
  );
}
