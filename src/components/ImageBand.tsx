import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './ImageBand.module.css';

export default function ImageBand() {
  return (
    <section className={styles.imageBand} aria-label="Lifestyle imagery">
      <div className={styles.grid}>
        {siteConfig.lifestyleImages.map((image, index) => (
          <figure key={index} className={styles.imageItem}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.caption}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <figcaption className={styles.caption}>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
