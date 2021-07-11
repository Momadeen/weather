import React from "react";
import Bubbles from "./components/Bubbles";
import HeroTitle from "./components/HeroTitle";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Bubbles />
      <HeroTitle />
    </div>
  );
};

export default Hero;
