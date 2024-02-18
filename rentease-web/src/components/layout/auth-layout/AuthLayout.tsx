import React, { PropsWithChildren } from "react";
import styles from "./AuthLayout.module.css";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthLayout;
