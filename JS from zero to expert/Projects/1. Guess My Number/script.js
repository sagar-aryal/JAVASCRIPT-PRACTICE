"use strict";

// How DOM Works?

// document.querySelector(".message").textContent = "👏 Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 13;
// document.querySelector(".guess").value = 13;

// How Events Works?

const number = Math.round(Math.random() * 20);
// console.log(number);
document.querySelector(".number").textContent = number;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number.";
  }

  // when the number matches with guess number
  else if (guess === number) {
    document.querySelector(".message").textContent =
      "👏 Correct Number! Congratulations.";
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
