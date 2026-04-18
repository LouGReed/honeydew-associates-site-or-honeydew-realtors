import { siteConfig } from '@/config/site';
import { servicesFigure } from '@/config/pexels';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Make-Ready + Turnovers',
    description: 'Get a home listing ready before it hits the market.',
  },
  {
    number: '02',
    title: 'Repairs + Punch Lists',
    description: "The stuff that's been on your list is now on our Honeydew List. We'll knock it out.",
  },
  {
    number: '03',
    title: 'Paint + Wall Repair',
    description: 'Wall flattening, interior/exterior paint.',
  },
  {
    number: '04',
    title: 'Installs + Improvements',
    description: 'Appliances, fixtures, water filtration systems.',
  },
  {
    number: '05',
    title: 'Landscaping + Nursery Services',
    description: 'Get landscaping, mulching, tree selection and planting done in one place.',
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
              The generalist of general contractors.
            </p>
            <span className="eyebrow">What We Do</span>
            <h2 className={styles.headline}>
              <span className={styles.headlineCanela}>Whatever your home needs,</span>
              <span className={styles.headlineCanela}>we've got it covered.</span>
            </h2>
          </header>

          <p className={styles.scopeLabel}>What we take on</p>

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
            <a
              href={siteConfig.smsHref}
              className="btn-ghost"
              aria-label={`Text us at ${siteConfig.smsPhone}`}
            >
              Or text us →
            </a>
          </div>

          {/* Sub-page links */}
          <div className={styles.subLinks}>
            <a href="/areas" className={styles.subLink}>
              See our service areas →
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
            Completed home refresh, Central Austin.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
