"use strict";

let counter = 0;

function add() {
  counter += 1;
  renderCounter();
}

function decrease() {
  counter -= 1;
  renderCounter();
}

function renderCounter() {
  let numberEl = document.querySelector("#number");
  numberEl.innerText = counter;
}

let addEl = document.querySelector("#addButton");
addEl.addEventListener("click", add);

let decreaseEl = document.querySelector("#decreaseButton");
decreaseEl.addEventListener("click", decrease);
