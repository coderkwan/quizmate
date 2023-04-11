import { useState, useEffect, useRef } from "react";
import styles from "../styles/Question.module.css";

export default function Index({ data, q_number }) {
    const [answers, setAnswers] = useState([]);

    const [status, setStatus] = useState("Waiting for your answer...");
    const [answered, setAnswered] = useState(false);

    function checkAnswer(event) {
        event.preventDefault();
        const your_answ = event.target.innerText;
        if (!answered) {
            if (your_answ == data.correctAnswer) {
                event.target.style.color = "green";
                console.log("Correct");
                console.log("Answer: ", data.correctAnswer);
                setAnswered(true);
            } else {
                event.target.style.color = "red";
                console.log("Wrong");
                console.log("Expected: ", data.correctAnswer);
                setAnswered(true);
            }
        }
    }

    useEffect(() => {
        setAnswers(
            [...data.incorrectAnswers, data.correctAnswer]
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
        );
    }, [data]);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Question {q_number + 1}/10</p>
            </div>
            <div className={styles.question}>
                <p>{data.question}</p>
            </div>
            <div className="answers">
                <ol type="A">
                    {answers.length > 0 &&
                        answers.map((item: string, index: number) => {
                            return (
                                <li onClick={checkAnswer} key={index}>
                                    {item}
                                </li>
                            );
                        })}
                </ol>
            </div>
            <div>
                <p>{status}</p>
            </div>
        </div>
    );
}
