import styles from "../styles/Nav.module.css";
export default function Index() {
    return (
        <div className={styles.footer_container}>
            <p>
                Made for you, for fun. By{" "}
                <a href="https://kwanele.netlify.app">Kwanele Gamedze</a>
            </p>
        </div>
    );
}
