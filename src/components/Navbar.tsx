'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.businessName}
              width={180}
              height={50}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={`btn ${scrolled ? 'btn-outline' : 'btn-secondary'} ${styles.getInTouch}`}
            >
              Get in Touch
            </Link>
            <Link
              href={siteConfig.housecallProUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Walkthrough
            </Link>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteConfig.housecallProUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '24px' }}
          >
            Book a Walkthrough
          </Link>
        </nav>
      </div>

      {/* Mobile Sticky CTA */}
      <div className={styles.mobileStickyCta}>
        <Link
          href={siteConfig.housecallProUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '100%' }}
        >
          Book a Walkthrough
        </Link>
      </div>
    </>
  );
}
