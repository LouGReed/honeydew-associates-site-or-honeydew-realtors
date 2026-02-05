import { siteConfig } from '@/config/site';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <span className="eyebrow">What We Do</span>
          <h2 className={styles.title}>
            Make-ready work that respects your timeline—and your client's home.
          </h2>
        </header>

        <div className={styles.grid}>
          {siteConfig.services.map((service, index) => (
            <article key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
