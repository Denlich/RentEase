import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Typography.module.css";

interface TypographyProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  color?: "error" | "black";
}

const Typography: React.FC<TypographyProps> = ({
  color = "black",
  children,
  ...props
}) => {
  return (
    <p className={styles.typography + " " + styles[color]} {...props}>
      {children}
    </p>
  );
};

export default Typography;
