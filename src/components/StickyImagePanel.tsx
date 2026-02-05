'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './StickyImagePanel.module.css';

interface StickyImagePanelProps {
  src: string;
  alt: string;
  caption?: string;
  eyebrow?: string;
  scrollHeight?: 'short' | 'medium' | 'long';
  zIndex?: number;
}

export default function StickyImagePanel({
  src,
  alt,
  caption,
  eyebrow,
  scrollHeight = 'medium',
  zIndex = 1,
}: StickyImagePanelProps) {
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

  const heightClass = styles[`scroll${scrollHeight.charAt(0).toUpperCase() + scrollHeight.slice(1)}`];

  return (
    <div
      className={`${styles.wrapper} ${heightClass} ${prefersReducedMotion ? styles.reducedMotion : ''}`}
      style={{ '--panel-z-index': zIndex } as React.CSSProperties}
    >
      <figure className={styles.panel}>
        <div className={styles.imageContainer}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {(caption || eyebrow) && (
          <>
            <div className={styles.overlay} aria-hidden="true" />
            <figcaption className={styles.caption}>
              {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
              {caption && <span className={styles.captionText}>{caption}</span>}
            </figcaption>
          </>
        )}
      </figure>
    </div>
  );
}
