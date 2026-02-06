import { trifectaLeft, trifectaCenter, trifectaRight } from '@/config/pexels';
import styles from './Gallery.module.css';

/**
 * Gallery — Trifecta lifestyle images
 * Three images in a calm, premium grid layout.
 * Full aspect ratio, no cropping.
 */

const images = [trifectaLeft, trifectaCenter, trifectaRight];

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className={styles.inner}>
        <div className={styles.trifecta}>
          {images.map((img, i) => (
            <div key={i} className={styles.card}>
              <img
                src={encodeURI(img.src)}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                draggable={false}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
