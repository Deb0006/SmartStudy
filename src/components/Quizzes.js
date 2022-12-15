import Quiz from "./Quiz";
import styles from "./Quizzes.module.css";
function Quizzes(props) {
  return (
    <div>
      <p>
        Start a new practice by selecting the type of questions and click on the
        Start button
      </p>
      <div className={styles.cardsContainer}>
        {props.quizzes.map((quiz) => (
          <Quiz
            key={quiz.id}
            name={quiz.name}
            amount={quiz.questions.length}
            getQuizName={() => props.startTheQuiz(quiz.name)}
          />
        ))}
      </div>
    </div>
  );
}
export default Quizzes;
