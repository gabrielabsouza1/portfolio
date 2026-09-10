import Button from "components/ui/Button";
import Reveal from "components/motion/Reveal";
import Section from "components/section/Section";
import { SITE } from "data/site";
import styles from "./style.module.scss";

const Contact: React.FC = () => {
  return (
    <Section id="contact" number="05" label="Contact" title="Contact">
      <Reveal>
        <div className={styles.panel}>
          <p className={styles.location}>{SITE.location}</p>
          <div className={styles.actions}>
            <Button href={SITE.github} external>
              GitHub
            </Button>
            <Button href={SITE.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
