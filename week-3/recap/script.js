function generateAnswer() {
  let answers = ["Yes", "No", "Seems unlikely", "Ask again"];
  let number = Math.floor(Math.random() * answers.length);

  let answerEl = document.querySelector("#answer");
  answerEl.textContent = answers[number];
}

let btnEl = document.querySelector("#askBtn");
btnEl.addEventListener("click", generateAnswer);
