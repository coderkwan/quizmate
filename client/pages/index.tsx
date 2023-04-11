import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import SingleQusetion from "../components/SingleQuestion";
import Categories from "../components/Categories";

const Home: NextPage = () => {
    const [data, setData] = useState([]);
    const [question_number, setQuestion_number] = useState(0);

    async function DataFetcher() {
        try {
            const response = await fetch(
                "https://the-trivia-api.com/api/questions/"
            );
            let df = await response.json();
            setData(df);
            console.log(df);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        DataFetcher();
        console.log("effect");
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.category}>{/* <Categories /> */}</div>
            <div className={styles.question}>
                {data.length > 0 ? (
                    <SingleQusetion
                        key={data[question_number]}
                        data={data[question_number]}
                        q_number={question_number}
                    />
                ) : (
                    <div>Loading Questions...</div>
                )}
            </div>
            <div className={styles.buttons}>
                <button
                    onClick={() =>
                        setQuestion_number(
                            question_number > 0
                                ? question_number - 1
                                : question_number
                        )
                    }
                >
                    Previous
                </button>
                <button>Submit</button>
                <button
                    onClick={() =>
                        setQuestion_number(
                            question_number < 9
                                ? question_number + 1
                                : question_number
                        )
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
