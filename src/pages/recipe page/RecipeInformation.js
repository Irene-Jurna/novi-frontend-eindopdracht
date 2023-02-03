import "./RecipeInformation.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import HealthInfoCard from "../../components/HealthInfoCard";

function RecipeInformation() {
    const { id } = useParams();
    const edamameId = "4e1e2f8f";
    const edamameKey = "324092c9d55a77b05f596a354fa9d42f";
    const [recipeInformations, setRecipeInformations] = useState("");

    console.log(id);
    useEffect(() => {
        async function fetchRecipeData() {
            try {
                const result = await axios.get(
                    `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${edamameId}&app_key=${edamameKey}`
                );
                console.log(result.data.recipe);
                setRecipeInformations(result.data.recipe);
            } catch (e) {
                console.error(e);
            }
        }

        fetchRecipeData();
    }, []);

    return (
        <>
            <section className="row-container-top yellow-background">
                <div className="info-border">
                    <h1 className="recipe-title">{recipeInformations.label}</h1>
                    <p>
                        {recipeInformations.dishType} |{" "}
                        {recipeInformations.cuisineType}
                    </p>
                    <img
                        src={recipeInformations.image}
                        alt={recipeInformations.label}
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
                </div>
            </section>
            <h2 className="recipe-section-title">This recipe is: </h2>
            <section className="row-container health-container">
                {recipeInformations &&
                    recipeInformations.healthLabels.map((healthInformation) => {
                        return (
                            <HealthInfoCard
                                healthInformation={healthInformation}
                            />
                        );
                    })}
            </section>
        </>
    );
}

export default RecipeInformation;
