import styles from "./style.module.scss";

type SectionProps = {
  id: string;
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
  tone?: "primary" | "secondary";
  titleAs?: "h2" | "p";
  description?: string;
  layout?: "stack" | "split";
};

const Section: React.FC<SectionProps> = ({
  id,
  number,
  label,
  title,
  children,
  tone = "primary",
  titleAs = "h2",
  description,
  layout = "stack",
}) => {
  const TitleTag = titleAs;

  return (
    <section
      id={id}
      className={`${styles.section} ${styles[tone]}${layout === "split" ? ` ${styles.split}` : ""} anchor`}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.meta}>
            <span>{number}</span>
            <span aria-hidden="true"> / </span>
            <span>{label}</span>
          </p>
          <TitleTag id={`${id}-title`} className={styles.title}>
            {title}
          </TitleTag>
          {description ? <p className={styles.description}>{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
