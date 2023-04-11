import { userInfo } from "os";
import { useState, useEffect, useRef, memo } from "react";
import styles from "../styles/Question.module.css";

const SingleQuestion = ({ data, q_number }) => {
    const [answers, setAnswers] = useState([]);

    const [status, setStatus] = useState("Waiting for your answer...");
    const [answered, setAnswered] = useState(false);
    const [color, setColor] = useState("black");
    const [bg, setBg] = useState("white");
    const [wins, setWins] = useState(0);
    const [score, setScore] = useState(0);

    function checkAnswer(event) {
        event.preventDefault();
        const your_answ = event.target.innerText;
        if (!answered) {
            if (your_answ == data.correctAnswer) {
                setWins(wins + 1);
                setScore((wins / q_number) * 100);
                setBg("#d0ffba");
                event.target.style.color = "green";
                setTimeout(() => {
                    event.target.style.color = "black";
                }, 1000);
                console.log("Correct");
                console.log("Answer: ", data.correctAnswer);
                setStatus("Contrassss!!! You're Correct!");
                setAnswered(true);
                setColor("green");
            } else {
                setScore((wins / q_number) * 100);
                setBg("#ffbaba");
                event.target.style.color = "red";
                setTimeout(() => {
                    event.target.style.color = "black";
                }, 1000);
                console.log("Wrong");
                console.log("Expected: ", data.correctAnswer);
                setStatus(`Wrong!!! Correct answer is: ${data.correctAnswer}`);
                setColor("red");
                setAnswered(true);
            }
        }
    }

    useEffect(() => {
        setColor("black");
        setBg("white");
        setAnswers(
            [...data.incorrectAnswers, data.correctAnswer]
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
        );
        setAnswered(false);
        setStatus("Waiting for your answer.");
    }, [data, q_number]);

    return (
        <div style={{ backgroundColor: bg }} className={styles.container}>
            <div className={styles.top}>
                <p className={styles.qnum}>Question {q_number + 1}/10</p>
                <p className={styles.score}>
                    Score {wins}/{q_number} ={q_number ? Math.ceil(score) : 0}%
                </p>
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
            <div className={styles.status}>
                <p style={{ color: color }}>{status}</p>
            </div>
        </div>
    );
};

export default memo(SingleQuestion);
