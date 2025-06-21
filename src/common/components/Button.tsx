import type { ButtonProps } from "../types/ButtonProps";
import styles from "../styles/Button.module.css";
import LoadingText from "./Loading/LoadingText";

// TODO: Zrobić rodzaje przycisków do ANO & ALKOPOLY
const Button = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <LoadingText /> : children}
    </button>
  );
};

export default Button;
