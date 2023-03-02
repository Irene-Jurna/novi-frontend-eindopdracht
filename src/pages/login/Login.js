import styles from "./Login.module.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../App.css";
import axios from "axios";
import Footer from "../../components/Footer";

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post(
                "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
                {
                    username: username,
                    password: password,
                }
            );
            login(response.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <main
                className={`${styles["full-screen"]} ${styles["full-screen--color-green"]}`}
            >
                <header className={styles.header}>
                    <h1>Login</h1>
                    <p>
                        Login to find recipes that suit your diet, such as
                        lactose-free, FODMAP, or high on protein.
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className={`${styles.form} ${styles.form__text}`}
                >
                    <label htmlFor="email-field">
                        Username:
                        <input
                            className={styles.form__input}
                            type="text"
                            id="username-field"
                            name="username"
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
                            <p
                                className={`${styles.form__text} ${styles["form__text--error"]}`}
                            >
                                Something went wrong. Did you fill in the right
                                username and password? Please try again.
                            </p>
                        )}
                    </article>

                    <button type="submit" className={styles.form__button}>
                        Login
                    </button>
                </form>

                <article>
                    <p>
                        No account yet?{" "}
                        <Link to="/register">Register here</Link> first
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Login;
