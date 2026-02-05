import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './ImageBand.module.css';

export default function ImageBand() {
  // Use the first lifestyle image as a featured full-bleed section
  const featuredImage = siteConfig.lifestyleImages[0];

  return (
    <section className={`snap-section ${styles.imageBand}`} aria-label="Featured work">
      <div className={styles.imageWrapper}>
        <Image
          src={featuredImage.src}
          alt={featuredImage.caption}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <span className={`eyebrow ${styles.eyebrow}`}>Our Work</span>
        <p className={styles.caption}>{featuredImage.caption}</p>
      </div>
    </section>
  );
}
