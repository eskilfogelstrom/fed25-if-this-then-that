// // ----------------
// // State variables
// // ----------------
let guesses = 0;
let number = Math.floor(Math.random() * 100) + 1;

console.log(number);

function handleGuess(e) {
  e.preventDefault();

  // get user input
  let guessInputEl = document.querySelector("#guess");
  let guess = Number(guessInputEl.value);

  // compare user input to number
  if (guess === number) {
    renderMessage("You won!");
  } else {
    if (guess < number) {
      renderMessage("Higher");
    } else if (guess > number) {
      renderMessage("Lower");
    }

    // if no more guesses game over
    console.log("Guesses: ", guesses);

    if (guesses > 5) {
      renderMessage("You lost...");
    }
  }
}

function renderMessage(message) {
  let messageEl = document.querySelector("#message");
  messageEl.innerHTML = message;
}

let formEl = document.querySelector("#guessForm");
formEl.addEventListener("submit", handleGuess);

// // ----------------
// // State variables
// // ----------------
// let guesses = 0;
// let number = Math.floor(Math.random() * 100) + 1;

// // ----------------
// // Logic
// // ----------------
// function handleGuess(e) {
//   // Prevent form from reloading the page on submission
//   e.preventDefault();

//   // Get the input, get it's value and convert to a number
//   let guessEl = document.querySelector("#guess");
//   let guess = Number(guessEl.value);

//   if (guess === number) {
//     renderMessage("You won! Refresh to play again.");
//   } else if (guess < number) {
//     renderMessage("Higher");
//   } else if (guess > number) {
//     renderMessage("Lower");
//   }

//   guesses += 1;

//   if (guesses > 5) {
//     renderMessage("You lost! Refresh to play again.");
//   }

//   guessEl.value = "";
// }

// // ----------------
// // Render functions
// // ----------------
// function renderMessage(message) {
//   let messageEl = document.querySelector("#message");
//   messageEl.innerHTML = message;
// }

// // ----------------
// // Event listeners
// // ----------------
// let formEl = document.querySelector("#guessForm");
// formEl.addEventListener("submit", handleGuess);
