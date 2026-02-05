import { twoFectaLeft, twoFectaRight } from '@/config/pexels';
import type { PexelImage } from '@/config/pexels';
import { BASE_PATH } from '@/config/basePath';
import styles from './Gallery.module.css';

/**
 * Mammoth-style contained image sequence.
 * Work images primary, with Pexels separators interleaved
 * for editorial breathing room. After work-04, a "two-fecta"
 * pair of vertical Pexels images sits side by side.
 */

const GALLERY_DIR = `${BASE_PATH}/assets/imagery/galleryofhomeimprovement`;

type SingleItem = {
  type: 'single';
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: 'work' | 'pexels';
  orientation: 'horizontal' | 'vertical';
};

type TwoFectaItem = {
  type: 'twoFecta';
  left: PexelImage;
  right: PexelImage;
};

type GalleryItem = SingleItem | TwoFectaItem;

const sequence: GalleryItem[] = [
  { type: 'single', src: `${GALLERY_DIR}/01.png`, alt: 'Home improvement — living area',     width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { type: 'single', src: `${GALLERY_DIR}/02.png`, alt: 'Home improvement — kitchen detail',  width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { type: 'single', src: `${GALLERY_DIR}/03.png`, alt: 'Home improvement — bathroom finish', width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { type: 'single', src: `${GALLERY_DIR}/04.png`, alt: 'Home improvement — bedroom staging', width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { type: 'single', src: `${GALLERY_DIR}/05.png`, alt: 'Home improvement — exterior view',   width: 1920, height: 1280, kind: 'work',   orientation: 'horizontal' },
  { type: 'single', src: `${GALLERY_DIR}/06.png`, alt: 'Home improvement — final walkthrough', width: 1920, height: 1280, kind: 'work', orientation: 'horizontal' },
  { type: 'twoFecta', left: twoFectaLeft, right: twoFectaRight },
];

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className={styles.inner}>
        {sequence.map((item, index) => {
          if (item.type === 'twoFecta') {
            return (
              <div key="twoFecta" className={`${styles.panel} ${styles.separator} ${styles.twoFecta}`}>
                <img
                  src={encodeURI(item.left.src)}
                  alt={item.left.alt}
                  width={item.left.width}
                  height={item.left.height}
                  loading="lazy"
                  draggable={false}
                  className={styles.twoFectaImage}
                />
                <img
                  src={encodeURI(item.right.src)}
                  alt={item.right.alt}
                  width={item.right.width}
                  height={item.right.height}
                  loading="lazy"
                  draggable={false}
                  className={styles.twoFectaImage}
                />
              </div>
            );
          }

          return (
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
          );
        })}
      </div>
    </section>
  );
}
