import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import './Login.css'
import axios from "axios";

function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    // const [error, setError] = useState('');
    const {login} = useContext(AuthContext);
// user komt uit de les van Sam, misschien niet nodig voor deze opdracht (staat niet in de uitwerkingen)
    // Verstuur inloggegevens via een post-request naar de backend. Er komt een token terug. De rest door context (token opslaan in localStorage, nieuwe data opvragen van gebruiker als nodig, gegevens opslaan in Context, authentication naar true)

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(response);
            login(response.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <article className="green-background full-screen">
            <h1>Login</h1>
            <p>Login to find recipes that suit your diet, such as lactose-free, FODMAP, or high on protein.</p>
            <article className="form-items"></article>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email-field">
                    Username:
                    <input
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
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button
                    type="submit"
                    className="button"
                >
                    Login
                </button>
            </form>
            <p>No account yet? <Link to="/register">Register here</Link> first</p>
        </article>
    );
}

export default Login;