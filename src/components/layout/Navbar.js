import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Hamburger from "./Hamburger";
import { useState } from "react";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  function onToggle() {
    setToggle(() => !toggle);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.navbarContainer}>
        <h1 className={styles.logo}>SmartStudy</h1>
        <ul
          className={toggle ? styles.navbarOptions : styles.navbarOptionshidden}
        >
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
        </ul>
        <Hamburger open={toggle} onToggle={onToggle} />
      </nav>
    </header>
  );
}
export default Navbar;
