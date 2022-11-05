import React from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
            <article className="green-background row-container-top home">
            <h1>Login</h1>
            <p>Login to find recipes that suit your diet, such as lactose-free, FODMAP, or high on protein.</p>
            <article className="form-items"></article>
            <form>
                <p>Invoervelden</p>
                <button>Login</button>
            </form>
            <p>No account yet? <Link to="/register">Register here</Link> first</p>
            </article>
    );
}

export default Login;