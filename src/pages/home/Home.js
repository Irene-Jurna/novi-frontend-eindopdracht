import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import RecipeCardWithImage from "../../components/RecipeCardWithImage";
import Footer from "../../components/Footer";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [id, setId] = useState("");
    const [loading, toggleLoading] = useState(false);
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
            try {
                const result = await axios.get(
                    `https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}&health=vegan&random=true`
                );
                console.log(result.data.hits);
                setRecipes(result.data.hits);
                const findId = result.data.hits[0].recipe.uri.lastIndexOf("_");
                const findCompleteId = result.data.hits[0].recipe.uri.slice(
                    findId + 1
                );
                setId(findCompleteId);
                console.log(result.data.hits[0].recipe.uri);
            } catch (e) {
                console.error(e);
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
                                    recipeTitle={recipe.recipe.label}
                                    recipeId={() =>
                                        history.push(`/recipe/${id}`)
                                    }
                                    imageSource={require(`../../assets/${veggieImages[index].image}.png`)}
                                    imageKey={veggieImages[index].title}
                                    recipeDishType={recipe.recipe.dishType}
                                    recipeCuisineType={
                                        recipe.recipe.cuisineType
                                    }
                                />
                            );
                        })}
                        {loading && <p>Preparing ingredients(...loading)</p>}
                    </article>
                </section>
            </main>
            {recipes && <Footer />}
        </>
    );
}

export default Home;
