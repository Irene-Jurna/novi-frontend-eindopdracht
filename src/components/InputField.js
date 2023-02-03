import React from "react";

function InputField({ id, name, text, type, onChange }) {
    return (
        <label htmlFor={id}>
            {text}
            <input
                className="form-input"
                type={type}
                id={id}
                name={name}
                value={name}
                onChange={onChange}
            />
        </label>
    );
}

export default InputField;
