import React from "react";
import "./RecipeCardOnlyText.css";

function RecipeCardOnlyText({
    recipeId,
    recipeTitle,
    recipeDishType,
    recipeCuisineType,
    totalTime,
}) {
    return (
        <article className="recipe-list" key={recipeTitle}>
            <ul className="recipe-ul" onClick={recipeId}>
                <li className="recipe-item">
                    {recipeTitle}
                    <p className="text-recipe-info">
                        {recipeDishType}
                        {recipeCuisineType}
                    </p>
                    <p className="text-minutes">Ready in {totalTime} minutes</p>
                </li>
            </ul>
        </article>
    );
}

export default RecipeCardOnlyText;
