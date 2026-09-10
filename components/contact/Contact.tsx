import Button from "components/ui/Button";
import Reveal from "components/motion/Reveal";
import Section from "components/section/Section";
import { SITE } from "data/site";
import styles from "./style.module.scss";

const Contact: React.FC = () => {
  return (
    <Section id="contact" number="05" label="Contact" title="Let's build something.">
      <Reveal>
        <div className={styles.content}>
          <p>
            I&apos;m currently open to software development opportunities in Melbourne and
            remote roles across Australia.
          </p>
          <p>
            If you&apos;re looking for a Full-Stack Developer or would like to talk about a
            project, feel free to get in touch.
          </p>
          <div className={styles.actions}>
            <Button href={`mailto:${SITE.email}`}>Email me</Button>
            <Button href={SITE.cv} variant="secondary" download="CV_Gabriela_Full_Stack.pdf">
              Download CV
            </Button>
            <Button href={SITE.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
            <Button href={SITE.github} variant="secondary" external>
              GitHub
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
