import React from "react";

export default function Receipe(props) {
   
    const {
        id,
        name,
        servings,
        cookTime,
        instructions
    } = props

    console.log("name is", name)
    console.log("serving is", servings)
    console.log("cookTime is", cookTime)
    console.log("instructions is", instructions)
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

    </div>
  );
}
