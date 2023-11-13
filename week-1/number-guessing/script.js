let number = Math.floor(Math.random() * 100) + 1;

let guesses = 5;

console.log(number);

let guess = Number(
  prompt(`You have ${guesses} left. Guess a number between 1-100`)
);

let messageEl = document.querySelector("#message");

if (number === guess) {
  messageEl.innerHTML = "You won!";
  messageEl.classList.add(
    "message--correct",
    "animate__animated",
    "animate__shakeY"
  );
} else if (number < guess) {
  messageEl.innerHTML = "Lower";
  messageEl.classList.add(
    "message--incorrect",
    "animate__animated",
    "animate__shakeX"
  );
} else if (number > guess) {
  messageEl.innerHTML = "Higher";
  messageEl.classList.add(
    "message--incorrect",
    "animate__animated",
    "animate__shakeX"
  );
}

// 1. generate random number
// 2. get user input as number
// 3. if secret number is equal to guess
//      show you won
// else
//      show you lost
