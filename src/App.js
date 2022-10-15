import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import RecipeSearcher from './pages/recipe search function/RecipeSearcher'

function App() {
    return (
        <>
            <nav>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/recepten-zoeker">Recepten zoeker</NavLink></li>
            </nav>
            <section className="inner-container">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/recepten-zoeker">
                    <RecipeSearcher/>
                </Route>
            </Switch>
            </section>
        </>
    );
}

export default App;
