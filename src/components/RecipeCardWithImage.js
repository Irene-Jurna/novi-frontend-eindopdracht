import React from "react";
import styles from "./RecipeCardWithImage.module.css";

function RecipeCardWithImage({
    recipeTitle,
    recipeId,
    imageSource,
    imageAlt,
    imageKey,
    recipeDishType,
    recipeCuisineType,
}) {
    return (
        <section className={styles["recipe-card"]} key={recipeTitle}>
            <ul className="recipe-url" onClick={recipeId}>
                <figure>
                    <img
                        className={styles["recipe-card__fruit-img"]}
                        src={imageSource}
                        alt={imageAlt}
                        key={imageKey}
                    />
                </figure>
                <figcaption className={styles["recipe-card__text"]}>
                    <h3>{recipeTitle}</h3>
                    <p className="recipe-card__text-specifications">
                        {recipeDishType} - {recipeCuisineType}
                    </p>
                </figcaption>
            </ul>
        </section>
    );
}

export default RecipeCardWithImage;
