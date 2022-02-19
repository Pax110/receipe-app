import React from "react";
import Receipe from "./Receipe";

export default function ReceipeList({ receipes }) {
  return (
    <div>
      {receipes.map((receipe) => {
        return <Receipe key={receipe.id} {...receipe} />;
      })}
    </div>
  );
}
