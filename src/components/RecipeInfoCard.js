import React from "react";

function RecipeInfoCard({
    recipeDishType,
    recipeCuisineType,
    imageSource,
    imageAlt,
}) {
    return (
        <>
            <p>
                {recipeDishType} | {recipeCuisineType}
            </p>
            <img src={imageSource} alt={imageAlt} />
        </>
    );
}

export default RecipeInfoCard;
