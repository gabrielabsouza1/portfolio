import Reveal from "components/motion/Reveal";
import { exploringSkills, skillGroups } from "data/skills";
import styles from "./style.module.scss";

const Skills: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.matrix}>
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} className={styles.group} delay={index * 0.04}>
            <section aria-labelledby={`${group.id}-title`}>
              <h3 id={`${group.id}-title`} className={styles.heading}>
                {group.label}
              </h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.exploring} delay={0.12}>
        <section aria-labelledby={`${exploringSkills.id}-title`}>
          <h3 id={`${exploringSkills.id}-title`} className={styles.heading}>
            {exploringSkills.label}
          </h3>
          <ul className={styles.list}>
            {exploringSkills.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  );
};

export default Skills;
