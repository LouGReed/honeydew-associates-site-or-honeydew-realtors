import { siteConfig } from '@/config/site';
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
      {/* Gold rule separator */}
      <div className={`container ${styles.ruleContainer}`}>
        <div className={styles.topRule} aria-hidden="true" />
      </div>

      <div className={`container ${styles.container}`}>
        {/* Left column: Header + Grid + CTA */}
        <div className={styles.main}>
          <header className={styles.header}>
            <p className={styles.thesis}>
              Clean scope. Clean execution. Clean handoff.
            </p>
            <span className="eyebrow">What We Do</span>
            <h2 className={styles.headline}>
              <span className={styles.headlineCanela}>Make-ready work</span>
              <span className={styles.headlineCanela}>that respects your timeline.</span>
              <span className={styles.headlineEcho}>And your client's home.</span>
            </h2>
          </header>

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

          {/* Mid-page CTA — after services grid */}
          <div className={styles.ctaWrap}>
            <a
              href={siteConfig.housecallProUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Walkthrough
            </a>
          </div>
        </div>

        {/* Right column: Image + Caption */}
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
