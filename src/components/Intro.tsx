import { introPortrait } from '@/config/pexels';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section id="about" className={styles.intro}>
      <div className={`container ${styles.container}`}>
        <div className={styles.copy}>
          <p className={styles.text}>
            Built for Austin realtors who want their listings to shine from day one.
            We handle the prep work so you can focus on what you do best—closing deals.
          </p>
        </div>
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
