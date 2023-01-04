import styles from "./StartedQuiz.module.css";
import Flashcard from "./Flashcard";
import Stats from "./Stats";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
function StartedQuiz(props) {
  const [allQuestions, setAllQuestions] = useState(props.quiz.questions);
  const [stats, setStats] = useState({
    questionID: props.quiz.id,
    totalFavorites: [],
    streak: 1,
    longestStreak: 1,
    attempts: [],
    totalQuestions: props.quiz.questions.length,
  });
  const currentIndex = props.quiz.questions.indexOf(allQuestions[0]);
  let fav = false;

  // set attempt to one and favorite to false inside attempts per questions
  useEffect(() => {
    for (let i = 0; i < props.quiz.questions.length; i++) {
      setStats((prevStats) => ({
        ...prevStats,
        attempts: [
          ...prevStats.attempts,
          {
            question: props.quiz.questions[i],
            attempt: 0,
            id: nanoid(),
            favorites: false,
          },
        ],
      }));
    }
  }, [props.quiz.questions]);

  function nextQuestion() {
    // remove question
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
    // set add # of attempts per question
    setStats((prevStats) => ({
      ...prevStats,
      attempts: prevStats.attempts.map((a) =>
        a.question === allQuestions[0] ? { ...a, attempt: a.attempt + 1 } : a
      ),
    }));
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
    //set # of attempts per question
    setStats((prevStats) => ({
      ...prevStats,
      attempts: prevStats.attempts.map((a) =>
        a.question === allQuestions[0] ? { ...a, attempt: a.attempt + 1 } : a
      ),
    }));
  }

  // save favorites
  function setFavorite() {
    fav = !fav;
    if (fav && !stats.totalFavorites.includes(allQuestions[0].question)) {
      setStats((prevStats) => ({
        totalFavorites: prevStats.totalFavorites.push(allQuestions[0].question),
        ...prevStats,
      }));
    } else if (stats.totalFavorites.includes(allQuestions[0].question)) {
      setStats((prevStats) => ({
        totalFavorites: prevStats.totalFavorites.pop(),
        ...prevStats,
      }));
    }
    setStats((prevStats) => ({
      ...prevStats,
      attempts: prevStats.attempts.map((a) =>
        a.question === allQuestions[0] ? { ...a, favorites: !a.favorites } : a
      ),
    }));
  }

  return (
    <div className={styles.wrapper}>
      {/* if all questions are answered */}
      {allQuestions === undefined || allQuestions.length === 0 ? (
        <h2>
          Congratulations, you studied all the {props.quiz.name} questions
        </h2>
      ) : (
        <div>
          <h2 className={styles.topic}>
            {props.quiz.name} Dev Interview Questions
          </h2>
          <Flashcard question={allQuestions[0]} index={currentIndex} />
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={nextQuestionUnknown}>
              ❌
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
        questions={props.quiz.questions}
      />
    </div>
  );
}
export default StartedQuiz;
