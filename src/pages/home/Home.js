import "./Home.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { useHistory, Link } from "react-router-dom";
import RecipeCardWithImage from "../../components/RecipeCardWithImage";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import styles from "./Home.module.css";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [id, setId] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const history = useHistory();

    const veggieImages = [
        {
            title: "Broccoli",
            image: "broccoli",
        },
        {
            title: "Apples",
            image: "apples",
        },
        {
            title: "Chicory",
            image: "chicory",
        },
        {
            title: "Asparagus",
            image: "asparagus",
        },
        {
            title: "Red Cabbage",
            image: "redcabbage",
        },
        {
            title: "Parsnip",
            image: "parsnip",
        },
        {
            title: "Radish",
            image: "radish",
        },

        {
            title: "Leek",
            image: "leek",
        },
        {
            title: "Pear",
            image: "pear",
        },
    ];

    useEffect(() => {
        async function fetchRecipes() {
            toggleLoading(true);
            toggleError(false);
            try {
                const result = await axios.get(
                    `https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&health=vegan&random=true`
                );
                setRecipes(result.data.hits);
                const findId = result.data.hits[0].recipe.uri.lastIndexOf("_");
                const findCompleteId = result.data.hits[0].recipe.uri.slice(
                    findId + 1
                );
                setId(findCompleteId);
                console.log("Home ID: " + findCompleteId);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchRecipes();
    }, []);

    function test() {
        return `<Link to="/">test</Link>`;
    }

    return (
        <>
            <main>
                <header
                    className={`${styles["background-image"]} ${styles["row-container-top"]} ${styles["yellow-background"]}`}
                >
                    <section>
                        <h1>VanVeg</h1>
                        <p className={styles["intro-text"]}>
                            VanVeg is the vegan Hot spot online. Our
                            mouth-watering, traditional curries from all over
                            the world, healthy snacks and heavenly sweets will
                            have you.
                        </p>
                        <Button
                            type="text"
                            buttonText="Find recipes"
                            onClick={() => history.push("/recipe-searchbar")}
                        />
                    </section>
                </header>

                <section className={styles["recipe-card-container"]}>
                    <h2 className={styles["row-container"]}>
                        Today's top recipes
                    </h2>
                    <article className={styles["recipe-card-subcontainer"]}>
                        {recipes.slice(0, 9).map((recipe, index) => {
                            return (
                                <RecipeCardWithImage
                                    key={index}
                                    recipeTitle={recipe.recipe.label}
                                    recipeId={() =>
                                        history.push(`/recipe/${id}`)
                                    }
                                    imageSource={require(`../../assets/${veggieImages[index].image}.png`)}
                                    recipeDishType={recipe.recipe.dishType}
                                    recipeCuisineType={
                                        recipe.recipe.cuisineType
                                    }
                                />
                            );
                        })}
                        {loading && (
                            <Loader
                                emoji="🥬"
                                funnyText="Preparing ingredients"
                            />
                        )}
                        {error && (
                            <Error>
                                <p>
                                    Thank you for using this website to find
                                    recipes. Due to a technical issue on our
                                    end, we cannot show you recipes at this
                                    moment. Please wait a few seconds to 1
                                    minute and try connecting again. If the
                                    issue keeps happening, you could try{" "}
                                    <a
                                        href="https://www.ah.nl/allerhande/recept/R-R694720/linzensoep-met-bleekselderij"
                                        target="_blank"
                                    >
                                        our favorite recipe
                                    </a>{" "}
                                    today and try this website again tomorrow.
                                </p>
                            </Error>
                        )}
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
