import './Home.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../components/Button";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const edamameId = '4e1e2f8f';
    const edamameKey = '324092c9d55a77b05f596a354fa9d42f';

    const veggieImages = [
        {
            title: 'Broccoli',
            image: 'broccoli',
        },
        {
            title: 'Apples',
            image: 'apples',
        },
        {
            title: 'Chicory',
            image: 'chicory',
        },
        {
            title: 'Asparagus',
            image: 'asparagus',
        },
        {
            title: 'Red Cabbage',
            image: 'redcabbage',
        },
        {
            title: 'Parsnip',
            image: 'parsnip',
        },
        {
            title: 'Radish',
            image: 'radish',
        },

        {
            title: 'Leek',
            image: 'leek',
        },
        {
            title: 'Pear',
            image: 'pear',
        },
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
            <section className=" home-container row-container-top yellow-background">
                <div className="home">
                    <h1>VanVeg</h1>
                    <p className="intro-text">VanVeg is the vegan Hot spot online. Our mouth-watering, traditional
                        curries from all over the
                        world,
                        healthy snacks and heavenly sweets will have you.</p>
                    <Button
                        type="text"
                        buttonText="Find recipes"
                    />
                </div>
            </section>
            {/*<section>*/}
            {/*    <h2 className="h2-colored">Top recipe's today</h2>*/}
            {/*</section>*/}
            <section>
                <h2 className="row-container">Today's top recipes</h2>
            </section>
            <section className="recipe-card-container row-container">
                {recipes.slice(0, 9).map((recipe, index) => {
                    return (
                        <article className="recipe-card-item" key={recipe.recipe.label}>
                            <div className="recipe-card-image">
                            <img className="fruit-img" src={require(`../../assets/${veggieImages[index].image}.png`)}
                                 alt={veggieImages[index].title} key={veggieImages[index].title}/>
                            </div>
                            <div className="recipe-card-text">
                            <h3>{recipe.recipe.label}</h3>
                            <p className="text-specifications">{recipe.recipe.dishType} - {recipe.recipe.cuisineType}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    );
}

export default Home;