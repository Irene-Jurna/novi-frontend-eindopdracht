import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./NavBar.css";

function NavBar() {
    const history = useHistory();
    const [navbar, setNavbar] = useState(false);
    const { isAuth, logout } = useContext(AuthContext);

    function changeNavbar() {
        if (window.scrollY >= 50) {
            setNavbar(false);
        } else {
            setNavbar(true);
        }
    }

    window.addEventListener("scroll", changeNavbar);

    return (
        <nav className={navbar ? "navbar-container" : "navbar-onscroll"}>
            <figure className="navbar-logo">
                <ul className="navbar-links">
                    <li>
                        <Link to="/ className=nav-logo">
                            <img
                                src={logo}
                                alt="VanVeg logo"
                                className="logo-img"
                            />
                        </Link>
                    </li>
                </ul>
            </figure>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="navbar-tag">
                        {" "}
                        Home{" "}
                    </Link>
                </li>
                <li>
                    <Link to="/recipe-searchbar" className="navbar-tag">
                        {" "}
                        Recipe searchbar{" "}
                    </Link>
                </li>
                <li>
                    <Link to="/recipe-questions" className="navbar-tag">
                        {" "}
                        Recipe questions{" "}
                    </Link>
                </li>
            </ul>
            <span className="navbar-buttons">
                {isAuth ? (
                    <article>
                        <button
                            type="button"
                            className="navbar-button"
                            onClick={() => history.push("/profile")}
                        >
                            Profile
                        </button>
                        <button
                            type="button"
                            className="navbar-button"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </article>
                ) : (
                    <article>
                        <button
                            type="button"
                            className="navbar-button"
                            onClick={() => history.push("/login")}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="navbar-button"
                            onClick={() => history.push("/register")}
                        >
                            Register
                        </button>
                    </article>
                )}
            </span>
        </nav>
    );
}

export default NavBar;
