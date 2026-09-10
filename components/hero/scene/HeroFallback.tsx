import styles from "../style.module.scss";

const HeroFallback: React.FC = () => {
  return (
    <div className={styles.fallback} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.orbPrimary} />
      <div className={styles.orbSecondary} />
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />
    </div>
  );
};

export default HeroFallback;
