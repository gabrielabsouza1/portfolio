import styles from "./visuals.module.scss";

const metrics = [
  { label: "CPU", value: "24.5%" },
  { label: "RAM", value: "62.3%" },
  { label: "DISK", value: "91.5%" },
] as const;

const CoreGuardVisual: React.FC = () => {
  return (
    <div className={styles.monitor} aria-hidden="true">
      <p className={styles.monitorKicker}>System overview</p>
      <div className={styles.score}>
        <span>Health score</span>
        <strong>87</strong>
      </div>
      <dl className={styles.metrics}>
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.status}>
        Status
        <b>Critical</b>
      </p>
    </div>
  );
};

export default CoreGuardVisual;
