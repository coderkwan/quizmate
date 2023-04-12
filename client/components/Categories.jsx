import styles from "../styles/Category.module.css";

export default function Index() {
    return (
        <div className={styles.container}>
            <h4>Select a desired category:</h4>
            <div className={styles.list}>
                <p>Random</p>
                <p>Music</p>
                <p>Geography</p>
                <p>Science</p>
                <p>Sports</p>
            </div>
        </div>
    );
}
