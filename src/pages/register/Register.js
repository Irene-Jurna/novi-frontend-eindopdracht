import React from "react";
import './Register.css'
import {Link} from "react-router-dom";

function Register() {
    return (
        <article className="full-screen pink-background">
            <section className="form-items">
        <h1>Je wil je registreren, hoera!</h1>
            <form>
                <p>Hier komen de invoervelden</p>
            </form>
                <p>Heb je al een account? Je kunt <Link to="/login">hier</Link> inloggen.</p>
            </section>
        </article>
    )
}

export default Register;