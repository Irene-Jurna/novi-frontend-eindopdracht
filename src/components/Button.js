import React from "react";
import {useHistory} from "react-router-dom";
import './Button.css';

function Button({type, buttonText, buttonName}) {
    const history = useHistory();
    return (
        <button
            type={type}
            className="button"
            onClick={() => history.push('/recipe-searchbar')}
        >{buttonText}
        </button>
    );
}

export default Button;