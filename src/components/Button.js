import React from "react";
import "./Button.css";

function Button({ type, buttonText, onClick }) {
    return (
        <button type={type} className="button-component" onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default Button;
