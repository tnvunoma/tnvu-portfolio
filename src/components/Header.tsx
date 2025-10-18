import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Noma Vu</h1>
      <p className={styles.subtitle}>Software Engineer & Graphics Enthusiast</p>
    </header>
  );
};

export default Header;
