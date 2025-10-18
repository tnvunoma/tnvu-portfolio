import Header from "./Header";
import NavBar from "./Navbar"
import styles from "./Layout.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
