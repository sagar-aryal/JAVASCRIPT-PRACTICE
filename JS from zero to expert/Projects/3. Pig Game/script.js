"use strict";

const rollDice = document.querySelector(".roll-dice");
let currentRoll = 0;

// creating a function for rolling the dice
rollDice.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  document.querySelector(`current`);
});
