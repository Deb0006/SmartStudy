import styles from "./StartedQuiz.module.css";
import Flashcard from "./Flashcard";
import Stats from "./Stats";
import { useState } from "react";
function StartedQuiz(props) {
  //shared variables:
  //saved question, question known ✓, question unknown ✕
  //how many questions completed
  //how many questions completed in a row
  const [count, setCount] = useState(0);

  const [stats, setStats] = useState({
    favorites: [],
    knownQuestion: [],
    unkownQuestion: [],
  });
  function nextQuestionKnown() {
    if (count === props.quiz.questions.length - 1) {
      setCount((prevCount) => (prevCount = 0));
    } else {
      setCount((prevCount) => prevCount + 1);
    }
    setStats((pevStats) => ({
      ...pevStats,
      knownQuestion: "",
    }));
  }
  function nextQuestionUnknown() {
    if (count === props.quiz.questions.length - 1) {
      setCount((prevCount) => (prevCount = 0));
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topic}>
        {props.quiz.name} Dev Interview Quiestions
      </h2>

      <Flashcard question={props.quiz.questions[count]} />
      <button className={styles.btn} onClick={nextQuestionUnknown}>
        ❓
      </button>
      <button className={styles.btn}>⭐</button>
      <button className={styles.btn} onClick={nextQuestionKnown}>
        ✔️
      </button>

      <Stats stats={stats} />
    </div>
  );
}
export default StartedQuiz;
