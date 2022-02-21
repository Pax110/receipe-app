import React from 'react'

export default function Ingredient(props) {
  const {
    name,
    amount
  } = props

  return (<>
    <div>Names:</div>
    <div>{name}</div>
    <div>Amount: </div>
    <div>{amount}</div>
    </>)
}
