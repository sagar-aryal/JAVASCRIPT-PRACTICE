"use strict";

const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");

// implementing modal functionality
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

// implementing close button functionality
closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Closing modal window using esc key
document.addEventListener("keydown", (e) => {
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});
