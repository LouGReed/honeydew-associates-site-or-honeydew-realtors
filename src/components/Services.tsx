import { servicesFigure } from '@/config/pexels';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Make-Ready + Turnovers',
    description: 'Pre-listing prep so your home photographs beautifully and sells faster.',
  },
  {
    number: '02',
    title: 'Punch Lists + Repairs',
    description: 'Efficient execution of inspection items with clear communication.',
  },
  {
    number: '03',
    title: 'Paint + Finish Work',
    description: 'Clean lines and neutral tones that let the home speak for itself.',
  },
  {
    number: '04',
    title: 'Light Remodels',
    description: 'Targeted updates that move the needle without a full renovation timeline.',
  },
];

export default function Services() {
  return (
    <section id="services" className={`snap-section ${styles.services}`}>
      <div className={`container ${styles.container}`}>
        {/* Header + Grid */}
        <div className={styles.main}>
          <header className={styles.header}>
            {/* Thesis line */}
            <p className={styles.thesis}>
              Clean scope. Clean execution. Clean handoff.
            </p>

            <span className="eyebrow">What We Do</span>

            {/* 3-line headline cadence */}
            <h2 className={styles.headline}>
              <span className={styles.headlineCanela}>Make-ready work</span>
              <span className={styles.headlineCanela}>that respects your timeline.</span>
              <span className={styles.headlineEcho}>And your client's home.</span>
            </h2>
          </header>

          {/* Scope label */}
          <p className={styles.scopeLabel}>Typical scope for Austin listings</p>

          {/* 2x2 Confidence Grid */}
          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.number} className={styles.card}>
                <span className={styles.cardNumber}>{service.number}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Side figure with overlap */}
        <figure className={styles.figure}>
          <img
            src={encodeURI(servicesFigure.src)}
            alt={servicesFigure.alt}
            width={servicesFigure.width}
            height={servicesFigure.height}
            loading="lazy"
            draggable={false}
            className={styles.figureImage}
          />
          <figcaption className={styles.figureCaption}>
            Completed pre-listing refresh, Central Austin.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
