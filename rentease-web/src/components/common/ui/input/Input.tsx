import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import Typography from "../typography";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <div className={styles.stack}>
        <Typography>{label}</Typography>
        <input name={name} ref={ref} className={styles.input} {...props} />
      </div>
    );
  }
);

export default Input;
