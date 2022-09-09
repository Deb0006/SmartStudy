function Flashcard(props) {
  return (
    <div>
      <h1>Flashcard:</h1>
      <div>display question:{props.question.question} </div>
      <div>display answer:{props.question.answer} </div>
    </div>
  );
}
export default Flashcard;
