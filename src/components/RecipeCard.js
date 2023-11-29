import React from 'react'

export const RecipeCard = ({ recipe }) => {


    return (
        <div>
            <h5>{recipe.food.label}</h5>
            <img src={recipe.food.image} />
            <p> {recipe.food.foodContentsLabel}</p>
        </div>
    )
}
