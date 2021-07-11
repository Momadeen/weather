import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <h2 className={styles.logo}>Weather</h2>
    <h4 className={styles.intro}>
      <div>
        <span>R</span>
      </div>
      the whole world comes to you
    </h4>
  </div>
);

export default Header;
