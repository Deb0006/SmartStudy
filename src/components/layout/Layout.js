import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
function Layout() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default Layout;
