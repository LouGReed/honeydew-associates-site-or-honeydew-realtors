import type { PexelImage } from '@/config/pexels';
import styles from './EditorialImage.module.css';

interface Props {
  image: PexelImage;
  caption?: string;
}

/**
 * Editorial image band — sits between content sections.
 * Horizontal images fill the container width.
 * Vertical images center at a narrower width.
 */
export default function EditorialImage({ image, caption }: Props) {
  return (
    <div
      className={`${styles.band} ${
        image.orientation === 'vertical' ? styles.vertical : ''
      }`}
    >
      <div className={`container ${styles.inner}`}>
        <figure className={styles.figure}>
          <img
            src={encodeURI(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            draggable={false}
            className={styles.image}
          />
          {caption && (
            <figcaption className={styles.caption}>{caption}</figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
