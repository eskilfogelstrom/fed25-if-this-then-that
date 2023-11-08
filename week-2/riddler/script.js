let guesses = 0;

let formEl = document.querySelector("#guessForm");
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let guessEl = document.querySelector("#guess");

  if (guessEl.value === "supersecretpassword") {
    alert("Correct!");
  } else {
    alert("Incorrect!");
    guesses += 1;
  }

  if (guesses >= 5) {
    alert("You lost");
  }

  guessEl.value = "";
});
