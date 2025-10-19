import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const phrases = [
    "How's the weather over there?",
    "Hey, glad you're here!",
    "Good to see you again!",
    "Enjoying your stay?",
    "Mi casa, Su casa!",
    "You come here often?",
  ];

  const [navText, setNavText] = useState("Welcome");

  useEffect(() => {
    if (isHome) {
      const random = phrases[Math.floor(Math.random() * phrases.length)];
      setNavText(random);
    } else {
      setNavText("ᓚᘏᗢ | Noma Vu");
    }
  }, [isHome]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <span className={styles.navText}>{navText}</span>

        <div className={styles.linkGroup}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            CS Projects
          </NavLink>
          <NavLink
            to="/art"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Art Portfolio
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
