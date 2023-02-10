import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import RecipeCardWithImage from "../../components/RecipeCardWithImage";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

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
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchRecipes();
    }, []);

    return (
        <>
            <main>
                <header className="background-image row-container-top yellow-background">
                    <section>
                        <h1>VanVeg</h1>
                        <p className="intro-text">
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

                <section className="recipe-card-container">
                    <h2 className="row-container">Today's top recipes</h2>
                    <article className="recipe-card-subcontainer">
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
                            <Error
                                text="Thank you for using this website to find recipes. Due to a
                technical issue on our end, we cannot show you recipes at this
                moment. Please wait a few seconds to 1 minute and try connecting
                again. If the issue keeps happening, you could try our favorite recipe today and try this website again tomorrow."
                            />
                        )}
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
