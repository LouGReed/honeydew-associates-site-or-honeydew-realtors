'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './HeroSlideshow.module.css';

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slides = siteConfig.heroSlides;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
      className={styles.hero}
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
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: slide.position,
              }}
            />
          </div>
        ))}

        {/* Gradient overlay for text legibility - bottom-left focused */}
        <div className={styles.gradientOverlay} aria-hidden="true" />
      </div>

      {/* Content - Bottom Left */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <span className={`eyebrow ${styles.eyebrow}`}>
            {siteConfig.tagline}
          </span>
          <h1 className={styles.headline}>
            Homes Ready. Listings Strong.
          </h1>
          <p className={styles.subhead}>
            Pre-listing preparation and make-ready services for Austin real estate professionals.
          </p>
        </div>
      </div>

      {/* Slide indicators - discreet dots */}
      <div className={styles.indicators} aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Scroll cue - subtle line */}
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
