import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { areas } from './areaData';
import styles from './areas.module.css';

export const metadata: Metadata = {
  title: 'Areas We Serve | Honeydew Homes — Austin General Contractor',
  description:
    'Honeydew Homes serves Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and Leander. General contracting, make-ready turnovers, repairs, paint, installs, and landscaping across the Austin metro.',
  alternates: {
    canonical: 'https://honeydew-homes.com/areas',
  },
};

export default function AreasIndex() {
  return (
    <section className={styles.areas}>
      {/* Gold rule separator */}
      <div className={`container ${styles.ruleContainer}`}>
        <div className={styles.topRule} aria-hidden="true" />
      </div>

      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <span className="eyebrow">Where We Work</span>
          <p className={styles.thesis}>
            Wherever Austin calls home, we show up.
          </p>
          <h1 className={styles.title}>
            <span className={styles.titleCanela}>From downtown Austin</span>
            <span className={styles.titleCanela}>to the fastest-growing suburbs in Texas.</span>
          </h1>
          <p className={styles.subtitle}>
            Make-ready turnovers, repairs, paint, installs, and landscaping — all under one roof, across six cities.
          </p>
        </header>

        {/* Clean area list — no links to subpages */}
        <div className={styles.areaList}>
          {areas.map((area) => (
            <div key={area.slug} className={styles.areaItem}>
              <span className={styles.areaItemCounty}>{area.county}</span>
              <h2 className={styles.areaItemName}>{area.name}</h2>
              <p className={styles.areaItemTagline}>{area.tagline}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.areaCta}>
          <div className={styles.ctaActions}>
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
        </div>
      </div>
    </section>
  );
}
