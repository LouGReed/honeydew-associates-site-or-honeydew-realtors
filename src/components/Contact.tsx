'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    neighborhood: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <section id="contact" className={styles.contact}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>Book a walkthrough.</h2>
            <p className={styles.subtitle}>
              Tell us about the property—we'll handle the rest.
            </p>
          </header>

          <div className={styles.methods}>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className={styles.method}
            >
              <span className={styles.methodLabel}>Phone</span>
              <span className={styles.methodValue}>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className={styles.method}>
              <span className={styles.methodLabel}>Email</span>
              <span className={styles.methodValue}>{siteConfig.email}</span>
            </a>
          </div>
        </div>

        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={styles.success}>
              <p className={styles.successTitle}>Got it.</p>
              <p className={styles.successText}>
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
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
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="neighborhood" className={styles.label}>
                    Neighborhood
                  </label>
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g., South Austin, Mueller"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Tell us about the project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                Send Message
              </button>
            </form>
          )}
        </div>
        </div>
      </section>
    </div>
  );
}
