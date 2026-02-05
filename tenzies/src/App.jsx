import { useEffect, useState, useRef } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  // =======================
  // TIMER STATE
  // =======================
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [bestTime, setBestTime] = useState(() => {
    const saved = localStorage.getItem("bestTime");
    return saved ? Number(saved) : null;
  });

  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  const seconds = (elapsedTime / 1000).toFixed(2);
  const bestSeconds = bestTime ? (bestTime / 1000).toFixed(2) : null;

  // =======================
  // TIMER FUNCTIONS
  // =======================
  function startTimer() {
    if (intervalRef.current) return;

    startTimeRef.current = performance.now();

    intervalRef.current = setInterval(() => {
      setElapsedTime(performance.now() - startTimeRef.current);
    }, 50);
  }

  function ensureGameStarted() {
    setGameStarted((prev) => {
      if (!prev) {
        startTimer();
        return true;
      }
      return prev;
    });
  }

  // =======================
  // GAME LOGIC
  // =======================
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value,
  );

  // =======================
  // EFFECTS
  // =======================
  useEffect(() => {
    if (gameWon) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      setBestTime((prev) => {
        if (prev === null || elapsedTime < prev) {
          localStorage.setItem("bestTime", elapsedTime);
          return elapsedTime;
        }
        return prev;
      });

      buttonRef.current.focus();
    }
  }, [gameWon, elapsedTime]);

  // =======================
  // ACTIONS
  // =======================
  function rollDice() {
    ensureGameStarted();
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
  }

  function hold(id) {
    ensureGameStarted();
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  function newGame() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    setElapsedTime(0);
    setGameStarted(false);
    setDice(generateAllNewDice());
  }

  // =======================
  // RENDER
  // =======================
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => hold(die.id)}
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

      <div className="timer">
        <p>Time: {seconds}s</p>
        {bestSeconds && <p>Fastest Lap: {bestSeconds}s</p>}
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
