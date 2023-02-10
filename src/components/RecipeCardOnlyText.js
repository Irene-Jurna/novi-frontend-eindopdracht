import React from "react";
import styles from "./RecipeCardOnlyText.module.css";

function RecipeCardOnlyText({
    recipeId,
    recipeTitle,
    recipeDishType,
    recipeCuisineType,
    totalTime,
}) {
    return (
        <article>
            <ul onClick={recipeId}>
                <li className={styles["recipe__item"]}>
                    {recipeTitle}
                    <p className={styles["recipe__text-info"]}>
                        {recipeDishType}
                        {recipeCuisineType}
                    </p>
                    <p className={styles["recipe__text-time"]}>
                        Ready in {totalTime} minutes
                    </p>
                </li>
            </ul>
        </article>
    );
}

export default RecipeCardOnlyText;
