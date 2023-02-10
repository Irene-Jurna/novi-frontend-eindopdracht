import React from "react";
import styles from "./Error.module.css";

function Error({ text }) {
    return (
        <section className={styles.error}>
            <h2 className={styles.error__heading}>
                Unable to display your recipes
            </h2>
            <p className={styles.error__text}>{text}</p>
        </section>
    );
}

export default Error;
