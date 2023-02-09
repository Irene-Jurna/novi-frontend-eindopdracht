import React from "react";
import styles from "./HealthInfoCard.module.css";

function HealthInfoCard({ healthInformation }) {
    return (
        <ul className={styles["health-label"]}>
            <li key={healthInformation}>{healthInformation}</li>
        </ul>
    );
}

export default HealthInfoCard;
