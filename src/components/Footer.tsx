import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Logo & Tagline */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src={siteConfig.logo}
                alt={siteConfig.businessName}
                width={160}
                height={45}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className={styles.tagline}>
              Make-ready contracting for Austin&apos;s real estate professionals.
            </p>
          </div>

          {/* About Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>About</h4>
            <nav className={styles.columnNav}>
              {siteConfig.footerNav.about.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <nav className={styles.columnNav}>
              {siteConfig.footerNav.services.map((link, index) => (
                <Link key={index} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <nav className={styles.columnNav}>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className={styles.link}>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className={styles.link}>
                {siteConfig.email}
              </a>
              {siteConfig.footerNav.contact.map((link, index) => (
                <Link key={index} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Service Areas</h4>
            <div className={styles.areas}>
              {siteConfig.footerNav.serviceAreas.map((area) => (
                <span key={area} className={styles.area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {siteConfig.businessName} &mdash; Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
