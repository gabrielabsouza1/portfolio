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
  imageWidth,
  imageHeight,
  liveUrl,
  sourceUrl,
}) => {
  return (
    <Reveal>
      <article className={styles.moreCard}>
        <div className={styles.moreMedia}>
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes="(min-width: 800px) 40vw, 100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
