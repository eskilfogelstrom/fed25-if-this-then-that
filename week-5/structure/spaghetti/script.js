import { getQuestions } from "./api.js";

let questions = null;

let currentQuestionIndex = 0;

let questionEl = document.querySelector("#question");
let answer1El = document.querySelector("#answer1");
let answer2El = document.querySelector("#answer2");
let answer3El = document.querySelector("#answer3");
let answer4El = document.querySelector("#answer4");

function checkAnswer(answer, question) {
  if (answer === question.correct_answer) {
    alert("Correct");

    if (currentQuestionIndex === questions.length - 1) {
      // TODO: Add winning state
    } else {
      currentQuestionIndex += 1;
      renderQuestion(questions[currentQuestionIndex]);
    }
  } else {
    alert("Wrong");
  }
}

function renderQuestion(question) {
  questionEl.textContent = question.question;

  answer1El.textContent = question.incorrect_answers[0];
  answer2El.textContent = question.incorrect_answers[1];
  answer3El.textContent = question.incorrect_answers[2];
  answer4El.textContent = question.correct_answer;

  answer1El.onclick = function () {
    checkAnswer(question.incorrect_answers[0], question);
  };

  answer2El.onclick = function () {
    checkAnswer(question.incorrect_answers[1], question);
  };

  answer3El.onclick = function () {
    checkAnswer(question.incorrect_answers[2], question);
  };

  answer4El.onclick = function () {
    checkAnswer(question.correct_answer, question);
  };
}

async function init() {
  questions = await getQuestions();

  renderQuestion(questions[currentQuestionIndex]);
}

init();
