import Image from "next/image";
import styles from "./visuals.module.scss";

const JobCompassVisual: React.FC = () => {
  return (
    <div className={styles.browser}>
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>jobcompass / dashboard</span>
      </div>
      <div className={styles.screenshot}>
        <Image
          src="/img/jobcompass-dashboard.png"
          alt="JobCompass dashboard with job search, saved jobs, applications and matched listings"
          width={1024}
          height={703}
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
      </div>
    </div>
  );
};

export default JobCompassVisual;
