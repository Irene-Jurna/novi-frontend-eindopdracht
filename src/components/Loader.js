import React from "react";
import styles from "./Loader.module.css";

function Loader({ emoji, funnyText }) {
    return (
        <article className={styles.loader}>
            <h3 className={styles["loader__text"]}>
                {emoji} {funnyText} (...loading) {emoji}
            </h3>
        </article>
    );
}

export default Loader;
