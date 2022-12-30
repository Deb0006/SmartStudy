import Quiz from "./Quiz";
import styles from "./Quizzes.module.css";
function Quizzes(props) {
  return (
    <div>
      <p>
        Start a new practice by clicking on the Start button to select the type
        of questions
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
