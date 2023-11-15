"use strict";

let count = JSON.parse(localStorage.getItem("count")) || 0;

updateCounterValueEl();

function setCount(value) {
  count = value;
  localStorage.setItem("count", JSON.stringify(count));

  updateCounterValueEl();
}

function updateCounterValueEl() {
  let counterValueEl = document.querySelector("#counterValue");
  counterValueEl.textContent = count;
}

let addBtnEl = document.querySelector("#addBtn");
addBtnEl.addEventListener("click", function () {
  setCount(count + 1);
});

let decreaseBtnEl = document.querySelector("#decreaseBtn");
decreaseBtnEl.addEventListener("click", function () {
  setCount(count - 1);
});
