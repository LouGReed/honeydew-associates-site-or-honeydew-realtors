import { introPortrait } from '@/config/pexels';
import styles from './Intro.module.css';

/**
 * Texas outline SVG with Austin star
 * Simplified path, single stroke, editorial restraint
 */
function TexasMark() {
  return (
    <div className={styles.txMark}>
      <svg
        viewBox="0 0 100 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.txSvg}
        aria-hidden="true"
      >
        {/* Simplified Texas outline */}
        <path
          d="M2 2L2 38L12 38L12 55L2 55L2 75L18 93L45 93L52 85L58 93L95 93L98 75L85 55L85 38L75 25L75 2L2 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Austin star (central Texas) */}
        <path
          d="M42 52L43.5 48L45 52L49 52L46 55L47.5 59L45 56.5L42.5 59L44 55L41 52L42 52Z"
          fill="currentColor"
        />
        {/* Small ring around star */}
        <circle
          cx="45"
          cy="54"
          r="8"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
      <span className={styles.txCaption}>Austin, TX</span>
    </div>
  );
}

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

          {/* Texas map mark */}
          <TexasMark />
        </div>

        {/* Portrait */}
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
