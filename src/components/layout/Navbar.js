import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbarContainer}>
        <h1 className={styles.logo}>Web-Dev Interviewer</h1>
        <ul className={styles.navbarOptions}>
          <li>
            <Link to="/" className={styles.link}>
              Start Practice
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
