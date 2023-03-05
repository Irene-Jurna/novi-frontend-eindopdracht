import styles from "./RecipeInformation.module.css";
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

    useEffect(() => {
        async function fetchRecipeData() {
            try {
                const result = await axios.get(
                    `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_MY_API_KEY}`,
                    {
                        signal: controller.signal,
                    }
                );
                setRecipeInformations(result.data.recipe);
            } catch (e) {
                console.error(e);
            }
        }

        fetchRecipeData();
        return function cleanup() {
            controller.abort();
        };
    }, [id]);

    return (
        <main>
            <header
                className={`${styles.header} ${styles["header--color-yellow"]}`}
            >
                <section className={styles["header--border"]}>
                    <h1 className={styles.header__title}>
                        {recipeInformations.label}
                    </h1>
                    <RecipeInfoCard
                        recipeDishType={recipeInformations.dishType}
                        recipeCuisineType={recipeInformations.cuisineType}
                        imageSource={recipeInformations.image}
                        imageAlt={recipeInformations.label}
                    />
                    <p>Ingredients:</p>
                    {recipeInformations &&
                        recipeInformations.ingredientLines.map(
                            (recipeInformation, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{recipeInformation}</li>
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

            <h2 className={styles["health-info__title"]}>This recipe is: </h2>

            <article className={styles["health-info"]}>
                {recipeInformations &&
                    recipeInformations.healthLabels.map(
                        (healthInformation, index) => {
                            return (
                                <HealthInfoCard
                                    key={index}
                                    healthInformation={healthInformation}
                                />
                            );
                        }
                    )}
            </article>
        </main>
    );
}

export default RecipeInformation;
