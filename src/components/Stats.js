import styles from "./Stats.module.css";
function Quiz(props) {
  const totalQuestions = props.stats.totalQuestions;
  const value = props.value;

  return (
    <div className={styles.wrapper}>
      <div>
        {(value / totalQuestions) * 100 === 100 ? (
          <>
            <div className={styles.containerTop2}>
              <h2>Finished Session </h2>
              <p>⭐ Favorites: {props.stats.favorites.length}</p>
              <p>🔥 Longest Streak: {props.stats.longestStreak}</p>
              <p>⏰ {totalQuestions} Questions completed</p>
            </div>
            <div></div>
          </>
        ) : (
          <div className={styles.containerTop}>
            <h2>Current Session </h2>
            <p>⭐ {props.stats.favorites.length}</p>
            <p>🔥 {props.stats.streak}</p>
            <p>⏰ {totalQuestions} Questions</p>
          </div>
        )}
      </div>
      <div className={styles.progressBar}>
        <label htmlFor="quiz">{(value / totalQuestions) * 100}%</label>
        <progress id="quiz" value={value} max={totalQuestions}></progress>
      </div>
    </div>
  );
}
export default Quiz;
