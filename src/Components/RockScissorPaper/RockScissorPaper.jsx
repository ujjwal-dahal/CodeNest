import React, { useState } from "react";
import "./RockScissorPaper.scss";
import rock from "./Images/rock.png";
import scissor from "./Images/scissor.png";
import paper from "./Images/paper.png";

const choices = ["rock", "scissor", "paper"];
const choiceImages = { rock, scissor, paper };

export default function RockScissorPaper() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (userSelection) => {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userSelection);
    setComputerChoice(computerSelection);
    determineWinner(userSelection, computerSelection);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a Tie!");
    } else if (
      (user === "rock" && computer === "scissor") ||
      (user === "scissor" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      setResult("You Win!");
    } else {
      setResult("Computer Wins!");
    }
  };

  return (
    <div className="game-container">
      <h1>Rock Scissor Paper</h1>
      <div className="choices">
        <button onClick={() => playGame("rock")}>
          <img src={rock} alt="Rock" />
        </button>
        <button onClick={() => playGame("scissor")}>
          <img src={scissor} alt="Scissor" />
        </button>
        <button onClick={() => playGame("paper")}>
          <img src={paper} alt="Paper" />
        </button>
      </div>
      <div className="result">
        <h2>Your Choice: <img src={choiceImages[userChoice]} alt={userChoice} /></h2>
        <h2>Computer's Choice: <img src={choiceImages[computerChoice]} alt={computerChoice} /></h2>
        <h3>{result}</h3>
      </div>
    </div>
  );
}
