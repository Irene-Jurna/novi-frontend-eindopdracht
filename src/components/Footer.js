import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <article className={styles.footer__alignment}>
                <p
                    className={`${styles.footer__text} ${styles["footer__text--bold"]}`}
                >
                    NOVI Hogeschool voor ICT
                </p>
                <p className={styles.footer__text}>Eindproject Irene Jurna</p>
                <time className={styles.footer__text}>2023</time>
            </article>
        </footer>
    );
}

export default Footer;
