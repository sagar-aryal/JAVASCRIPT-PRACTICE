"use strict";
// Selecting elements
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const newGame = document.querySelector(".new-game");
const score1 = document.querySelector("#score-1");
const score2 = document.querySelector("#score-2");
const currentScore1 = document.querySelector("#current-score-1");
const currentScore2 = document.querySelector("#current-score-2");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold");

// Starting conditions
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden"); // Making dice image hidden before rolling a dice adding hidden class
let currentScore = 0;
let activePlayer = 1;
let totalScore = [0, 0, 0];
let playing = true;

// Creating functionality to switch players
const nextPlayer = () => {
  document.getElementById(`current-score-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};

// Creating a function for rolling the dice
rollDice.addEventListener("click", () => {
  if (playing) {
    // Generating a random dice roll
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    // console.log(diceNumber);

    // Display dice
    dice.classList.remove("hidden");
    dice.src = `./dice/dice-${diceNumber}.png`;

    // Check if diceNumber is 1 then shift to next player
    if (diceNumber !== 1) {
      // Add to the current score
      currentScore += diceNumber;
      document.getElementById(`current-score-${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      nextPlayer();
    }
  }
});

// Creating functionality for hold button
holdBtn.addEventListener("click", () => {
  if (playing) {
    // Adding currentscore to the totalscore
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).innerText =
      totalScore[activePlayer];

    // Maximum score is 100, then game finish
    if (totalScore[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");

      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      // On hold switch to next player
      nextPlayer();
    }
  }
});

// Creating functionality for new game
newGame.addEventListener("click", function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  player1.classList.add("player-active");
  player2.classList.remove("player-active");
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
});
