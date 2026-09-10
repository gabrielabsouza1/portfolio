import { motion, useReducedMotion } from "framer-motion";
import Button from "components/ui/Button";
import SocialLinks from "components/social/SocialLinks";
import { HERO_TECH, SITE } from "data/site";
import HeroVisual from "./HeroVisual";
import Magnetic from "./Magnetic";
import { useIsMobile } from "hooks/useIsMobile";
import styles from "./style.module.scss";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile(1000);

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          data-reveal
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <motion.p className={styles.intro} variants={reduceMotion ? undefined : item}>
            {SITE.intro}
          </motion.p>
          <motion.h1 className={styles.name} variants={reduceMotion ? undefined : item}>
            <span>{SITE.firstName}</span>
            <span>{SITE.lastName}</span>
          </motion.h1>
          <motion.p className={styles.role} variants={reduceMotion ? undefined : item}>
            {SITE.title}
          </motion.p>
          <motion.p className={styles.description} variants={reduceMotion ? undefined : item}>
            {SITE.description}
          </motion.p>
          <motion.ul className={styles.tech} variants={reduceMotion ? undefined : item}>
            {HERO_TECH.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </motion.ul>
          <motion.div className={styles.actions} variants={reduceMotion ? undefined : item}>
            <Magnetic disabled={Boolean(reduceMotion) || isMobile}>
              <Button href="#projects">View my work</Button>
            </Magnetic>
            <Magnetic disabled={Boolean(reduceMotion) || isMobile}>
              <Button href="#contact" variant="secondary">
                Contact me
              </Button>
            </Magnetic>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.visualWrap}>
        <HeroVisual reducedMotion={Boolean(reduceMotion)} isMobile={isMobile} />
      </div>
    </section>
  );
};

export default Hero;
