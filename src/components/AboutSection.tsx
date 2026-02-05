import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.eyebrow}>Built for Austin Realtors</span>
          <p className={styles.body}>
            Honeydew partners with real estate professionals to handle make-ready work
            quickly and thoughtfully. From punch lists to finishing touches, we focus
            on clean execution, clear communication, and homes that feel ready to
            welcome the next chapter.
          </p>
        </div>
      </div>
    </section>
  );
}
