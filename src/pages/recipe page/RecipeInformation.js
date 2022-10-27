import './RecipeInformation.css';
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function RecipeInformation() {
    const {id} = useParams();
    const edamameId = '4e1e2f8f';
    const edamameKey = '324092c9d55a77b05f596a354fa9d42f';
    const [recipeInformations, setRecipeInformations] = useState('');

    useEffect(() => {
        async function fetchRecipeData() {
            try {
                const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${id}&app_id=${edamameId}&app_key=${edamameKey}&health=vegan&random=true`);
                console.log(result.data.hits[0].recipe);
                setRecipeInformations(result.data.hits[0].recipe);
            } catch (e) {
                console.error(e);
            }
        }

        fetchRecipeData();
    }, []);

    return (
        <div>
            <h1>{recipeInformations.label}</h1>
            <p>Ingredients:</p>
            <p>{recipeInformations.ingredientLines}</p>
        </div>
    );
}

export default RecipeInformation;