import Quiz from "./Quiz";
function Quizzes(props) {
  return (
    <div>
      {props.quizzes.map((quiz) => (
        <Quiz key={quiz.key} name={quiz.name} amount={quiz.questions.length} />
      ))}
    </div>
  );
}
export default Quizzes;
