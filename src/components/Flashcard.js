import styles from "./Flashcard.module.css";
import { useState } from "react";
function Flashcard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  function handleClick() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div onClick={handleClick} className={styles.container}>
      {/* <div>display question:{props.question.question} </div>
      <div>display answer:{props.question.answer} </div> */}
      {isFlipped ? (
        <div className={styles.front}>{props.question.question}</div>
      ) : (
        <div className={styles.back}>{props.question.answer}</div>
      )}
    </div>
  );
}
export default Flashcard;
