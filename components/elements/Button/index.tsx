import { FC } from "react";
import styles from "./Button.module.css";
type BtnProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type CustomStyle = {
  [key: string]: string;
};

const VARIANT: CustomStyle = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: `${styles.secondary} ${styles.secondaryColor}`,
};

export const Button: FC<BtnProps> = ({
  children = "click here",
  variant = "primary",
  fullWidth = false,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${styles.btnContainer} ${VARIANT[variant]} ${
        fullWidth ? "w-full" : "w-fit"
      } ${className}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
};
