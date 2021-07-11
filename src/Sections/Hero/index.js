import React from "react";
import Navs from "../../components/Navs";
import Bubbles from "./components/Bubbles";
import HeroTitle from "./components/HeroTitle";
import styles from "./hero.module.scss";

const links = [
  { name: "Forcast", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },

  { name: "News", href: "#" },
  { name: "Home", href: "#" },
];

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Bubbles />
      <HeroTitle />
      <Navs links={links} />
    </div>
  );
};

export default Hero;
