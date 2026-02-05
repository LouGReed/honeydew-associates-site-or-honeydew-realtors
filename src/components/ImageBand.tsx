import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './ImageBand.module.css';

export default function ImageBand() {
  const featuredImage = siteConfig.lifestyleImages[0];

  return (
    <section className={styles.imageBand} aria-label="Featured work">
      <div className={styles.imageWrapper}>
        <Image
          src={featuredImage.src}
          alt={featuredImage.caption}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </section>
  );
}
