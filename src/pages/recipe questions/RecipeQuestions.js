import styles from "./RecipeQuestions.module.css";
import React, { useCallback, useMemo, useState } from "react";
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

    //useCallBack voert de functie uit. UseMemo slaat de waardes op
    const handleClick = useCallback(
        (key) =>
            ({ target: { value } }) => {
                setSelectedOption((prevState) => {
                    return {
                        ...prevState,
                        [key]: value,
                    };
                });
            },
        [setSelectedOption]
    );

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
        try {
            const response = await axios.get(
                `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&health=vegan&${objectToString}`
            );
            setRecipes(response.data.hits);

            const recipeIds = [];
            for (let i = 0; i < 20; i++) {
                const findId =
                    response.data.hits[i].recipe.uri.lastIndexOf("_");
                const findCompleteId = response.data.hits[i].recipe.uri.slice(
                    findId + 1
                );
                recipeIds.push(findCompleteId);
            }
            setId(recipeIds);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <main>
                <header
                    className={
                        id || loading || error
                            ? `${styles.header} ${styles["background--color-green"]}`
                            : `${styles["full-screen"]} ${styles["background--color-green"]}`
                    }
                >
                    <h2>Find all the ingredients for your perfect recipe</h2>

                    <form className={styles.form}>
                        <span className={styles.form__text}>
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
                        </select>

                        <span className={styles.form__text}>
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

                        <span className={styles.form__text}>
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
                            <option value="American&Asian&British&Caribbean&Central%20Europe&Chinese&French&Indian&Japanese&Kosher&Mediterranean&Mexican&Middle%20Eastern&Nordic&South%20American&South%20East%20Asian">
                                any type of
                            </option>
                            <option value="American">American</option>
                            <option value="Asian">Asian</option>
                            <option value="South%20American">
                                South American
                            </option>
                            <option value="Central%20Europe&Eastern%20Europe&French&Nordic">
                                European
                            </option>
                        </select>

                        <span className={styles.form__text}>
                            {" "}
                            cuisine. Diets?{" "}
                        </span>
                        <select
                            className="form-dropdown-menu"
                            id="questionDiets"
                            value={selectedOption.health}
                            onChange={handleClick("health")}
                        >
                            <option value=""></option>
                            <option value="alcohol-free&celery-free&crustacean-free&dairy-free&DASH&egg-free&fish-free&fodmap-free&gluten-free&immuno-supportive&keto-friendly&kidney-friendly&kosher&low-fat-abs&low-potassium&low-sugar&lupine-free&Mediterranean&mollusk-free&mustard-free&no-oil-added&paleo&peanut-free&pescatarian&pork-free&red-meat-free&sesame-free&shellfish-free&soy-free&sugar-conscious&sulfite-free&health=tree-nut-free&health=vegan&health=vegetarian&health=wheat-free">
                                No diets, show me everything!
                            </option>
                            <option value="wheat-free&gluten-free">
                                Wheat and gluten-free
                            </option>
                            <option value="tree-nut-free">Nut-free</option>
                            <option value="fodmap-free">FODMAP</option>
                            <option value="keto-friendly">Keto friendly</option>
                        </select>

                        <div className={styles.form__align}>
                            <Button
                                type="button"
                                onClick={getRecipes}
                                buttonText="Open the cookbook"
                            />
                        </div>
                    </form>
                </header>

                <article className={styles["recipe-container"]}>
                    {recipes.map((recipe, index) => {
                        return (
                            <RecipeCardOnlyText
                                key={index}
                                recipeId={() =>
                                    history.push(`/recipe/${id[index]}`)
                                }
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
                        <Error>
                            <p>
                                Sorry, there are no recipes in our cookbook that
                                match your search request.
                            </p>
                        </Error>
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}

export default RecipeQuestions;
