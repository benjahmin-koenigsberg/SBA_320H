import axios from "axios";
// import { RecipeCard } from "./RecipeCard";
import { useState, useEffect } from 'react'
//import dotenv from 'dotenv'


const query = 'beans';

const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
    params: {
        ingr: `Vegan  ${query}`,
        q: 'vegan',
        'category[0]': 'Vegan',
        'health[0]': 'Vegan',
        'excluded[0]': 'Fish',
        'excluded[1]': 'Dairy',
        'excluded[2]': 'Eggs',
        'excluded[3]': 'feta',
        'excluded[4]': 'Chicken',
        'excluded[5]': 'Meat',
        'excluded[6]': 'Pescatarian',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
};




const Dashboard = () => {


    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await axios.request(options);
              //  console.log(response.data.hints);
                const recipeArray = response.data.hints
                setRecipes(recipeArray)

            } catch (error) {
                console.error(error);
            }
        }

      //  getRecipes()

    }, [])

    return (
        <div className="text-center">
            { recipes.map( (recipe, index) =>
            <RecipeCard key={index} recipe={recipe} />
        )}</div>
    )
}

export default Dashboard
