'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './HeroSlideshow.module.css';

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteConfig.heroSlides;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className={styles.hero}>
      {/* Slides */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div
              className={styles.imageWrapper}
              style={{
                backgroundColor: slide.fit === 'contain' ? 'var(--color-bg-warm)' : undefined,
              }}
            >
              <Image
                src={slide.src}
                alt="Honeydew Homes project"
                fill
                priority={index === 0}
                sizes="100vw"
                style={{
                  objectFit: slide.fit,
                  objectPosition: slide.position,
                }}
              />
            </div>
            {/* Gradient overlay */}
            <div
              className={styles.overlay}
              style={{
                background: `linear-gradient(
                  to right,
                  rgba(0, 0, 0, ${slide.overlayStrength + 0.15}) 0%,
                  rgba(0, 0, 0, ${slide.overlayStrength}) 40%,
                  rgba(0, 0, 0, ${slide.overlayStrength * 0.6}) 100%
                )`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Fixed content overlay */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.headline}>
            Make-Ready Services for Homes That Need to Move.
          </h1>
          <p className={styles.subhead}>
            We help Austin realtors prepare homes for market with reliable, respectful,
            efficient contracting—so listings show well and move fast.
          </p>
          <div className={styles.ctas}>
            <Link
              href={siteConfig.housecallProUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Walkthrough
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-secondary">
              Call Us, Yes Ma&apos;am
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
