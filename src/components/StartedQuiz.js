import styles from "./StartedQuiz.module.css";
import Flashcard from "./Flashcard";
import Stats from "./Stats";
import { useEffect, useState } from "react";
function StartedQuiz(props) {
  // let allQuestions = props.quiz.questions;
  const [allQuestions, setAllQuestions] = useState(props.quiz.questions);
  const [count, setCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[count]);
  const [fail, setFail] = useState([]);

  const [stats, setStats] = useState({
    favorites: [],
    attempt: 0,
    knownQuestion: [],
    unknownQuestions: [],
    totalQuestions: props.quiz.questions.length,
  });

  console.log(allQuestions);
  console.log("count:", count, "attempt", stats.attempt, "fail:", fail);

  useEffect(() => {
    setCurrentQuestion(() => allQuestions[count]);
  }, [count, allQuestions, fail]);
  useEffect(() => {}, [fail]);

  function checkAll() {
    console.log("chacking all:", count);
    setAllQuestions((prevQ) => {
      return prevQ.filter((x, i) => fail.includes(i));
    });
    setStats((prevStats) => ({
      unknownQuestions: prevStats.unknownQuestions.push(fail),
      ...prevStats,
    }));
    setFail((prevF) => []);
    setStats((prevStats) => ({
      attempt: prevStats.attempt + 1,
      ...prevStats,
    }));
  }

  function nextQuestion() {
    //if count is the last index
    if (count === allQuestions.length - 1) {
      setCount((prevCount) => (prevCount = 0));
      checkAll();
    } else {
      setCount((prevCount) => prevCount + 1);
    }

    console.log("fail", fail);
  }

  function nextQuestionUnknown() {
    console.log("question number:", parseInt(currentQuestion.index));
    setFail((prevF) => [...prevF, currentQuestion.index]);
    console.log("curent question:", currentQuestion);
    console.log("fail:", fail.length);
    //if count is the last index
    nextQuestion();
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
        {props.quiz.name} Dev Interview Questions
      </h2>

      {allQuestions === undefined || allQuestions.length === 0 ? (
        <h1>
          Congratulations, you studied all the {props.quiz.name} questions
        </h1>
      ) : (
        <div>
          <Flashcard question={currentQuestion} />
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
