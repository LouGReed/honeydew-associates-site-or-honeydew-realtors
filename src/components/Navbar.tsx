'use client';

import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '@/config/site';
import BrandLogo from './BrandLogo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detect when user scrolls past the hero.
  // .snap-main is the scroll container (overflow-y: auto), so we listen
  // to its scroll event and compare scrollTop against the sentinel position.
  useEffect(() => {
    const scrollRoot = document.querySelector('.snap-main');
    const sentinel = document.getElementById('hero-sentinel');
    if (!scrollRoot || !sentinel) return;

    const check = () => {
      const sentinelRect = sentinel.getBoundingClientRect();
      const rootRect = scrollRoot.getBoundingClientRect();
      // Sentinel is at hero bottom; when its top is above the nav height, we've scrolled past
      setScrolledPastHero(sentinelRect.top < rootRect.top + 96);
    };

    // Check on mount
    check();

    scrollRoot.addEventListener('scroll', check, { passive: true });
    return () => scrollRoot.removeEventListener('scroll', check);
  }, []);

  // Active section tracking via scroll position
  useEffect(() => {
    const scrollRoot = document.querySelector('.snap-main');
    const sections = siteConfig.navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (sections.length === 0 || !scrollRoot) return;

    const check = () => {
      const rootRect = scrollRoot.getBoundingClientRect();
      const trigger = rootRect.top + rootRect.height * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= trigger) {
          setActiveSection(`#${sections[i].id}`);
          return;
        }
      }
    };

    check();
    scrollRoot.addEventListener('scroll', check, { passive: true });
    return () => scrollRoot.removeEventListener('scroll', check);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolledPastHero ? styles.scrolled : ''}`}
      >
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Honeydew Home">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  activeSection === link.href ? styles.navLinkActive : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={styles.actions}>
            <a
              href={siteConfig.housecallProUrl}
              className={`btn btn-primary ${styles.ctaBtn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Walkthrough
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`${styles.hamburger} ${
                mobileMenuOpen ? styles.open : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                activeSection === link.href ? styles.mobileNavLinkActive : ''
              }`}
              onClick={handleNavClick}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.housecallProUrl}
            className={`btn btn-primary ${styles.mobileCta}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Book a Walkthrough
          </a>
        </nav>
      </div>
    </>
  );
}
