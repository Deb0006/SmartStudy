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
        <div className={styles.front}>
          <p>{props.question.answer}</p>
        </div>
      ) : (
        <div className={styles.back}>
          <p>
            <b>{props.index + ". " + props.question.question}</b>
          </p>
        </div>
      )}
    </div>
  );
}
export default Flashcard;
