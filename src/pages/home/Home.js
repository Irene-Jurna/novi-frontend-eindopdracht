import './Home.css';
import {useEffect, useState} from "react";
import axios from "axios";
import broccoli from '../../assets/broccoli.png';
import Button from "../../components/Button";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const edamameId = '4e1e2f8f';
    const edamameKey = '324092c9d55a77b05f596a354fa9d42f';

    const veggieImages = [
        {
            number: 1,
            title: 'Broccoli',
            image: 'broccoli',
        },
        {
            number: 2,
            title: 'Parsnip',
            image: 'parship',
        }
    ]

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=${edamameId}&app_key=${edamameKey}&health=vegan&random=true`);
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
            <h1>VanVeg</h1>
            <img src={broccoli} alt="broccoli"/>
            <p>VanVeg is the vegan Hot spot online. Our mouth-watering, traditional curries from all over the world,
                healthy snacks and heavenly sweets will have you.</p>
            <Button
            type="text"
            buttonText="Find recipes"
            />
            <section className="colored-background-container">
                <h2 className="h2-colored">Top recipe's today</h2>
            </section>

            <section className="recipe-card-container">

                {recipes.slice(0, 9).map((recipe) => {
                    return (
                        <article className="recipe-card-item" key={recipe.recipe.label}>
                            <h3>{recipe.recipe.label}</h3>

                            {veggieImages.slice(0, 1).map((veggieImage) => {
                                return (
                                    <img src={veggieImage.image} alt={veggieImage.title} key={veggieImage.title}/>
                                )
                            })}

                            <p>{recipe.recipe.dishType} - {recipe.recipe.cuisineType}</p>
                        </article>
                    )
                })}
            </section>
        </>
    );
}

export default Home;