import styles from "./button.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}) => {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}
    >
      <span>{children}</span>
    </a>
  );
};

export default Button;
