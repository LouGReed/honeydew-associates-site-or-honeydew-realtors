'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { getHeroRotation, type ImageEntry } from '@/config/images';
import { siteConfig } from '@/config/site';
import styles from './HeroSlideshow.module.css';

const INTERVAL_MS = 4500;

export default function HeroSlideshow() {
  const slides: ImageEntry[] = getHeroRotation();
  const total = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  /* ── Reduced motion ─────────────────────────────────────── */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* ── Navigation helpers ─────────────────────────────────── */
  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(currentSlide + 1), [goTo, currentSlide]);
  const prev = useCallback(() => goTo(currentSlide - 1), [goTo, currentSlide]);

  /* Stop autoplay on any user interaction with controls */
  const userGoTo = useCallback(
    (index: number) => {
      setAutoplay(false);
      goTo(index);
    },
    [goTo],
  );

  const userNext = useCallback(() => {
    setAutoplay(false);
    next();
  }, [next]);

  const userPrev = useCallback(() => {
    setAutoplay(false);
    prev();
  }, [prev]);

  /* ── Auto-advance ───────────────────────────────────────── */
  useEffect(() => {
    if (!autoplay || prefersReducedMotion) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % total);
    }, INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, prefersReducedMotion, total]);

  /* ── Touch / swipe ──────────────────────────────────────── */
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const threshold = 50;
      if (Math.abs(dx) > threshold) {
        if (dx < 0) userNext();
        else userPrev();
      }
      touchStartX.current = null;
    },
    [userNext, userPrev],
  );

  return (
    <section
      className={`snap-section ${styles.hero}`}
      aria-label="Hero slideshow"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slides ──────────────────────────────── */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={encodeURI(slide.src)}
              alt={slide.alt}
              width={1920}
              height={1080}
              loading={index === 0 ? 'eager' : 'lazy'}
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: slide.position || 'center',
              }}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className={styles.gradientOverlay} aria-hidden="true" />
      </div>

      {/* ── Arrows (desktop) ────────────────────── */}
      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={userPrev}
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={userNext}
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Content — Bottom Left ───────────────── */}
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

        {/* Dots */}
        <div className={styles.indicators} role="tablist" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
              onClick={() => userGoTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
            />
          ))}
        </div>
      </div>

      {/* ── Scroll cue ──────────────────────────── */}
      <div className={styles.scrollCue} aria-hidden="true" />
    </section>
  );
}
