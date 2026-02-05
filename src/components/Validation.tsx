import Image from 'next/image';
import { siteConfig } from '@/config/site';
import styles from './Validation.module.css';

export default function Validation() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.validation}>
        <div className={`container ${styles.container}`}>
          <div className={styles.logos}>
            {siteConfig.validationLogos.map((logo, index) => (
              <div key={index} className={styles.logoWrapper}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          <p className={styles.tagline}>
            Trusted by Austin agents and teams who care about the details.
          </p>
        </div>
      </section>
    </div>
  );
}
