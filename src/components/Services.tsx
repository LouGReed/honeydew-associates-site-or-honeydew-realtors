import { siteConfig } from '@/config/site';
import { servicesFigure } from '@/config/pexels';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={`snap-section ${styles.services}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.main}>
          <header className={styles.header}>
            <span className="eyebrow">What We Do</span>
            <h2 className={styles.title}>
              Make-ready work that respects your timeline and your client's home.
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

        <div className={styles.figure}>
          <img
            src={encodeURI(servicesFigure.src)}
            alt={servicesFigure.alt}
            width={servicesFigure.width}
            height={servicesFigure.height}
            loading="lazy"
            draggable={false}
            className={styles.figureImage}
          />
        </div>
      </div>
    </section>
  );
}
