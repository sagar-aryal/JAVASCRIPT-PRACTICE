"use strict";

// How DOM Works?

// document.querySelector(".message").textContent = "👏 Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 13;
// document.querySelector(".guess").value = 13;
// document.querySelector("body").style.backgroundColor = "green";

// How Events Works?
// We usually use annoynomous function when we use event handler function.

// document.querySelector(".again").addEventListener("click", () => {
//   console.log("Clicked!");
// });

let number = Math.round(Math.random() * 20);
// console.log(number);

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number.";
  }

  // when the number matches with guess number
  else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent =
      "👏 Correct Number! Congratulations.";
    document.querySelector("body").style.backgroundColor = "green";

    // Implementing highscore functionality
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }

  // when the guess value is greater than number
  else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "⬆️ Too high Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤯 You lose the game.";
      document.querySelector(".score").textContent = 0;
    }
  }

  // when the guess value is less than number
  else if (guess < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "⬇️ Too low Number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤯 You lose the game.";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Implementing again button and resetting values
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "🤔 Start guessing...";
  document.querySelector(".score").textContent = score;
  number = Math.round(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "white";
});
