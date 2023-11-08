// Get random number
// Get answer number based on random number
// Display answer
function generateAnswer() {
  let answers = ["Yes", "No", "Seems unlikely", "Ask again", "Stop asking"];

  let number = Math.floor(Math.random() * answers.length);

  let answer = answers[number];

  let ballEl = document.querySelector("#ball");
  ballEl.classList.add("ball--animated");

  ballEl.addEventListener(
    "animationend",
    function () {
      ballEl.classList.remove("ball--animated");

      let answerEl = document.querySelector("#answer");
      answerEl.innerHTML = answer;
    },
    { once: true }
  );
}

let ballEl = document.querySelector("#ball");
ballEl.addEventListener("click", generateAnswer);

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    generateAnswer();
  }
});
