import "./RecipeSearcher.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function RecipeSearcher() {
    const [searchValue, setSearchValue] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();

    const edamameId = "4e1e2f8f";
    const edamameKey = "324092c9d55a77b05f596a354fa9d42f";

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await axios.get(
                    `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${edamameId}&app_key=${edamameKey}&health=vegan&random=true`
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
            <section
                className={
                    query
                        ? "row-container-top champagne-background"
                        : "full-screen champagne-background"
                }
            >
                <h2>Find your recipe</h2>
                <p>Search your favorites</p>
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
                            //className misschien niet nodig vanwege ID?
                            className="search-bar"
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </label>
                </form>
            </section>
            <section className="recipe-container">
                {recipes.map((recipe) => {
                    return (
                        <article
                            className="recipe-list"
                            key={recipe.recipe.label}
                        >
                            <ul
                                className="recipe-ul"
                                onClick={() => history.push(`/recipe/${id}`)}
                            >
                                <li className="recipe-item">
                                    {recipe.recipe.label}
                                    <p className="text-recipe-info">
                                        {recipe.recipe.dishType} -{" "}
                                        {recipe.recipe.cuisineType}
                                    </p>
                                    <p className="text-minutes">
                                        Ready in {recipe.recipe.totalTime}{" "}
                                        minutes
                                    </p>
                                </li>
                            </ul>
                        </article>
                    );
                })}
            </section>
        </>
    );
}

export default RecipeSearcher;
