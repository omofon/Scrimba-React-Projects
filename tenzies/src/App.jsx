import { useEffect, useState, useRef } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  // state and ref for timers
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);
  const seconds = (elapsedTime / 1000).toFixed(2);

  // start timer immedaitely fn is ran
  function startTimer() {
    startTimeRef.current = performance.now();

    intervalRef.current = setInterval(() => {
      setElapsedTime(performance.now() - startTimeRef.current);
    }, 50);
  }

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

  const buttonRef = useRef(null);

  // Game is won if all dice are held and have the same value
  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value,
  );

  // focuses the "new game" button when gameWon is true
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  // if game is won stop the timer
  useEffect(() => {
    if (gameWon) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [gameWon]);

  // starts the timer on first render
  useEffect(() => {
    startTimer();

    return () => clearInterval(intervalRef.current);
  }, []);

  function newGame() {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setDice(generateAllNewDice());
    startTimer();
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
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <section className="tenzies-section">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </section>
      <div className="timer">
        <p>Time: {seconds}s</p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button
        ref={buttonRef}
        onClick={gameWon ? newGame : rollDice}
        className="roll-dice"
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
