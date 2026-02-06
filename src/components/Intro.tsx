import { siteConfig } from '@/config/site';
import { introPortrait } from '@/config/pexels';
import styles from './Intro.module.css';

/**
 * Texas outline SVG — Service Area badge
 * Compact, intentional positioning with headline
 */
function TexasMark() {
  return (
    <div className={styles.txMark}>
      <span className={styles.txLabel}>Service Area</span>
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
          cy="63"
          r="16"
          className={styles.txRing}
        />
        {/* Austin star - enlarged ~120% */}
        <path
          d="M54 46L59 58L71 58L62 67L65 80L54 72L43 80L46 67L37 58L49 58L54 46Z"
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
        {/* Left column: Copy block + Map badge */}
        <div className={styles.leftCol}>
          {/* Top row: Copy + Map aligned */}
          <div className={styles.topRow}>
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

            {/* Texas map — Service Area badge */}
            <TexasMark />
          </div>

          {/* Anchoring line */}
          <p className={styles.anchor}>
            Trusted by Austin agents for fast, repeat-ready turnarounds.
          </p>
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
