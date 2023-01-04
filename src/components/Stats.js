import styles from "./Stats.module.css";

function Quiz(props) {
  const totalQuestions = props.stats.totalQuestions;
  const value = props.value;
  const attempts = props.stats.attempts;

  const table = attempts.map((question, i) => (
    <div key={question.id}>
      <div>
        <div className={styles.containerStatsBottom}>
          <p>{i + 1}</p>
          <p>{question.question.question}</p>
          <p>{question.attempt}</p>
          {question.favorites ? <p>⭐</p> : <p>☆</p>}
        </div>
      </div>
      <hr
        style={{
          color: "#d4d4d4",
          backgroundColor: "#d4d4d4",
        }}
      />
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div>
        {/* if all questions are answered */}
        {(value / totalQuestions) * 100 === 100 ? (
          <>
            <div className={styles.containerTop2}>
              <h2>Finished Session </h2>
              <p>⭐ Favorites: {props.stats.totalFavorites.length}</p>
              <p>🔥 Longest Streak: {props.stats.longestStreak}</p>
              <p>⏰ {totalQuestions} Questions completed</p>
            </div>
          </>
        ) : (
          <div className={styles.containerTop}>
            <h2>Current Session </h2>
            <p>⭐ {props.stats.totalFavorites.length}</p>
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
        <div className={styles.containerStats}>
          <div className={styles.containerStatsTop}>
            <h4>Number</h4>
            <h4>Question</h4>
            <h4>Attempts</h4>
            <h4>Favorites</h4>
          </div>
          {table}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Quiz;
