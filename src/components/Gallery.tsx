import { trifectaLeft, trifectaCenter, trifectaRight } from '@/config/pexels';
import styles from './Gallery.module.css';

/**
 * Gallery — Trifecta lifestyle images
 * Three vertical images in a calm, premium grid layout.
 * Third image cropped to vertical to match the first two.
 */

const images = [trifectaLeft, trifectaCenter, trifectaRight];

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className={styles.inner}>
        <div className={styles.trifecta}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === 2 ? styles.cardCropped : ''}`}
            >
              <img
                src={encodeURI(img.src)}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                draggable={false}
                className={`${styles.image} ${i === 2 ? styles.imageCropped : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
