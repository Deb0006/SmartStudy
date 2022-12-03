import Quizzes from "../components/Quizzes";
import StartedQuiz from "../components/StartedQuiz";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
// import allQuestions from "../data/allQuestions";
const quizzesCollectionRef = collection(db, "DATA");

function Home() {
  const [DATA, setData] = useState([]);
  useEffect(() => {
    const getQuizzes = async () => {
      const data = await getDocs(quizzesCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getQuizzes();
  }, []);

  const [startQuiz, setStartQuiz] = useState({
    start: false,
    id: nanoid(),
  });
  function restartQuiz() {
    setStartQuiz({
      id: nanoid(),
      start: false,
    });
  }
  function startTheQuiz(name) {
    let questions;
    for (let quiz of DATA) {
      if (quiz.name === name) {
        questions = quiz.questions;
        console.log(questions);
      }
    }
    setStartQuiz({
      id: nanoid(),
      start: true,
      name: name,
      questions: questions,
    });
  }
  return (
    <div>
      <h1>Hi There</h1>

      {startQuiz.start ? (
        <div>
          <button onClick={restartQuiz}>Close practice</button>
          <StartedQuiz quiz={startQuiz} />
        </div>
      ) : (
        <div>
          <Quizzes quizzes={DATA} startTheQuiz={startTheQuiz} />
        </div>
      )}
    </div>
  );
}
export default Home;
