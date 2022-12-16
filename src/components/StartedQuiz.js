import styles from "./StartedQuiz.module.css";
import Flashcard from "./Flashcard";
import Stats from "./Stats";
import { useState } from "react";
import { nanoid } from "nanoid";
function StartedQuiz(props) {
  const [allQuestions, setAllQuestions] = useState(props.quiz.questions);
  const [stats, setStats] = useState({
    questionID: props.quiz.id,
    favorites: [],
    streak: 1,
    longestStreak: 1,
    attempts: [],
    totalQuestions: props.quiz.questions.length,
  });
  const currentIndex = props.quiz.questions.indexOf(allQuestions[0]);

  function nextQuestion() {
    setAllQuestions((prevQ) => {
      return prevQ.filter((q, i) => i !== 0);
    });
    // set streak
    setStats((prevStats) => ({
      ...prevStats,
      streak: prevStats.streak + 1,
    }));
    // save longest streak
    if (stats.streak > stats.longestStreak) {
      setStats((prevStats) => ({
        ...prevStats,
        longestStreak: prevStats.longestStreak + 1,
      }));
    }
    // save how many attempts per question
    const currentAttempt = stats.attempts.find((a) => a.index === currentIndex);
    if (!currentAttempt) {
      console.log(" this");
      setStats((prevStats) => ({
        ...prevStats,
        attempts: [
          ...prevStats.attempts,
          { index: currentIndex, attempt: 1, id: nanoid() },
        ],
      }));
    } else {
      console.log(" and here");
      setStats((prevStats) => ({
        ...prevStats,
        attempts: prevStats.attempts.map((a) =>
          a.index === currentIndex ? { ...a, attempt: a.attempt + 1 } : a
        ),
      }));
    }
  }

  function nextQuestionUnknown() {
    setAllQuestions((prevQ) => [...prevQ, allQuestions[0]]);
    setAllQuestions((prevQ) => {
      return prevQ.filter((q, i) => i !== 0);
    });
    // restart streak
    setStats((prevStats) => ({
      ...prevStats,
      streak: 1,
    }));

    //set number of attempts per question
    const currentAttempt = stats.attempts.find(
      (a) => a.index === allQuestions[0].index
    );
    console.log("here");
    if (!currentAttempt) {
      setStats((prevStats) => ({
        ...prevStats,
        attempts: [
          ...prevStats.attempts,
          { index: currentIndex, attempt: 1, id: nanoid() },
        ],
      }));
    } else {
      console.log(" and here");
      setStats((prevStats) => ({
        ...prevStats,
        attempts: prevStats.attempts.map((a) =>
          a.index === currentIndex ? { ...a, attempt: a.attempt + 1 } : a
        ),
      }));
    }
  }

  // save favorite
  function setFavorite() {
    if (!stats.favorites.includes(allQuestions[0])) {
      setStats((prevStats) => ({
        favorites: prevStats.favorites.push(allQuestions[0]),
        ...prevStats,
      }));
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topic}>
        {props.quiz.name} Dev Interview Questions
      </h2>

      {/* if all questions are answered */}
      {allQuestions === undefined || allQuestions.length === 0 ? (
        <h1>
          Congratulations, you studied all the {props.quiz.name} questions
        </h1>
      ) : (
        <div>
          <Flashcard question={allQuestions[0]} index={currentIndex} />
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
