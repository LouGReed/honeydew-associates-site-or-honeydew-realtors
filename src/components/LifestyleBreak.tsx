import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './LifestyleBreak.module.css';

export default function LifestyleBreak() {
  return (
    <section className={styles.lifestyle}>
      <div className={styles.imageWrapper}>
        <Image
          src={siteConfig.lifestyleBreakImage}
          alt="Family moment"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </section>
  );
}
