import "./App.css";
import ReceipeList from "./ReceipeList";

function App() {
  return (
    <div className="App">
      <ReceipeList receipes={sampleReceipes} />
    </div>
  );
}

const sampleReceipes = [
  {
    id: 1,
    name: "Daal",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt and pepper. 2. Stir fry. 3.Leave it in the oven.",
    ingredients: [
      {
        id: 1,
        name: "lentil",
        amount: "2 scoops",
      },
      {
        id: 2,
        name: "spices",
        amount: "1 tea spoon",
      }
    ],
  },
  {
    id: 2,
    name: "Bauvo",
    servings: 5,
    cookTime: "0:15",
    instructions:
      "1. Put jaggery and ghee. 2. Crush it hard. 3.Eat it warm with hands.",
    ingredients: [
      {
        id: 1,
        name: "roti",
        amount: "2",
      },
      {
        id: 2,
        name: "jaggery",
        amount: "200 grams",
      },
    ],
  },
];

export default App;
