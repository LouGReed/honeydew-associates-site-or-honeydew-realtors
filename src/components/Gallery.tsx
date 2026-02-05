import styles from './Gallery.module.css';

/**
 * Mammoth-style contained image sequence.
 * Large editorial images inside a calm container — not edge-to-edge.
 */

const GALLERY_DIR = '/assets/imagery/galleryofhomeimprovement';

const images = [
  { src: `${GALLERY_DIR}/01.png`, alt: 'Home improvement project — living area' },
  { src: `${GALLERY_DIR}/02.png`, alt: 'Home improvement project — kitchen detail' },
  { src: `${GALLERY_DIR}/03.png`, alt: 'Home improvement project — bathroom finish' },
  { src: `${GALLERY_DIR}/04.png`, alt: 'Home improvement project — bedroom staging' },
  { src: `${GALLERY_DIR}/05.png`, alt: 'Home improvement project — exterior view' },
  { src: `${GALLERY_DIR}/06.png`, alt: 'Home improvement project — final walkthrough' },
];

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className={`container ${styles.inner}`}>
        {images.map((image, index) => (
          <div key={image.src} className={styles.panel}>
            <img
              src={encodeURI(image.src)}
              alt={image.alt}
              width={1920}
              height={1280}
              loading={index < 2 ? 'eager' : 'lazy'}
              draggable={false}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
