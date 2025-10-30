import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState("images/cs_banner.jpg");

  useEffect(() => {
    let newImage = "images/noma3.jpg";
    if (location.pathname === "/art") newImage = "images/art_banner.png";
    else if (location.pathname === "/projects") newImage = "images/cs_banner.jpg";

    setCurrentImage(newImage);
  }, [location.pathname]);

  return (
    <div className={styles.headerContainer}>
      <img
        src={currentImage}
        alt="Header"
        className={styles.headerImage}
      />
    </div>
  );
};

export default Header;
