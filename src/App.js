import "./App.css";
import ReceipeList from "./ReceipeList";

function App() {
  return <div className="App">
    <ReceipeList receipes={sampleReceipes}/>
     </div>;
}


const sampleReceipes = [
  {
    id: 1,
    name: "Daal",
    servings: 3,
    cookTime: "1:45",
    instructions: 
      "1. Put salt and pepper. 2. Stir fry. 3.Leave it in the oven."
  },
  {
    id: 2,
    name: "Bauvo",
    servings: 5,
    cookTime: "0:15",
    instructions: 
      "1. Put jaggery and ghee. 2. Crush it hard. 3.Eat it warm with hands."
  }
]

export default App;
