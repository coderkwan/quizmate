import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  return (
    <div className={styles.container}>
      <h1>Hello world!!</h1>
      <p>{counter}</p>
      <button onClick={increase}>Count me daddy!</button>
    </div>
  );
};

export default Home;
