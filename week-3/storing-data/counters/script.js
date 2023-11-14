let counters = JSON.parse(localStorage.getItem("counters")) || [];

function createCounterEl(counterIndex) {
  let counterEl = document.createElement("div");

  let counterValueEl = document.createElement("span");
  counterValueEl.textContent = counters[counterIndex];

  let increaseBtnEl = document.createElement("button");
  increaseBtnEl.textContent = "Add";

  increaseBtnEl.addEventListener("click", function () {
    counters[counterIndex] += 1;
    localStorage.setItem("counters", JSON.stringify(counters));
    counterValueEl.textContent = counters[counterIndex];
  });

  counterEl.append(counterValueEl);
  counterEl.append(increaseBtnEl);

  let counterListEl = document.querySelector("#counters");
  counterListEl.append(counterEl);
}

for (let i = 0; i < counters.length; i++) {
  createCounterEl(i);
}

let addCounterBtnEl = document.querySelector("#addCounterBtn");
addCounterBtnEl.addEventListener("click", function () {
  counters.push(0);
  localStorage.setItem("counters", JSON.stringify(counters));
  let counterIndex = counters.length - 1;

  createCounterEl(counterIndex);
});
