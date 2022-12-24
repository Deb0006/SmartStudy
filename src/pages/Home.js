import Quizzes from "../components/Quizzes";
import StartedQuiz from "../components/StartedQuiz";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import styles from "./Home.module.css";
// import allQuestions from "../data/allQuestions";
const quizzesCollectionRef = collection(db, "DATA");

function Home() {
  const [DATA, setData] = useState([]);
  const [startQuiz, setStartQuiz] = useState({
    start: false,
    id: nanoid(),
  });
  // fetch data from DB
  useEffect(() => {
    const getQuizzes = async () => {
      const data = await getDocs(quizzesCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getQuizzes();
  }, []);

  // back button that restarts the quiz
  function restartQuiz() {
    setStartQuiz({
      id: nanoid(),
      start: false,
    });
  }

  // Start the quiz according to user selection
  function startTheQuiz(name) {
    let selectedQuestions;
    let selectedID;
    for (let quiz of DATA) {
      if (quiz.name === name) {
        selectedQuestions = quiz.questions;
        selectedID = quiz.id;
      }
    }
    setStartQuiz({
      idAttempt: nanoid(),
      idQuiz: selectedID,
      start: true,
      name: name,
      questions: selectedQuestions,
    });
  }
  return (
    <div className={styles.container}>
      <h1>Hi There</h1>
      {startQuiz.start ? (
        <div>
          <button onClick={restartQuiz}>←</button>
          <StartedQuiz quiz={startQuiz} />
        </div>
      ) : (
        <div>
          {/* Cards of quizzes to choose from */}
          <Quizzes quizzes={DATA} startTheQuiz={startTheQuiz} />
        </div>
      )}
    </div>
  );
}
export default Home;
