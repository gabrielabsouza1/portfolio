import { SITE } from "data/site";
import styles from "./style.module.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <p className={styles.name}>{SITE.name}</p>
          <p className={styles.meta}>
            {SITE.title}
            <span aria-hidden="true"> · </span>
            {SITE.location}
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
      <p className={styles.credit}>
        Designed & built by {SITE.name}. © {year}
      </p>
    </footer>
  );
};

export default Footer;
