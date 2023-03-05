import React from "react";
import styles from "./Error.module.css";

function Error({ children }) {
    return (
        <section className={styles.error}>
            <h2 className={styles.error__heading}>
                Unable to display your recipes
            </h2>
            <span className={styles.error__text}>{children}</span>
        </section>
    );
}

export default Error;
