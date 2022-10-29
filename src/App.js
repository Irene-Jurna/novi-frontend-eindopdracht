import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import RecipeSearcher from './pages/recipe search function/RecipeSearcher'
import RecipeInformation from "./pages/recipe page/RecipeInformation";
import logo from './assets/logo.png'
import {useState} from "react";

function App() {
    const [navbar, setNavbar] = useState(false);

    function changeNavbar() {
        if(window.scrollY >=50) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }
    window.addEventListener("scroll", changeNavbar);

    return (
        <>
            <nav className={navbar ? "navbar-container" : "navbar-onscroll"}>
                <article className="navbar-logo">
                    <img src={logo} alt="VanVeg logo" className="logo-img"/>
                </article>
                    <ul className="navbar-links">
                <li><NavLink to="/" activeClassName="navbar-active-link">Home</NavLink></li>
                <li><NavLink to="/recipe-searchbar" activeClassName="navbar-active-link">Find recipes</NavLink></li>
                    </ul>
            </nav>
            <section>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/recipe-searchbar">
                        <RecipeSearcher/>
                    </Route>
                    <Route exact path="/recipe/:id">
                        <RecipeInformation/>
                    </Route>
                </Switch>
            </section>
        </>
    );
}

export default App;
