// ----------------
// State variables
// ----------------
let guesses = 0;
let number = Math.floor(Math.random() * 100) + 1;

// ----------------
// Element variables
// ----------------
let formEl = document.querySelector("#guessForm");
let messageEl = document.querySelector("#message");
let guessInputEl = document.querySelector("#guess");

// ----------------
// Logic
// ----------------
function handleGuess(e) {
  // Prevent form submission from reloading page
  e.preventDefault();

  // Read input value and convert to number
  let guess = Number(guessInputEl.value);

  if (guess === number) {
    renderWon();
  } else if (guess < number) {
    renderMessage("Higher");
  } else if (guess > number) {
    renderMessage("Lower");
  }

  // Add 1 to guesses
  guesses += 1;

  // Check if guess >= 5 which means you lost
  if (guesses > 5) {
    renderLost();
  }

  // Reset input value
  guessInputEl.value = "";
}

function handlePlayAgain() {
  // Generate a new random number
  number = Math.floor(Math.random() * 100) + 1;

  // Reset guesses
  guesses = 0;

  // Reset HTML elements
  messageEl.innerHTML = "";
  messageEl.hidden = true;
  formEl.hidden = false;
}

// ----------------
// Render functions
// ----------------
function renderMessage(message) {
  messageEl.hidden = false;
  messageEl.innerHTML = message;
}

function renderWon() {
  messageEl.innerHTML = "You won!";
  formEl.hidden = true;

  renderPlayAgain();
}

function renderLost() {
  messageEl.innerHTML = "You lost...";
  formEl.hidden = true;

  renderPlayAgain();
}

function renderPlayAgain() {
  // Create a new button
  let buttonEl = document.createElement("button");
  buttonEl.innerHTML = "Play again";
  buttonEl.className = "button";

  // Add event listener for click
  buttonEl.addEventListener("click", handlePlayAgain);

  // Add button
  messageEl.append(buttonEl);
}

// ----------------
// Event listeners
// ----------------
formEl.addEventListener("submit", handleGuess);
