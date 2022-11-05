import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import RecipeSearcher from './pages/recipe search function/RecipeSearcher'
import RecipeInformation from "./pages/recipe page/RecipeInformation";
import logo from './assets/logo.png'
import {useState} from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import NavBar from "./components/NavBar";

function App() {
        return (
            <section>
                <NavBar />
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
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </section>
    );
}

export default App;
