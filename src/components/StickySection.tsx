'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import styles from './StickySection.module.css';

interface StickySectionProps {
  children: ReactNode;
  /** Background image source */
  backgroundImage?: string;
  /** Alt text for background image */
  backgroundAlt?: string;
  /** Background color (CSS value) */
  backgroundColor?: string;
  /** Scroll height multiplier: 'short' (140vh), 'medium' (180vh), 'long' (220vh) */
  scrollHeight?: 'short' | 'medium' | 'long';
  /** Content position within the sticky panel */
  contentPosition?: 'bottom-left' | 'center' | 'bottom-center';
  /** Apply gradient overlay for text legibility */
  overlay?: 'dark-bottom' | 'dark-full' | 'none';
  /** Section ID for anchor navigation */
  id?: string;
  /** Aria label for the section */
  ariaLabel?: string;
  /** Additional class for the wrapper */
  className?: string;
  /** Z-index for stacking order */
  zIndex?: number;
}

export default function StickySection({
  children,
  backgroundImage,
  backgroundAlt = '',
  backgroundColor,
  scrollHeight = 'medium',
  contentPosition = 'bottom-left',
  overlay = 'none',
  id,
  ariaLabel,
  className = '',
  zIndex = 1,
}: StickySectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const wrapperClasses = [
    styles.wrapper,
    styles[`scroll${scrollHeight.charAt(0).toUpperCase() + scrollHeight.slice(1)}`],
    prefersReducedMotion ? styles.reducedMotion : '',
    className,
  ].filter(Boolean).join(' ');

  const panelClasses = [
    styles.panel,
    styles[`content${contentPosition.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}`],
  ].join(' ');

  const overlayClass = overlay !== 'none' ? styles[`overlay${overlay.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}`] : '';

  return (
    <div
      className={wrapperClasses}
      style={{ '--sticky-z-index': zIndex } as React.CSSProperties}
    >
      <section
        id={id}
        className={panelClasses}
        aria-label={ariaLabel}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        {backgroundImage && (
          <>
            <div className={styles.backgroundImage}>
              <Image
                src={backgroundImage}
                alt={backgroundAlt}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            {overlay !== 'none' && (
              <div className={`${styles.overlay} ${overlayClass}`} aria-hidden="true" />
            )}
          </>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </section>
    </div>
  );
}
