import styles from "./Stats.module.css";
function Quiz(props) {
  const totalQuestions = props.stats.totalQuestions;
  const value = props.value + 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerTop}>
        <h2>Current Session </h2>
        <p>⭐ {props.stats.favorites.length}</p>
        <p>🔥 {props.stats.knownQuestion.length}</p>
        <p>⏰ {totalQuestions} Questions</p>
      </div>
      <div className={styles.progressBar}>
        <label htmlFor="quiz">{(value / totalQuestions) * 100}%</label>
        <progress id="quiz" value={value} max={totalQuestions}></progress>
      </div>
    </div>
  );
}
export default Quiz;
