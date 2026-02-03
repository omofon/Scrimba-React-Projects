import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((num, id) => <Die key={id} value={num} />);
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-dice">
        Roll
      </button>
    </main>
  );
}

export default App;
