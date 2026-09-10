import { useCallback, useRef, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "components/motion/Reveal";
import { useIsMobile } from "hooks/useIsMobile";
import type { FeaturedProject as FeaturedProjectData } from "data/projects";
import styles from "./style.module.scss";

type FeaturedProjectProps = Omit<FeaturedProjectData, "visual"> & {
  visual: React.ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  number,
  title,
  category,
  status,
  statusKind,
  description,
  technologies,
  featuresLabel,
  features,
  liveUrl,
  liveLabel = "Live project",
  sourceUrl,
  sourceLabel = "Source code",
  reverse = false,
  visual,
}) => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile(1023);
  const mediaRef = useRef<HTMLDivElement>(null);
  const allowTilt = !reduceMotion && !isMobile;

  const resetTilt = useCallback(() => {
    const media = mediaRef.current;
    if (!media) {
      return;
    }

    media.style.setProperty("--tilt-x", "0deg");
    media.style.setProperty("--tilt-y", "0deg");
  }, []);

  const onPointerMove = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
      if (!allowTilt) {
        return;
      }

      const media = mediaRef.current;
      if (!media) {
        return;
      }

      const rect = media.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      media.style.setProperty("--tilt-x", `${(y * -3.5).toFixed(2)}deg`);
      media.style.setProperty("--tilt-y", `${(x * 3.5).toFixed(2)}deg`);
    },
    [allowTilt]
  );

  return (
    <Reveal>
      <article
        className={`${styles.featured} ${reverse ? styles.reverse : ""}`.trim()}
      >
        <div
          ref={mediaRef}
          className={styles.media}
          onMouseMove={onPointerMove}
          onMouseLeave={resetTilt}
        >
          {visual}
        </div>
        <div className={styles.body}>
          <div className={styles.metaRow}>
            <motion.p
              className={styles.number}
              initial={reduceMotion ? false : { opacity: 0, x: -14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, ease }}
            >
              {number}
            </motion.p>
            <p className={styles.category}>
              <span>{category}</span>
              <span aria-hidden="true"> / </span>
              <span className={styles.status} data-kind={statusKind}>
                <i aria-hidden="true" />
                {status}
              </span>
            </p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.tech}>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className={styles.features}>
            <p className={styles.featuresLabel}>{featuresLabel}</p>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className={styles.actions}>
            {liveUrl ? (
              <a
                className={`${styles.link} ${styles.primaryLink}`}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{liveLabel}</span>
              </a>
            ) : null}
            {sourceUrl ? (
              <a
                className={`${styles.link} ${styles.secondaryLink}`}
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{sourceLabel}</span>
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default FeaturedProject;
