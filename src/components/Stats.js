import styles from "./Stats.module.css";

function Quiz(props) {
  const totalQuestions = props.stats.totalQuestions;
  const value = props.value;
  const attempts = props.stats.attempts;
  return (
    <div className={styles.wrapper}>
      <div>
        {/* if all questions are answered */}
        {(value / totalQuestions) * 100 === 100 ? (
          <>
            <div className={styles.containerTop2}>
              <h2>Finished Session </h2>
              <p>⭐ Favorites: {props.stats.favorites.length}</p>
              <p>🔥 Longest Streak: {props.stats.longestStreak}</p>
              <p>⏰ {totalQuestions} Questions completed</p>
            </div>
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
      {(value / totalQuestions) * 100 === 100 ? (
        attempts.map((question) => (
          <div key={question.id}>
            <h3>Question #{question.index + 1}</h3>
            <p>Number of attempts: {question.attempt}</p>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
export default Quiz;
