"use strict";

let count = 0;

function increment() {
  count += 1;
  let countEl = document.querySelector("#count");
  countEl.textContent = count;
}

let incBtnEl = document.querySelector("#incBtn");
incBtnEl.addEventListener("click", increment);
