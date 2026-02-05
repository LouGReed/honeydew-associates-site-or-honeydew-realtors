'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import styles from './page.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    propertyAddress: '',
    timeline: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Form Column */}
          <div className={styles.formColumn}>
            <h1 className={styles.headline}>Get in Touch</h1>

            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Thanks—We&apos;ll follow up shortly.</h2>
                <p className={styles.successText}>
                  We typically respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="you@email.com"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="propertyAddress" className={styles.label}>
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="123 Main St, Austin, TX"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="timeline" className={styles.label}>
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2-weeks">1–2 weeks</option>
                    <option value="1-month">Within a month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about the property and what you need..."
                  />
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className={styles.infoColumn}>
            <div className={styles.infoContent}>
              <h2 className={styles.infoTitle}>Austin Make-Ready Services</h2>
              <p className={styles.infoParagraph}>
                We partner with real estate professionals across the Austin metro area
                to prepare homes for market. From pre-listing repairs to finishing
                touches, we handle the details so you can focus on your clients.
              </p>

              <div className={styles.contactBlocks}>
                <div className={styles.contactBlock}>
                  <h3 className={styles.contactLabel}>Phone</h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                    className={styles.contactValue}
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className={styles.contactBlock}>
                  <h3 className={styles.contactLabel}>Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={styles.contactValue}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className={styles.serviceAreas}>
                <h3 className={styles.contactLabel}>Service Areas</h3>
                <p className={styles.areasList}>
                  {siteConfig.footerNav.serviceAreas.join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
