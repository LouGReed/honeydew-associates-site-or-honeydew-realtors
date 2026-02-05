'use client';

import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '@/config/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sections = siteConfig.navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Honeydew Home">
            <img
              src={siteConfig.logo}
              alt={siteConfig.businessName}
            />
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
              Get in Touch
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
            Get in Touch
          </a>
        </nav>
      </div>
    </>
  );
}
