import React from "react";
import IngredientList from "./IngredientList";

export default function Receipe(props) {

   
    const {
      
        name,
        servings,
        cookTime,
        instructions,
        ingredients
    } = props

   
   
  return (
    <div>
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div>
          <span> Cook Time : </span>
          <span>{cookTime} </span>
      </div>
      <div>
          <span> Servings : </span>
          <span> {servings} </span>
      </div>
      <div>
          <span> Instructions : </span>
          <span> {instructions} </span>
      </div>
      <div>
          <span> Ingredients : </span>
          <span> <IngredientList ingredients={ingredients}/> </span>
      </div>

    </div>
  );
}
