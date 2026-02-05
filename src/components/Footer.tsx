import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          {/* Left rail: logo + service areas share same left edge */}
          <div className={styles.leftRail}>
            <a href="/" className={styles.logoText} aria-label="Honeydew Home">
              Honeydew Homes
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
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}
          </p>
        </div>
      </div>
    </footer>
  );
}
