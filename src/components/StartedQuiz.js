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
  // const [stats, setStats] = useState({
  //   favorites: {},
  // });
  console.log(count);
  console.log(props.quiz.questions.length);
  console.log(count < props.quiz.questions.length);
  function nextQuestion() {
    if (count === props.quiz.questions.length - 1) {
      setCount((prevCount) => (prevCount = 0));
    } else {
      console.log("count restarted");
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topic}>
        {props.quiz.name} Dev Interview Quiestions
      </h2>

      <Flashcard
        // question={props.quiz.question[count]}
        question={props.quiz.questions[count]}
      />
      <button onClick={nextQuestion}>Get Next Question</button>

      <Stats />
    </div>
  );
}
export default StartedQuiz;
