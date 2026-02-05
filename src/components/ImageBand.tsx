import { standoutImages } from '@/config/images';
import styles from './ImageBand.module.css';

export default function ImageBand() {
  const featuredImage = standoutImages[0];

  return (
    <section className={styles.imageBand} aria-label="Featured work">
      <div className={styles.imageWrapper}>
        <img
          src={featuredImage.src}
          alt={featuredImage.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: featuredImage.position || 'center',
          }}
        />
      </div>
    </section>
  );
}
