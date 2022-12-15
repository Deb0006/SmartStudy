import styles from "./StartedQuiz.module.css";
import Flashcard from "./Flashcard";
import Stats from "./Stats";
import { useState } from "react";
function StartedQuiz(props) {
  const [allQuestions, setAllQuestions] = useState(props.quiz.questions);

  const [stats, setStats] = useState({
    favorites: [],
    attempt: 0,
    knownQuestion: [],
    unknownQuestions: [],
    totalQuestions: props.quiz.questions.length,
  });

  function nextQuestion() {
    setAllQuestions((prevQ) => {
      return prevQ.filter((q, i) => i !== 0);
    });
  }

  function nextQuestionUnknown() {
    setAllQuestions((prevQ) => [...prevQ, allQuestions[0]]);
    setAllQuestions((prevQ) => {
      return prevQ.filter((q, i) => i !== 0);
    });
  }

  function setFavorite() {
    setStats((prevStats) => ({
      favorites: prevStats.favorites.push(allQuestions[0]),
      ...prevStats,
    }));
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topic}>
        {props.quiz.name} Dev Interview Questions
      </h2>

      {allQuestions === undefined || allQuestions.length === 0 ? (
        <h1>
          Congratulations, you studied all the {props.quiz.name} questions
        </h1>
      ) : (
        <div>
          <Flashcard question={allQuestions[0]} />
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={nextQuestionUnknown}>
              ❓
            </button>
            <button className={styles.btn} onClick={setFavorite}>
              ⭐
            </button>
            <button className={styles.btn} onClick={nextQuestion}>
              ✔️
            </button>
          </div>
        </div>
      )}

      <Stats
        stats={stats}
        value={props.quiz.questions.length - allQuestions.length}
      />
    </div>
  );
}
export default StartedQuiz;
