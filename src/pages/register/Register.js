import styles from "./Register.module.css";
import React, { useState } from "react";
import "../../App.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post(
                "https://frontend-educational-backend.herokuapp.com/api/auth/signup",
                {
                    email: email,
                    username: username,
                    password: password,
                }
            );
            console.log(response);
            console.log(email, username, password);
            history.push("/login");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <main
                className={`${styles["full-screen"]} ${styles["full-screen--color-pink"]}`}
            >
                <header>
                    <h1>Je wil je registreren, hoera!</h1>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className={`${styles.form} ${styles.form__text}`}
                >
                    <label htmlFor="email-field">
                        Email:
                        <input
                            className={styles.form__input}
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
                            className={styles.form__input}
                            type="text"
                            id="username-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label htmlFor="password-field">
                        Password:
                        <input
                            className={styles.form__input}
                            type="password"
                            id="password-field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <article>
                        {error && (
                            <p className="form-error">
                                Registration error. Please fill in a valid email
                                address and a password of minimal 6 characters.
                            </p>
                        )}
                    </article>

                    <button type="submit" className={styles.form__button}>
                        Register
                    </button>

                    <article>
                        <p>
                            Heb je al een account? Je kunt{" "}
                            <Link to="/login">hier</Link> inloggen.
                        </p>
                    </article>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default Register;
