import Quiz from "./Quiz";
function Quizzes(props) {
  return (
    <div>
      <p>
        Start a new practice by selecting the type of questions and click on the
        Start button
      </p>
      {props.quizzes.map((quiz) => (
        <Quiz
          key={quiz.id}
          name={quiz.name}
          amount={quiz.questions.length}
          getQuizName={() => props.startTheQuiz(quiz.name)}
        />
      ))}
    </div>
  );
}
export default Quizzes;
