import { galleryImages, heroImages, workSlideImages } from '@/config/images';
import styles from './Gallery.module.css';

export default function Gallery() {
  const allWork = [...heroImages, ...workSlideImages, ...galleryImages];

  return (
    <section id="work" className={`snap-section ${styles.gallery}`}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <span className="eyebrow">Selected Work</span>
          <h2 className={styles.title}>Every detail, handled.</h2>
        </header>

        <div className={styles.grid}>
          {allWork.map((image, index) => (
            <div
              key={image.src}
              className={`${styles.item} ${
                index === 0 || index === 5 ? styles.itemWide : ''
              }`}
            >
              <img
                src={encodeURI(image.src)}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: image.position || 'center',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
