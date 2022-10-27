import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import RecipeSearcher from './pages/recipe search function/RecipeSearcher'
import RecipeInformation from "./pages/recipe page/RecipeInformation";

function App() {
    return (
        <>
            <nav className="navbar-container">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/recipe-searchbar">Find recipes</NavLink></li>
            </nav>
            <section className="inner-container">
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
