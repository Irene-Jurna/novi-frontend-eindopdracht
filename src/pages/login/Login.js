import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../App.css";
import axios from "axios";

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
        <article className="green-background full-screen">
            <h1>Login</h1>
            <p>
                Login to find recipes that suit your diet, such as lactose-free,
                FODMAP, or high on protein.
            </p>
            <article className="form-items"></article>
            <form onSubmit={handleSubmit} className="register-form form-text">
                <label htmlFor="email-field">
                    Username:
                    <input
                        className="form-input"
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
                        className="form-input"
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && (
                    <p className="form-error">
                        Something went wrong. Did you fill in the right username
                        and password? Please try again.
                    </p>
                )}
                <button type="submit" className="form-button">
                    Login
                </button>
            </form>
            <p>
                No account yet? <Link to="/register">Register here</Link> first
            </p>
        </article>
    );
}

export default Login;
