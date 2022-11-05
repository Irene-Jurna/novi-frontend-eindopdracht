import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import './Login.css'

function Login() {
    const {login} = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    return (
            <article className="green-background row-container-top home">
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