import styles from "./Flashcard.module.css";
import { useState } from "react";
function Flashcard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  function handleClick() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div onClick={handleClick} className={styles.container}>
      {isFlipped ? (
        <div className={styles.front}>{props.question.answer}</div>
      ) : (
        <div className={styles.back}>{props.question.question}</div>
      )}
    </div>
  );
}
export default Flashcard;
