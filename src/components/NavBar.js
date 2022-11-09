import React, {useContext, useState} from "react";
import logo from "../assets/logo.png";
import {NavLink, useHistory} from "react-router-dom";
import "./NavBar.css"
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const history = useHistory();
    const [navbar, setNavbar] = useState(false);
    const {isAuth, logout} = useContext(AuthContext);

    function changeNavbar() {
        if (window.scrollY >= 60) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    window.addEventListener("scroll", changeNavbar);

    return (
        <nav className={navbar ? "navbar-container" : "navbar-onscroll"}>
            <article className="navbar-logo">
                <img src={logo} alt="VanVeg logo" className="logo-img"/>
            </article>
            <ul className="navbar-links">
                <li><NavLink
                    to="/"
                    activeClassName="navbar-active-link"
                >Home</NavLink></li>
                <li><NavLink
                    to="/recipe-searchbar"
                    activeClassName="navbar-active-link"
                >Find recipes</NavLink></li>
            </ul>
            <div>
                {isAuth ?
                    <button
                        type="button"
                        className="navbar-button"
                        onClick={logout}
                    >Logout
                    </button>
                    :
                    <div>
                    <button
                        type="button"
                        className="navbar-button"
                        onClick={() => history.push('/login')}
                    >Login
                    </button>
                    <button
                        type="button"
                        className="navbar-button"
                        onClick={() => history.push('/register')}
                    >Register
                    </button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default NavBar;