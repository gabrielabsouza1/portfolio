import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "components/ui/Button";
import SocialLinks from "components/social/SocialLinks";
import { HERO_TECH, SITE } from "data/site";
import HeroVisual from "./HeroVisual";
import Magnetic from "./Magnetic";
import { setHeroPointer, setHeroScroll } from "./scene/pointerStore";
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
  const isMobile = useIsMobile(1023);
  const sectionRef = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: 72, y: 28, visible: false });

  const updatePointer = useCallback(
    (clientX: number, clientY: number) => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
      setHeroPointer(x, y);
      setGlow({
        x: ((clientX - rect.left) / rect.width) * 100,
        y: ((clientY - rect.top) / rect.height) * 100,
        visible: true,
      });
    },
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(-1, -rect.top / Math.max(rect.height, 1)));
      setHeroScroll(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-label="Introduction"
      onPointerMove={reduceMotion || isMobile ? undefined : (event) => updatePointer(event.clientX, event.clientY)}
      onPointerLeave={() => {
        setHeroPointer(0, 0);
        setGlow((current) => ({ ...current, visible: false }));
      }}
    >
      {!reduceMotion && !isMobile ? (
        <div
          className={styles.pointerGlow}
          style={{
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            opacity: glow.visible ? 0.55 : 0,
          }}
        />
      ) : null}
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

        <motion.div
          className={styles.visualWrap}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          <HeroVisual reducedMotion={Boolean(reduceMotion)} isMobile={isMobile} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
