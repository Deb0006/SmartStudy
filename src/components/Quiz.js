import styles from "./Quiz.module.css";

function Quiz(props) {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}></div>
      <h2 className={styles.topic}>{props.name} Questions</h2>
      <p className={styles.subject}>Web Development</p>
      <hr
        style={{
          color: "grey",
          backgroundColor: "black",
          height: 2,
          border: "none",
          opacity: 0.1,
        }}
      />
      <div className={styles.containerBottom}>
        <h3 className={styles.amount}>{props.amount} Questions</h3>
        <button className={styles.btn} onClick={props.getQuizName}>
          Start
        </button>
      </div>
    </div>
  );
}
export default Quiz;
