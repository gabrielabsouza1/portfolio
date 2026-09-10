import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SITE } from "data/site";
import styles from "./style.module.scss";

type SocialLinksProps = {
  size?: number;
  className?: string;
  tabIndex?: number;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 18, className = "", tabIndex }) => {
  return (
    <div className={`${styles.social} ${className}`.trim()}>
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={styles.icon}
        tabIndex={tabIndex}
      >
        <FaGithub size={size} aria-hidden="true" />
      </a>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={styles.icon}
        tabIndex={tabIndex}
      >
        <FaLinkedin size={size} aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialLinks;
