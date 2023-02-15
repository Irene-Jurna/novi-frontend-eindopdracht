import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "./NavBar.module.css";

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
        <nav className={navbar ? styles.navbar : styles["navbar--onscroll"]}>
            <figure className={styles.navbar__logo}>
                <ul className={styles.navbar__link}>
                    <li>
                        <Link to="/" className="nav-logo">
                            <img
                                src={logo}
                                alt="VanVeg logo"
                                className="logo-img"
                            />
                        </Link>
                    </li>
                </ul>
            </figure>
            <ul className={styles.navbar__link}>
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
            <span className={styles["navbar__button-container"]}>
                {isAuth ? (
                    <article>
                        <button
                            type="button"
                            className={styles.navbar__button}
                            onClick={() => history.push("/profile")}
                        >
                            Profile
                        </button>
                        <button
                            type="button"
                            className={styles.navbar__button}
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </article>
                ) : (
                    <article>
                        <button
                            type="button"
                            className={styles.navbar__button}
                            onClick={() => history.push("/login")}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className={styles.navbar__button}
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
