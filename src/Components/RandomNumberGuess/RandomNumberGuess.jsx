import React, { useState } from "react";
import "./RandomNumberGuess.scss";
import { toast } from "react-toastify";

export default function RandomNumberGuess() {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showResult , setShowResult] = useState(false);

  const handleGuess = () => {
    if(guess){
      if(guess > 100){
        toast.error("Guess Number is Out of range i.e 100")
      }
      else {

     
    const userGuess = parseInt(guess);
    setShowResult(true)
    setCount(count + 1);

    if (userGuess === randomNumber) {
      setMessage(`🎉 Correct! You guessed it in ${count + 1} tries.`);
      
      setGameOver(true);
    } else if (userGuess > randomNumber) {
      setMessage("Too high! Try a lower number.");
      
    } else {
      setMessage("Too low! Try a higher number.");
      
    }
  }
    }
    else{
      toast.error("Enter your guess number")
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="guess-game-container">
      <div className="guess-game">
        <h1>Number Guess Game</h1>
        {gameOver ? (
          <button className="reset-btn" onClick={handleReset}>Play Again</button>
        ) : (
          <>
            <p>Guess a number between 1 and 100:</p>
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter your guess"
              disabled={gameOver}
            />
            <button onClick={handleGuess} disabled={gameOver}>Guess</button>
          </>
        )}
       {
        showResult &&  <p className="message">{message}</p>
       }
      </div>
      <div className="tries-count">
        <p>Tries: {count}</p>
      </div>
    </div>
  );
}
