import React from "react";
import styles from "./RecipeInfoCard.module.css";

function RecipeInfoCard({
    recipeDishType,
    recipeCuisineType,
    imageSource,
    imageAlt,
}) {
    return (
        <article>
            <figcaption className={styles["recipe-card"]}>
                {recipeDishType} | {recipeCuisineType}
            </figcaption>
            <figure>
                <img src={imageSource} alt={imageAlt} />
            </figure>
        </article>
    );
}

export default RecipeInfoCard;
