import styles from "./Navs.module.scss";

const Navs = ({ links }) => (
  <div className={styles.container}>
    {links?.map((link) => (
      <a href={link?.href}>{link?.name}</a>
    ))}
  </div>
);

export default Navs;
