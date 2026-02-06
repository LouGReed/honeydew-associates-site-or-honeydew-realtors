import { siteConfig } from '@/config/site';
import { introPortrait } from '@/config/pexels';
import styles from './Intro.module.css';

/**
 * Texas outline SVG with prominent Austin star
 * Simplified outline, dark green star for contrast
 */
function TexasMark() {
  return (
    <div className={styles.txMark}>
      <svg
        viewBox="0 0 120 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.txSvg}
        aria-label="Texas with Austin marked"
      >
        {/* Texas outline - simplified */}
        <path
          d="M3 3L3 45L15 45L15 65L3 65L3 90L22 112L54 112L63 102L70 112L115 112L118 90L102 65L102 45L90 30L90 3L3 3Z"
          className={styles.txOutline}
        />
        {/* Austin ring (behind star) */}
        <circle
          cx="54"
          cy="64"
          r="14"
          className={styles.txRing}
        />
        {/* Austin star - larger, dark green */}
        <path
          d="M54 52L57 60L65 60L59 66L61 74L54 69L47 74L49 66L43 60L51 60L54 52Z"
          className={styles.txStar}
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
        {/* Left column: Copy + Principles + Texas mark */}
        <div className={styles.leftCol}>
          <div className={styles.copy}>
            <h2 className={styles.lead}>Built for Austin realtors.</h2>
            <p className={styles.support}>
              We handle the prep work so you can focus on closing.
            </p>

            {/* Gold rule */}
            <div className={styles.rule} aria-hidden="true" />

            <p className={styles.echo}>
              Listings that photograph clean, show confidently, and move faster.
            </p>
          </div>

          {/* Operating Principles micro strip */}
          <div className={styles.principles}>
            <div className={styles.principlesRule} aria-hidden="true" />
            <span className={styles.principlesLabel}>Operating Principles</span>
            <ul className={styles.principlesList}>
              <li>Timeline-first scheduling</li>
              <li>Realtor-ready punch lists</li>
              <li>Daily updates, photo check-ins</li>
            </ul>
          </div>

          {/* Texas mark */}
          <TexasMark />
        </div>

        {/* Right column: Portrait + Scope preview */}
        <div className={styles.rightCol}>
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

          {/* Scope preview */}
          <div className={styles.scopePreview}>
            <p className={styles.scopeItem}>Typical turnaround: 3–10 days (scope dependent)</p>
            <p className={styles.scopeItem}>Austin-wide scheduling</p>
            <p className={styles.scopeItem}>Housecall Pro booking</p>
            <a
              href={siteConfig.housecallProUrl}
              className={styles.scopeCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              See availability →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
