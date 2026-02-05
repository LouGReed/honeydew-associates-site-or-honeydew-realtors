import { gallerySep1, gallerySep2 } from '@/config/pexels';
import styles from './Gallery.module.css';

/**
 * Mammoth-style contained image sequence.
 * Work images primary, with 2 Pexels separators interleaved
 * (after work-02 and work-04) for editorial breathing room.
 */

const GALLERY_DIR = '/assets/imagery/galleryofhomeimprovement';

type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: 'work' | 'pexels';
  orientation: 'horizontal' | 'vertical';
};

const sequence: GalleryItem[] = [
  { src: `${GALLERY_DIR}/01.png`, alt: 'Home improvement — living area',     width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { src: `${GALLERY_DIR}/02.png`, alt: 'Home improvement — kitchen detail',  width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { src: gallerySep1.src,         alt: gallerySep1.alt,                      width: gallerySep1.width, height: gallerySep1.height, kind: 'pexels', orientation: 'horizontal' },
  { src: `${GALLERY_DIR}/03.png`, alt: 'Home improvement — bathroom finish', width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { src: `${GALLERY_DIR}/04.png`, alt: 'Home improvement — bedroom staging', width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { src: gallerySep2.src,         alt: gallerySep2.alt,                      width: gallerySep2.width, height: gallerySep2.height, kind: 'pexels', orientation: 'vertical' },
  { src: `${GALLERY_DIR}/05.png`, alt: 'Home improvement — exterior view',   width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { src: `${GALLERY_DIR}/06.png`, alt: 'Home improvement — final walkthrough', width: 1920, height: 1280, kind: 'work', orientation: 'horizontal' },
];

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className={styles.inner}>
        {sequence.map((item, index) => (
          <div
            key={item.src}
            className={`${styles.panel} ${
              item.kind === 'pexels' ? styles.separator : ''
            } ${
              item.orientation === 'vertical' ? styles.vertical : ''
            }`}
          >
            <img
              src={encodeURI(item.src)}
              alt={item.alt}
              width={item.width}
              height={item.height}
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
