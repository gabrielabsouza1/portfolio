import Image from "next/image";
import Reveal from "components/motion/Reveal";
import type { MoreProject } from "data/projects";
import styles from "./style.module.scss";

type MoreProjectCardProps = MoreProject;

const MoreProjectCard: React.FC<MoreProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  imageAlt,
  liveUrl,
  sourceUrl,
}) => {
  return (
    <Reveal>
      <article className={styles.moreCard}>
        <div className={styles.moreMedia}>
          <Image src={image} alt={imageAlt} width={688} height={430} />
        </div>
        <div className={styles.moreBody}>
          <h4 className={styles.moreTitle}>{title}</h4>
          <p className={styles.moreCopy}>{description}</p>
          <ul className={styles.tech}>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {liveUrl || sourceUrl ? (
            <div className={styles.actions}>
              {liveUrl ? (
                <a
                  className={`${styles.link} ${styles.secondaryLink}`}
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live project</span>
                </a>
              ) : null}
              {sourceUrl ? (
                <a
                  className={`${styles.link} ${styles.secondaryLink}`}
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Source code</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
};

export default MoreProjectCard;
