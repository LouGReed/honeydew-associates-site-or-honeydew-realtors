'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { getHeroRotation, type ImageEntry } from '@/config/images';
import { siteConfig } from '@/config/site';
import styles from './HeroSlideshow.module.css';

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slides: ImageEntry[] = getHeroRotation();

  /* ── Detect prefers-reduced-motion ─────────────────────────── */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* ── Auto-advance ──────────────────────────────────────────── */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, isPaused, prefersReducedMotion]);

  return (
    <section
      className={`snap-section ${styles.hero}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero slideshow"
    >
      {/* Slides */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              loading={index === 0 ? 'eager' : 'lazy'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: slide.position || 'center',
              }}
            />
          </div>
        ))}

        {/* Gradient overlay for text legibility -- bottom-left darker */}
        <div className={styles.gradientOverlay} aria-hidden="true" />
      </div>

      {/* Content -- Bottom Left */}
      <div className={styles.content}>
        <span className={`eyebrow ${styles.eyebrow}`}>
          {siteConfig.tagline}
        </span>

        <h1 className={styles.headline}>
          Homes Ready. Listings Strong.
        </h1>

        <p className={styles.subhead}>
          Pre-listing preparation and make-ready services for Austin real estate professionals.
        </p>

        {/* Slide indicators -- tiny dots below text block */}
        <div className={styles.indicators} role="tablist" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue -- thin line at bottom center */}
      <div className={styles.scrollCue} aria-hidden="true" />
    </section>
  );
}
