import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <h2 className={styles.logo}>Weather</h2>
  </div>
);

export default Header;
