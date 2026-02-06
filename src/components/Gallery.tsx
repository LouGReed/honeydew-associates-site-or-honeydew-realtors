import { twoFectaLeft, twoFectaRight } from '@/config/pexels';
import styles from './Gallery.module.css';

/**
 * Pexels lifestyle gallery.
 * Two vertical images side by side for editorial breathing room.
 */

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className={styles.inner}>
        <div className={`${styles.panel} ${styles.separator} ${styles.twoFecta}`}>
          <img
            src={encodeURI(twoFectaLeft.src)}
            alt={twoFectaLeft.alt}
            width={twoFectaLeft.width}
            height={twoFectaLeft.height}
            loading="lazy"
            draggable={false}
            className={styles.twoFectaImage}
          />
          <img
            src={encodeURI(twoFectaRight.src)}
            alt={twoFectaRight.alt}
            width={twoFectaRight.width}
            height={twoFectaRight.height}
            loading="lazy"
            draggable={false}
            className={styles.twoFectaImage}
          />
        </div>
      </div>
    </section>
  );
}
