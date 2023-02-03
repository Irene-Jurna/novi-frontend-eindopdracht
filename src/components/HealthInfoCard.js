import React from "react";
import "./HealthInfoCard.css";

function HealthInfoCard({ healthInformation }) {
    return (
        <ul className="health-list recipe-item">
            <li key={healthInformation}>{healthInformation}</li>
        </ul>
    );
}

export default HealthInfoCard;
