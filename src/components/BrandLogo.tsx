import { siteConfig } from '@/config/site';
import { BASE_PATH } from '@/config/basePath';
import styles from './BrandLogo.module.css';

interface Props {
  className?: string;
}

/**
 * Brand lockup: melon icon + "Honeydew" wordmark.
 * The melon keeps its natural brand colors; the wordmark inherits
 * its color from the parent so it can adapt (white over hero, dark when scrolled).
 */
export default function BrandLogo({ className }: Props) {
  return (
    <span className={`${styles.lockup} ${className || ''}`}>
      <img
        src={`${BASE_PATH}/img/brand/melon.png`}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={styles.mark}
      />
      <span className={styles.wordmark}>{siteConfig.businessName}</span>
      <span className="sr-only">{siteConfig.businessName}</span>
    </span>
  );
}
