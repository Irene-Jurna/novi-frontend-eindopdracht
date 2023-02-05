import React from "react";
import "./RecipeInfoCard.css";

function RecipeInfoCard({
    recipeDishType,
    recipeCuisineType,
    imageSource,
    imageAlt,
}) {
    return (
        <article>
            <figcaption className="font-figcaption-recipe-info-card">
                {recipeDishType} | {recipeCuisineType}
            </figcaption>
            <figure>
                <img src={imageSource} alt={imageAlt} />
            </figure>
        </article>
    );
}

export default RecipeInfoCard;
