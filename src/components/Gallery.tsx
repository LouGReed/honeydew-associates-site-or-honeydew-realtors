import styles from './Gallery.module.css';

/**
 * Mammoth-style full-bleed image sequence.
 * One image per panel, generous whitespace, no captions.
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
    </section>
  );
}
