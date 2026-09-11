import Image from "next/image";
import Reveal from "components/motion/Reveal";
import Section from "components/section/Section";
import { EDUCATION, SITE } from "data/site";
import styles from "./style.module.scss";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      number="01"
      label="About"
      title="Turning Ideas into products"
      layout="split"
    >
      <div className={styles.layout}>
        <Reveal className={styles.copy}>
          <p>
            I&apos;m a Full-Stack Software Developer based in Melbourne with 3+ years of
            professional experience building modern web applications.
          </p>
          <p>
            My work spans interactive React and Next.js interfaces, REST APIs, server-side
            development, PostgreSQL and Supabase databases, authentication and cloud
            deployments.
          </p>
          <p>
            I enjoy turning complex requirements into fast, intuitive and maintainable
            products.
          </p>
        </Reveal>

        <Reveal className={styles.aside} delay={0.12}>
          <div className={styles.portrait}>
            <Image
              src="/img/about.png"
              alt={`Illustrated portrait of ${SITE.name} working at a desk`}
              width={1024}
              height={853}
              sizes="(min-width: 900px) 480px, 90vw"
            />
          </div>
          <aside className={styles.education}>
            <p className={styles.degree}>{EDUCATION.degree}</p>
            <p className={styles.detail}>{EDUCATION.specialization}</p>
            <p className={styles.detail}>{EDUCATION.school}</p>
            <p className={styles.year}>{EDUCATION.year}</p>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
};

export default About;
