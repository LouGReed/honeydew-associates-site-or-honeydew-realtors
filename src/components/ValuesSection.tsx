import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './ValuesSection.module.css';

export default function ValuesSection() {
  return (
    <section id="values" className={styles.values}>
      <div className={styles.imageWrapper}>
        <Image
          src={siteConfig.valuesImage}
          alt="Quality craftsmanship"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h2 className={styles.headline}>Built on Texas Values</h2>
          <p className={styles.body}>
            We believe good work speaks for itself. That means showing up on time,
            treating every home with care, and doing exactly what we say we&apos;ll do.
          </p>
        </div>
      </div>
    </section>
  );
}
