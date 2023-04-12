import { useEffect, useState, createContext } from "react";
import styles from "../styles/Home.module.css";
import SingleQuestion from "../components/SingleQuestion";
import completeContext from "../components/completeContext";

const Home = () => {
    const [data, setData] = useState([]);
    const [question_number, setQuestion_number] = useState(0);

    const [complete, setComplete] = useState(false);
    const value = { complete, setComplete };

    async function DataFetcher() {
        try {
            const response = await fetch(
                "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10&difficulty=medium"
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
        <completeContext.Provider value={value}>
            <div className={styles.container}>
                {/* <div className={styles.category}>{<Categories />}</div> */}
                <div className={styles.question}>
                    {data.length > 0 ? (
                        <SingleQuestion
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
                        style={{
                            backgroundColor: complete ? "dodgerblue" : "grey",
                        }}
                        onClick={() => {
                            complete &&
                                setQuestion_number(
                                    question_number < 9
                                        ? question_number + 1
                                        : question_number
                                );
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </completeContext.Provider>
    );
};

export default Home;
