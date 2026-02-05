import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section id="about" className={styles.intro}>
      <div className={`container ${styles.container}`}>
        <p className={styles.text}>
          Built for Austin realtors who want their listings to shine from day one.
          We handle the prep work so you can focus on what you do best—closing deals.
        </p>
      </div>
    </section>
  );
}
