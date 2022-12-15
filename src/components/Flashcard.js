import styles from "./Flashcard.module.css";
import { useState, useEffect } from "react";
function Flashcard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [props.question.answer]);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      {isFlipped ? (
        <div className={styles.front}>{props.question.answer}</div>
      ) : (
        <div className={styles.back}>
          <b>{props.question.question}</b>
        </div>
      )}
    </div>
  );
}
export default Flashcard;
