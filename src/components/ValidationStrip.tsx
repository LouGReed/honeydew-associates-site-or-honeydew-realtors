import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './ValidationStrip.module.css';

export default function ValidationStrip() {
  return (
    <section className={styles.validation}>
      <div className="container">
        <h3 className={styles.header}>
          Trusted by Leading Real Estate Professionals
        </h3>
        <div className={styles.logos}>
          {siteConfig.validationLogos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
