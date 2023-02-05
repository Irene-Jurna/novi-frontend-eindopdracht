import React from "react";
import "./RecipeCardWithImage.css";

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
        <section className="recipe-card-item recipe-list" key={recipeTitle}>
            <ul className="recipe-url" onClick={recipeId}>
                <figure className="recipe-card-image">
                    <img
                        className="fruit-img"
                        src={imageSource}
                        alt={imageAlt}
                        key={imageKey}
                    />
                </figure>
                <figcaption className="recipe-card-text">
                    <h3>{recipeTitle}</h3>
                    <p className="text-specifications">
                        {recipeDishType} - {recipeCuisineType}
                    </p>
                </figcaption>
            </ul>
        </section>
    );
}

export default RecipeCardWithImage;
