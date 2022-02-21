import React from 'react'
import Ingredient from './Ingredient'


export default function IngredientList({ingredients}) {

console.log("ingre in List", ingredients)

    const ingredientElement = ingredients.map((ingredient)=>{
        return <Ingredient key={ingredient.id} {...ingredient}/> 
    })
  return (
    <div>{ingredientElement}</div>
  )
}
