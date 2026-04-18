import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { services, getServiceBySlug } from '../serviceData';
import styles from '../../areas/areas.module.css';

/* Pre-generate all service pages at build time (required for static export) */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/* Dynamic metadata per service page */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.seoKeywords,
    alternates: {
      canonical: `https://honeydew-homes.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      siteName: 'Honeydew Homes',
      locale: 'en_US',
      type: 'website',
      url: `https://honeydew-homes.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <section className={styles.detail}>
        <div className={`container ${styles.container}`}>
          <h1>Service not found</h1>
        </div>
      </section>
    );
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <section className={styles.detail}>
      {/* Gold rule separator */}
      <div className={`container ${styles.ruleContainer}`}>
        <div className={styles.topRule} aria-hidden="true" />
      </div>

      <div className={`container ${styles.container}`}>
        {/* Header */}
        <header className={styles.detailHeader}>
          <span className={styles.detailCounty}>Honeydew Homes Services</span>
          <h1 className={styles.detailTitle}>
            {service.name} in Austin, Texas
          </h1>
          <p className={styles.detailTagline}>{service.tagline}</p>
        </header>

        {/* Primary description - keyword dense */}
        <div className={styles.description}>{service.description}</div>

        {/* Extended description - maximum keyword density */}
        <div className={styles.description}>{service.extendedDescription}</div>

        {/* Service highlights */}
        <div className={styles.servicesSection}>
          <p className={styles.sectionLabel}>{service.name} — What We Cover</p>
          <ul className={styles.highlightsList}>
            {service.highlights.map((highlight, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.highlightCheck} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Areas served - more keyword signals */}
        <div className={styles.neighborhoodsSection}>
          <p className={styles.sectionLabel}>
            Cities we serve for {service.name}
          </p>
          <div className={styles.neighborhoodTags}>
            {['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'Lakeway', 'Bee Cave', 'Westlake', 'Dripping Springs'].map((city) => (
              <span key={city} className={styles.neighborhoodTag}>
                {city}, TX
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaHeadline}>
            Get a free quote for {service.name.toLowerCase()} in Austin
          </h2>
          <p className={styles.ctaSubtext}>
            Free walkthrough. Best price in Austin. No surprises.
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

        {/* Cross-link other services for internal SEO juice */}
        <div className={styles.otherAreas}>
          <p className={styles.sectionLabel}>Other Honeydew Homes services</p>
          <div className={styles.otherAreasGrid}>
            {otherServices.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className={styles.otherAreaLink}
              >
                <p className={styles.otherAreaName}>{s.name} Austin TX</p>
                <span className={styles.otherAreaCounty}>{s.tagline}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
