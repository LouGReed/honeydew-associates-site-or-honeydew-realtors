import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { areas, getAreaBySlug } from '../areaData';
import styles from '../areas.module.css';

/* Pre-generate all area pages at build time (required for static export) */
export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

/* Dynamic metadata per area page */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = getAreaBySlug(params.slug);
  if (!area) return {};

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    keywords: area.seoKeywords,
    alternates: {
      canonical: `https://honeydew-homes.com/areas/${area.slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      siteName: 'Honeydew Homes',
      locale: 'en_US',
      type: 'website',
      url: `https://honeydew-homes.com/areas/${area.slug}`,
    },
  };
}

export default function AreaPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = getAreaBySlug(params.slug);

  if (!area) {
    return (
      <section className={styles.detail}>
        <div className={`container ${styles.container}`}>
          <h1>Area not found</h1>
        </div>
      </section>
    );
  }

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <section className={styles.detail}>
      {/* Gold rule separator */}
      <div className={`container ${styles.ruleContainer}`}>
        <div className={styles.topRule} aria-hidden="true" />
      </div>

      <div className={`container ${styles.container}`}>
        {/* Header */}
        <header className={styles.detailHeader}>
          <span className={styles.detailCounty}>{area.county}</span>
          <h1 className={styles.detailTitle}>
            Best General Contractor in {area.name}, Texas
          </h1>
          <p className={styles.detailTagline}>{area.tagline}</p>
        </header>

        {/* Primary description - keyword dense */}
        <div className={styles.description}>{area.description}</div>

        {/* Extended description - maximum keyword density */}
        <div className={styles.description}>{area.extendedDescription}</div>

        {/* Services highlights */}
        <div className={styles.servicesSection}>
          <p className={styles.sectionLabel}>Services in {area.name}, TX</p>
          <ul className={styles.highlightsList}>
            {area.highlights.map((highlight, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.highlightCheck} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Neighborhoods - more keyword signals */}
        <div className={styles.neighborhoodsSection}>
          <p className={styles.sectionLabel}>
            {area.name} neighborhoods and subdivisions we serve
          </p>
          <div className={styles.neighborhoodTags}>
            {area.neighborhoods.map((n) => (
              <span key={n} className={styles.neighborhoodTag}>
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaHeadline}>
            Get a free quote from the best contractor in {area.name}
          </h2>
          <p className={styles.ctaSubtext}>
            Free walkthrough. Best price in {area.name}. No surprises.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={siteConfig.housecallProUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Book a Free Walkthrough
            </a>
            <a
              href={siteConfig.smsHref}
              className={styles.ctaText}
              aria-label={`Text us at ${siteConfig.smsPhone}`}
            >
              Or text us at {siteConfig.smsPhone} &rarr;
            </a>
          </div>
        </div>

        {/* Cross-link other areas for internal SEO juice */}
        <div className={styles.otherAreas}>
          <p className={styles.sectionLabel}>Also serving these Austin-area cities</p>
          <div className={styles.otherAreasGrid}>
            {otherAreas.map((a) => (
              <a
                key={a.slug}
                href={`/areas/${a.slug}`}
                className={styles.otherAreaLink}
              >
                <p className={styles.otherAreaName}>General Contractor in {a.name}</p>
                <span className={styles.otherAreaCounty}>{a.county}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
