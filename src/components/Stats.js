function Quiz(props) {
  return (
    <div>
      <h2>Current Session </h2>
      <p>⭐ {props.stats.favorites.length}</p>
      <p>🔥 {props.stats.knownQuestion.length}</p>
      <p>⏰ {props.stats.totalQuestions} Questions</p>
      <label htmlFor="quiz">progress:</label>
      <progress id="quiz" value="1" max={props.stats.totalQuestions}>
        32%
      </progress>
    </div>
  );
}
export default Quiz;
