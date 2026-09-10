import FeaturedProject from "./FeaturedProject";
import MoreProjectCard from "./MoreProjectCard";
import CoreGuardVisual from "./visuals/CoreGuardVisual";
import JobCompassVisual from "./visuals/JobCompassVisual";
import { featuredProjects, moreProjects } from "data/projects";
import styles from "./style.module.scss";

const visuals = {
  jobcompass: <JobCompassVisual />,
  coreguard: <CoreGuardVisual />,
} as const;

const Projects: React.FC = () => {
  return (
    <div className={styles.stack}>
      {featuredProjects.map((project) => {
        const { visual, ...projectData } = project;

        return (
          <FeaturedProject
            key={project.id}
            {...projectData}
            visual={visuals[visual]}
          />
        );
      })}

      {moreProjects.length > 0 ? (
        <section className={styles.more} aria-labelledby="more-projects-title">
          <h3 id="more-projects-title" className={styles.moreHeading}>
            More projects
          </h3>
          <div className={styles.moreGrid}>
            {moreProjects.map((project) => (
              <MoreProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Projects;
