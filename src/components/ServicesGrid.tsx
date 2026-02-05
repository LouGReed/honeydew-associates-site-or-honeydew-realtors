import { siteConfig } from '@/config/site';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>
            From punch lists to finishing touches, we focus on clean execution,
            clear communication, and homes that feel ready to welcome the next chapter.
          </p>
        </div>

        <div className={styles.grid}>
          {siteConfig.services.map((service, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
