import React from "react";
import './RecipeQuestions.css'

function RecipeQuestions() {
    return(
            <section className="full-screen green-background">
                <h2>Find all the ingredients for your perfect recipe</h2>
            <form className="form-question-list">
                <span className="form-text">The recipe I'd like to make is for </span>
                <select className="form-dropdown-option" id="questionType">
                    <option value="none"></option>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="dinner">dinner</option>
                    <option value="teatime">tea or snack time</option>
                    <option value="cocktailparty">a cocktail party!</option>
                </select>
                <span className="form-text"> . My cooking session preferably takes </span>
                <select className="form-dropdown-option" id="questionTime">
                    <option value="none"></option>
                    <option value="longTime">lots of time, I love long cooking sessions!</option>
                    <option value="averageTime">30 minutes to one hour</option>
                    <option value="shortTime">as little time as possible</option>
                </select>
                    <span className="form-text"> . And I'd love to cook</span>
                    <select className="form-dropdown-menu" id="questionCuisine">
                    <option value="none"></option>
                    <option value="american">American</option>
                    <option value="asian">Asian</option>
                    <option value="southAmerican">South American</option>
                    <option value="european">European</option>
                    <option value="anyCuisine">any type of</option>
                    </select>
                <span className="form-text"> cuisine. Diets? </span>
                <select className="form-dropdown-menu" id="questionDiets">
                    <option value="none"></option>
                    <option value="wheatFree">wheat-free</option>
                    <option value="nutFree">nut-free</option>
                    <option value="fodmap">FODMAP</option>
                    <option value="noDiets">No diets, show me everything!</option>
                </select>
                <button className="form=button">Open the cookbook</button>
            </form>
            </section>
    );
}

export default RecipeQuestions;