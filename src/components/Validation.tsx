import { validationLogos } from '@/config/images';
import styles from './Validation.module.css';

const GOOGLE_REVIEW_URL =
  'https://g.page/r/CTuF5qywYjwHEAI/review';

export default function Validation() {
  return (
    <section className={styles.validation}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className="eyebrow">Trusted Partners</span>
          <p className={styles.declarative}>We get it Honeydone.</p>
          <h2 className={styles.title}>
            Trusted by Austin Realtors and Homeowners who never want to chase a contractor again.
          </h2>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewBtn}
          >
            How did we Honeydew? Leave us a review &rarr;
          </a>
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
