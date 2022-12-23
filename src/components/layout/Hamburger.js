import styles from "./Hamburger.module.css";

function Hamburger(props) {
  return (
    <div
      onClick={() => props.onToggle()}
      className={
        props.open ? `${styles.navIcon} ${styles.open}` : styles.navIcon
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
export default Hamburger;
