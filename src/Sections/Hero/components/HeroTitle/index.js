import styles from "../../hero.module.scss";

const HeroTitle = () => (
  <div className={styles.heroTitles}>
    <h2 className={styles.opacityTitle}>CNN - 4 YOU</h2>
    <div className={styles.titlesContainer}>
      <h1 className={styles.heroTitle}>
        Hello
        <span className={styles.redPoint} />
      </h1>
      <h1 className={styles.heroTitle}>Weather</h1>
      <h1 className={styles.heroTitle}>News.</h1>
    </div>
  </div>
);

export default HeroTitle;
