import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "components/motion/Reveal";
import { experiences, type Experience } from "data/experience";
import styles from "./style.module.scss";

const ease = [0.22, 1, 0.36, 1] as const;

const ExperienceItem: React.FC<{ experience: Experience; index: number }> = ({
  experience,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.45,
    rootMargin: "-10% 0px -35% 0px",
  });

  return (
    <li ref={ref} className={`${styles.item} ${inView ? styles.active : ""}`}>
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.dot} />
      </div>
      <Reveal className={styles.body} delay={index * 0.06}>
        <p className={styles.years}>{experience.yearRange}</p>
        <h3 className={styles.role}>{experience.role}</h3>
        <p className={styles.company}>
          {experience.company}
          <span aria-hidden="true"> · </span>
          {experience.location}
        </p>
        <p className={styles.dates}>{experience.dates}</p>
        <p className={styles.copy}>{experience.description}</p>
        <ul className={styles.tech}>
          {experience.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </Reveal>
    </li>
  );
};

const Experiences: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.wrap}>
      <div className={styles.rail} aria-hidden="true">
        <span className={styles.line} />
        <motion.span
          className={styles.progress}
          initial={reduceMotion ? false : { scaleY: 0 }}
          whileInView={reduceMotion ? undefined : { scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease }}
        />
      </div>
      <ol className={styles.timeline}>
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
};

export default Experiences;
