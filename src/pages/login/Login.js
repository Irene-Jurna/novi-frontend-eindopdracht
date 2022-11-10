import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import './Login.css'
import axios from "axios";

function Login() {
    const {login} = useContext(AuthContext);

    // Verstuur inloggegevens via een post-request naar de backend. Er komt een token terug. De rest door context (token opslaan in localStorage, nieuwe data opvragen van gebruiker als nodig, gegevens opslaan in Context, authentication naar true)

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: 'Pietje Puk',
                password: '123456',
            });
            login(response.data.accessToken);
        } catch(e) {
            console.error(e);
        }
    }

    return (
            <article className="green-background full-screen">
            <h1>Login</h1>
            <p>Login to find recipes that suit your diet, such as lactose-free, FODMAP, or high on protein.</p>
            <article className="form-items"></article>
            <form onSubmit={handleSubmit}>
                <p>Invoervelden</p>
                <button className="button">Login</button>
            </form>
            <p>No account yet? <Link to="/register">Register here</Link> first</p>
            </article>
    );
}

export default Login;