import styles from "./Flashcard.module.css";
import { useState, useEffect } from "react";
function Flashcard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped((prevF) => false);
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
          {props.question.index + props.question.question}
        </div>
      )}
    </div>
  );
}
export default Flashcard;
