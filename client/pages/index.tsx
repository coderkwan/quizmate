import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import SingleQusetion from "../components/SingleQuestion";
import Categories from "../components/Categories";

const Home: NextPage = () => {
    const [data, setData] = useState([]);

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
        console.log("Useeffect");
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <Categories />
            </div>
            <div className={styles.question}>
                {data.length > 0 ? (
                    <SingleQusetion key={1} data={data[0]} />
                ) : (
                    // data.map((item, index) => {
                    //     return (
                    //         <div>
                    //             <SingleQusetion key={index} data={item} />
                    //         </div>
                    //     );
                    // })
                    <div>Loading Questions...</div>
                )}
            </div>
        </div>
    );
};

export default Home;
