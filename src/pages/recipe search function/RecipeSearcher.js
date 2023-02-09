import "./RecipeSearcher.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import RecipeCardOnlyText from "../../components/RecipeCardOnlyText";
import Footer from "../../components/Footer";

function RecipeSearcher() {
    const [searchValue, setSearchValue] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await axios.get(
                    `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&health=vegan`
                );
                console.log(response.data.hits);
                setRecipes(response.data.hits);
                const findId =
                    response.data.hits[0].recipe.uri.lastIndexOf("_");
                const findCompleteId = response.data.hits[0].recipe.uri.slice(
                    findId + 1
                );
                setId(findCompleteId);
                console.log(response.data.hits[0].recipe.uri);
            } catch (e) {
                console.error(e);
            }
        }

        if (searchValue) {
            fetchRecipes();
        }
    }, [query]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ searchValue });
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
                    {recipes.map((recipe) => {
                        return (
                            <RecipeCardOnlyText
                                recipeId={() => history.push(`/recipe/${id}`)}
                                recipeTitle={recipe.recipe.label}
                                recipeDishType={recipe.recipe.dishType}
                                totalTime={recipe.recipe.totalTime}
                            />
                        );
                    })}
                </article>
            </main>
            <Footer />
        </>
    );
}

export default RecipeSearcher;
