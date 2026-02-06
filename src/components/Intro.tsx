import { introPortrait } from '@/config/pexels';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section id="about" className={styles.intro}>
      <div className={`container ${styles.container}`}>
        {/* 3-line lead + echo stack */}
        <div className={styles.copy}>
          <h2 className={styles.lead}>Built for Austin realtors.</h2>
          <p className={styles.support}>
            We handle the prep work so you can focus on closing.
          </p>

          {/* Gold rule motif */}
          <div className={styles.rule} aria-hidden="true" />

          <p className={styles.echo}>
            Listings that photograph clean, show confidently, and move faster.
          </p>
        </div>

        {/* Portrait with overlap */}
        <div className={styles.portrait}>
          <img
            src={encodeURI(introPortrait.src)}
            alt={introPortrait.alt}
            width={introPortrait.width}
            height={introPortrait.height}
            loading="lazy"
            draggable={false}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
