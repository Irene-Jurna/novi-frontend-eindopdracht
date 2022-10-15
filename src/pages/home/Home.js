import './Home.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const result = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=4e1e2f8f&app_key=324092c9d55a77b05f596a354fa9d42f&health=vegan&random=true');
                console.log(result.data.hits);
                console.log(result.data.hits[0].recipe);
                setRecipes(result.data.hits);
            } catch (e) {
                console.error(e);
            }
        }

        fetchRecipes();
    }, []);

    return (
        <>
            <h2>Huiskok</h2>
            <p>Let's cook</p>
            <section className="recipe-card-container">
                {recipes.slice(0, 9).map((recipe) => {
                    return (
                        <article className="recipe-card-item" key={recipe.recipe.label}>
                            <h3>{recipe.recipe.label}</h3>
                            <p>{recipe.recipe.dishType} - {recipe.recipe.cuisineType}</p>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                        </article>
                    )
                })}
            </section>
        </>
    );
}

export default Home;