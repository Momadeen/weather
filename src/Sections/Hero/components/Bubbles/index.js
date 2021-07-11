import styles from "../../hero.module.scss";

const Bubbles = () => (
  <div className={styles.BubblesContainer}>{Array(5).fill(<Bubble />)}</div>
);

const Bubble = () => <div className={styles.bubble} />;

export default Bubbles;
