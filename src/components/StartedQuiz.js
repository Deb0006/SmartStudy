import styles from "./StartedQuiz.module.css";
import Flashcard from "./Flashcard";
import Stats from "./Stats";
import { useState } from "react";
function StartedQuiz(props) {
  //how many questions completed in a row
  let allQuestions = props.quiz.questions;

  const [count, setCount] = useState(0);
  const [stats, setStats] = useState({
    favorites: [],
    knownQuestion: [],
    unkownQuestion: [],
    totalQuestions: allQuestions.length,
  });
  function nextQuestionKnown() {
    allQuestions.splice(count, 1);
    count === allQuestions.length - 1
      ? setCount((prevCount) => (prevCount = 0))
      : setCount((prevCount) => prevCount + 1);

    setStats((prevStats) => ({
      knownQuestion: prevStats.knownQuestion.push(allQuestions[count]),
      ...prevStats,
    }));
  }
  function nextQuestionUnknown() {
    count === allQuestions.length - 1
      ? setCount((prevCount) => (prevCount = 0))
      : setCount((prevCount) => prevCount + 1);
    setStats((prevStats) => ({
      unkownQuestion: prevStats.unkownQuestion.push(allQuestions[count]),
      ...prevStats,
    }));
  }
  function setFavorite() {
    setStats((prevStats) => ({
      favorites: prevStats.favorites.push(allQuestions[count]),
      ...prevStats,
    }));
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topic}>
        {props.quiz.name} Dev Interview Quiestions
      </h2>

      {allQuestions === undefined || allQuestions.length === 0 ? (
        <h1>
          Congratulations, you studied all the {props.quiz.name} questions
        </h1>
      ) : (
        <div>
          <Flashcard question={allQuestions[count]} />
          <button className={styles.btn} onClick={nextQuestionUnknown}>
            ❓
          </button>
          <button className={styles.btn} onClick={setFavorite}>
            ⭐
          </button>
          <button className={styles.btn} onClick={nextQuestionKnown}>
            ✔️
          </button>
        </div>
      )}

      <Stats stats={stats} />
    </div>
  );
}
export default StartedQuiz;
