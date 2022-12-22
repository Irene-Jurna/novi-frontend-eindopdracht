import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./NavBar.css";
import { AuthContext } from "../context/AuthContext";

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
            <article className="navbar-logo">
                <NavLink to="/" classname="home-button">
                    <a href="" className="logo-img"></a>
                    <img src={logo} alt="VanVeg logo" className="logo-img" />
                </NavLink>
            </article>
            <ul className="navbar-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? styles["active-link"]
                                : styles["default-link"]
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/recipe-searchbar"
                        className={({ isActive }) =>
                            isActive
                                ? styles["active-link"]
                                : styles["default-link"]
                        }
                    >
                        Recipe searchbar
                    </NavLink>
                </li>
                {/*Deze code is uitgecommentarieerd, omdat de pagina nog niet af is (maar wel bijna). Ik heb het laten staan, zodat de code snel weer aangezet kan worden op het moment dat de pagina volledig werkt*/}
                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        to="/recipe-questions"*/}
                {/*        className={({ isActive }) =>*/}
                {/*            isActive*/}
                {/*                ? styles["active-link"]*/}
                {/*                : styles["default-link"]*/}
                {/*        }*/}
                {/*    >*/}
                {/*        Recipe questions*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
            </ul>
            <div className="navbar-buttons">
                {isAuth ? (
                    <div>
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
                    </div>
                ) : (
                    <div>
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
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
