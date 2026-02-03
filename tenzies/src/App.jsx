import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
    // Dice is an array of objects
  const [dice, setDice] = useState(generateAllNewDice());

//   Creates a new array with 10 values and assings an object to them
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  // maps to object in array with same id value
  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      // hold carries a callback fn with id so child components don't have to
      hold={() => hold(dieObj.id)}
    />
  ));
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
