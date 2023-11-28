let counterValue = 0;

let counterEl = document.querySelector("#counter");
let incrementEl = document.querySelector("#increment");
let decrementEl = document.querySelector("#decrement");
let resetEl = document.querySelector("#reset");

function renderCount(count) {
  counterEl.innerHTML = count;
}

function handleReset() {
  counterValue = 0;
  renderCount(counterValue);
}

resetEl.addEventListener("click", handleReset);

function handleIncrement() {
  if (counterValue < 10) {
    counterValue += 1;
    renderCount(counterValue);
  }
}

incrementEl.addEventListener("click", handleIncrement);

function handleDecrement() {
  if (counterValue > 0) {
    counterValue -= 1;
    renderCount(counterValue);
  }
}

decrementEl.addEventListener("click", handleDecrement);

renderCount(counterValue);
