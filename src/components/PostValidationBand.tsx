import { postValidationBand } from '@/config/pexels';
import styles from './ImageBand.module.css';

export default function PostValidationBand() {
  return (
    <section className={styles.imageBand} aria-label="Family lifestyle">
      <div className={styles.imageWrapper}>
        <img
          src={encodeURI(postValidationBand.src)}
          alt={postValidationBand.alt}
          width={postValidationBand.width}
          height={postValidationBand.height}
          loading="lazy"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </section>
  );
}
