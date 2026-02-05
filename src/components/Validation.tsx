import { validationLogos } from '@/config/images';
import styles from './Validation.module.css';

export default function Validation() {
  return (
    <section className={styles.validation}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className="eyebrow">Trusted Partners</span>
          <h2 className={styles.title}>
            Trusted by Austin agents and teams who care about the details.
          </h2>
        </div>
        <div className={styles.logos}>
          {validationLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${logo.alt} website`}
              className={styles.logoLink}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                draggable={false}
                className={styles.logo}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
