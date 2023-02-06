import React from "react";
import styles from "./Button.module.css";

function Button({ type, buttonText, onClick }) {
    return (
        <button
            type={type}
            className={styles["button-component"]}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default Button;
