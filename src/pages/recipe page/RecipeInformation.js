import "./RecipeInformation.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import HealthInfoCard from "../../components/HealthInfoCard";
import RecipeInfoCard from "../../components/RecipeInfoCard";

function RecipeInformation() {
    const { id } = useParams();
    const [recipeInformations, setRecipeInformations] = useState("");
    const controller = new AbortController();

    console.log(id);
    useEffect(() => {
        // Nieuw
        const loop = setInterval(() => {
            console.log("loading...");
        }, 1000);
        async function fetchRecipeData() {
            try {
                const result = await axios.get(
                    `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}`,
                    {
                        signal: controller.signal,
                    }
                );
                console.log(result.data.recipe);
                setRecipeInformations(result.data.recipe);
            } catch (e) {
                console.error(e);
            }
        }
        fetchRecipeData();
        // nieuw
        return function cleanup() {
            console.log("Het interval wordt gestopt!");
            clearInterval(loop);
        };
    }, [controller.signal, id]);

    return (
        <main>
            <header className="row-container-top yellow-background">
                <section className="info-border">
                    <h1 className="recipe-title">{recipeInformations.label}</h1>
                    <RecipeInfoCard
                        recipeDishType={recipeInformations.dishType}
                        recipeCuisineType={recipeInformations.cuisineType}
                        imageSource={recipeInformations.image}
                        imageAlt={recipeInformations.label}
                    />
                    <p>Ingredients:</p>
                    {recipeInformations &&
                        recipeInformations.ingredientLines.map(
                            (recipeInformation) => {
                                return (
                                    <ul>
                                        <li key={recipeInformation}>
                                            {recipeInformation}
                                        </li>
                                    </ul>
                                );
                            }
                        )}
                    <Button
                        type="text"
                        buttonText="See full recipe"
                        onClick={() => {
                            window.open(`${recipeInformations.url}`, "_blank");
                        }}
                    />
                </section>
            </header>

            <h2 className="recipe-section-title">This recipe is: </h2>

            <article className="row-container health-container">
                {recipeInformations &&
                    recipeInformations.healthLabels.map((healthInformation) => {
                        return (
                            <HealthInfoCard
                                healthInformation={healthInformation}
                            />
                        );
                    })}
            </article>
        </main>
    );
}

export default RecipeInformation;
