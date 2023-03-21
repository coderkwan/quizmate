import { useState } from "react";
import styles from "../styles/Question.module.css";

export default function Index({ data }) {
  const [answers, setAnswers] = useState([
    ...data.incorrectAnswers,
    data.correctAnswer,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <p>{data.question}</p>
      </div>
      <div className="answers">
        <ol type="A">
          {answers
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
        </ol>
      </div>
    </div>
  );
}
