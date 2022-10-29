import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import RecipeSearcher from './pages/recipe search function/RecipeSearcher'
import RecipeInformation from "./pages/recipe page/RecipeInformation";
import cauliflowerGray from './assets/cauliflowerGray.png'

function App() {
    return (
        <>
            <nav className="navbar-container">
                <article className="logo">
                    <img src={cauliflowerGray} alt="Cauliflower logo" className="logo-img"/>
                </article>
                <section className="navbar-links">
                <li><NavLink to="/" activeClassName="navbar-active-link">Home</NavLink></li>
                <li><NavLink to="/recipe-searchbar" activeClassName="navbar-active-link">Find recipes</NavLink></li>
                </section>
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
