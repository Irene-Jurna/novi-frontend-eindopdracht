import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../../App.css";
import Button from "../../components/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import RecipeCardOnlyText from "../../components/RecipeCardOnlyText";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

function RecipeQuestions() {
    const [selectedOption, setSelectedOption] = useState({
        mealType: "",
        time: "",
        cuisineType: "",
        health: "",
    });

    const [recipes, setRecipes] = useState([]);
    const [id, setId] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const history = useHistory();

    //useCallBack voert functie uit. UseMemo slaat dingen op
    const handleClick = useCallback(
        (key) =>
            ({ target: { value } }) => {
                setSelectedOption((prevState) => {
                    console.log(key, value);
                    return {
                        ...prevState,
                        [key]: value,
                    };
                });
            },
        [setSelectedOption]
    );

    //Object.values checken in mdn web docs
    //Uit map komt altijd een array, uit reduce kan vanalles komen
    const objectToString = useMemo(
        () =>
            Object.entries(selectedOption).reduce(
                (previousValue, [key, value]) => {
                    if (!value) return previousValue;
                    if (!previousValue) return `${key}=${value}`;
                    return `${previousValue}&${key}=${value}`;
                },
                ""
            ),
        [selectedOption]
    );

    async function getRecipes() {
        toggleLoading(true);
        toggleError(false);
        console.log(objectToString);
        try {
            const response = await axios.get(
                `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&health=vegan&${objectToString}`
            );
            console.log(response.data.hits);
            setRecipes(response.data.hits);
            const findId = response.data.hits[0].recipe.uri.lastIndexOf("_");
            const findCompleteId = response.data.hits[0].recipe.uri.slice(
                findId + 1
            );
            setId(findCompleteId);
            console.log(response.data.hits[0].recipe.uri);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    // Je kan ook alleen de geselecteerde optie in je State opslaan. Of een object met alle opties met een Boolean ‘isSelected’ per optie
    // React form hooks librray & Formik

    return (
        <>
            <main>
                <header
                    className={
                        id || loading || error
                            ? "row-container-top green-background"
                            : "full-screen green-background"
                    }
                >
                    <h2>Find all the ingredients for your perfect recipe</h2>

                    <form className="form-question-list">
                        <span className="form-text">
                            The recipe I'd like to make is for{" "}
                        </span>
                        <select
                            className="form-dropdown-option"
                            id="questionType"
                            value={selectedOption.mealType}
                            onChange={handleClick("mealType")}
                        >
                            <option value=""></option>
                            <option value="Breakfast">breakfast</option>
                            <option value="Lunch">lunch</option>
                            <option value="Dinner">dinner</option>
                            <option value="Teatime">tea or snack time</option>
                            <option value="Cocktailparty">
                                a cocktail party!
                            </option>
                        </select>

                        <span className="form-text">
                            {" "}
                            . My cooking session preferably takes{" "}
                        </span>
                        <select
                            className="form-dropdown-option"
                            id="questionTime"
                            value={selectedOption.time}
                            onChange={handleClick("time")}
                        >
                            <option value="none"></option>
                            <option value="60%2B">
                                lots of time, I love long cooking sessions!
                            </option>
                            <option value="30-60">
                                30 minutes to one hour
                            </option>
                            <option value="30">
                                as little time as possible
                            </option>
                        </select>

                        <span className="form-text">
                            {" "}
                            . And I'd love to cook
                        </span>
                        <select
                            className="form-dropdown-menu"
                            id="questionCuisine"
                            value={selectedOption.cuisineType}
                            onChange={handleClick("cuisineType")}
                        >
                            <option value=""></option>
                            <option value="">any type of</option>
                            <option value="American">American</option>
                            <option value="Asian">Asian</option>
                            <option value="SouthAmerican">
                                South American
                            </option>
                            <option value="European">European</option>
                        </select>

                        <span className="form-text"> cuisine. Diets? </span>
                        <select
                            className="form-dropdown-menu"
                            id="questionDiets"
                            value={selectedOption.health}
                            onChange={handleClick("health")}
                        >
                            <option value=""></option>
                            <option value="">
                                No diets, show me everything!
                            </option>
                            <option value="wheat-free">wheat-free</option>
                            <option value="tree-and-nut">nut-free</option>
                            <option value="fodmap-free">FODMAP</option>
                        </select>

                        <div className="form-center">
                            <Button
                                type="button"
                                onClick={getRecipes}
                                buttonText="Open the cookbook"
                            />
                        </div>
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
                    {loading && (
                        <Loader
                            emoji="🥕"
                            funnyText="Almost reached the boiling point!"
                        />
                    )}
                    {error && (
                        <Error text="Sorry, there are no recipes in our cookbook that match your search request." />
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}

export default RecipeQuestions;
