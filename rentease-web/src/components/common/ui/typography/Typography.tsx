import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Typography.module.css";

interface TypographyProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <p className={styles.typography} {...props}>
      {children}
    </p>
  );
};

export default Typography;
