import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <Link href="/" className={styles.logo} aria-label="Honeydew Home">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.businessName}
              width={120}
              height={35}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <nav className={styles.nav} aria-label="Footer navigation">
            {siteConfig.footerLinks.navigation.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.location}>Austin, Texas</p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {siteConfig.businessName}
          </p>
        </div>
      </div>
    </footer>
  );
}
