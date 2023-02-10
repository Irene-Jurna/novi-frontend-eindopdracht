import "./RecipeSearcher.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import RecipeCardOnlyText from "../../components/RecipeCardOnlyText";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

function RecipeSearcher() {
    const [searchValue, setSearchValue] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [id, setId] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        async function fetchRecipes() {
            toggleLoading(true);
            toggleError(false);
            try {
                const response = await axios.get(
                    `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&health=vegan`
                );
                setRecipes(response.data.hits);
                const findId =
                    response.data.hits[0].recipe.uri.lastIndexOf("_");
                const findCompleteId = response.data.hits[0].recipe.uri.slice(
                    findId + 1
                );
                setId(findCompleteId);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (searchValue) {
            fetchRecipes();
        }
    }, [query]);

    function handleSubmit(e) {
        e.preventDefault();
        setQuery(searchValue);
    }

    return (
        <>
            <main>
                <header
                    className={
                        query
                            ? "row-container-top champagne-background"
                            : "full-screen champagne-background"
                    }
                >
                    <section>
                        <h2>Find your recipe</h2>
                        <p>Search your favorites</p>
                    </section>

                    <form
                        className="search-container"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="form-input" className="search-item">
                            Yum... You're almost there:
                            <input
                                type="text"
                                id="form-input"
                                name="input-search"
                                value={searchValue}
                                placeholder="Type here"
                                className="search-bar"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </label>
                    </form>
                </header>

                <article className="recipe-container">
                    {recipes.map((recipe, index) => {
                        return (
                            <RecipeCardOnlyText
                                key={index}
                                recipeId={() => history.push(`/recipe/${id}`)}
                                recipeTitle={recipe.recipe.label}
                                recipeDishType={recipe.recipe.dishType}
                                totalTime={recipe.recipe.totalTime}
                            />
                        );
                    })}
                    {loading && <Loader emoji="🍆" funnyText="Chop chop" />}
                    {error && (
                        <Error text="Your search was received well, but we cannot find recipes for you. Please check if you made a typo. If not, then there was a technical issue on our end. In that case, please wait a few seconds to 1 minute and try connecting again. If the issue keeps happening, you could try to search for recipes via the other tabs in the menu (or navigation bar)." />
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}

export default RecipeSearcher;
