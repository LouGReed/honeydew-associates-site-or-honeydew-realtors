import { siteConfig } from '@/config/site';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <span className="eyebrow">How It Works</span>
          <p className={styles.declarative}>Built for listing timelines and busy client days.</p>
          <h2 className={styles.title}>Simple. Clear. On time.</h2>
        </header>

        <div className={styles.steps}>
          {siteConfig.process.map((step, index) => (
            <article key={index} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
