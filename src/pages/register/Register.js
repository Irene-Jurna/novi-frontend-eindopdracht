import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// Voor CSS in de banana security professional kijken :)

function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://frontend-educational-backend.herokuapp.com/api/auth/signup",
                {
                    email: email,
                    username: username,
                    password: password,
                }
            );
            // Hier komt nog een headers object met keys. Les 7 Nova 30:30 . Bearer etc.
            console.log(response);
            console.log(email, username, password);
            history.push("/login");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <article className="full-screen pink-background">
            <section>
                <h1>Je wil je registreren, hoera!</h1>
                <form onSubmit={handleSubmit} className="register-form">
                    <label htmlFor="email-field">
                        Email:
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label htmlFor="username-field">
                        Username:
                        <input
                            type="text"
                            id="username-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label htmlFor="password-field">
                        Password:
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="form-button">
                        Register
                    </button>

                    <p>
                        Heb je al een account? Je kunt{" "}
                        <Link to="/login">hier</Link> inloggen.
                    </p>
                </form>
            </section>
        </article>
    );
}

export default Register;
