import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  //   Creates a new array with 10 values and assings an object to them
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  // Dice is an array of objects
  const [dice, setDice] = useState(() => generateAllNewDice());

  // Game is won if all dice are held and have the same value
  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value,
  );

  function newGame() {
    setDice(generateAllNewDice());
  }

  // Changes die value only when isHeld is false
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
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
      {gameWon && <Confetti />}
      <section className="tenzies-section">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </section>
      <div className="dice-container">{diceElements}</div>
      <button onClick={gameWon ? newGame : rollDice} className="roll-dice">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
