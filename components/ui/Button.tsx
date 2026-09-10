import styles from "./button.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  download?: string | boolean;
};

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  download,
}) => {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}
      {...(download ? { download: download === true ? true : download } : undefined)}
    >
      <span>{children}</span>
    </a>
  );
};

export default Button;
