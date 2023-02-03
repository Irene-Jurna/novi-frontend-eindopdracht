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
        <article className="recipe-card-item recipe-list" key={recipeTitle}>
            <ul className="recipe-url" onClick={recipeId}>
                <div className="recipe-card-image">
                    <img
                        className="fruit-img"
                        src={imageSource}
                        alt={imageAlt}
                        key={imageKey}
                    />
                </div>
                <div className="recipe-card-text">
                    <h3>{recipeTitle}</h3>
                    <p className="text-specifications">
                        {recipeDishType} - {recipeCuisineType}
                    </p>
                </div>
            </ul>
        </article>
    );
}

export default RecipeCardWithImage;
