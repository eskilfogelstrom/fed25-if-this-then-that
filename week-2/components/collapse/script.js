// -----------------
// Hardcoded one-off version
// -----------------
let buttonEl = document.querySelector("#collapseButton");

buttonEl.addEventListener("click", function () {
  let collapseEl = document.querySelector("#collapse");
  collapseEl.classList.toggle("collapse--show");
});

// -----------------
// Generalized version
// -----------------

let buttonEls = document.querySelectorAll("[data-collapse]");
for (let buttonEl of buttonEls) {
  buttonEl.addEventListener("click", function () {
    let target = buttonEl.dataset.collapse;
    let collapseEl = document.querySelector("#" + target);
    collapseEl.classList.toggle("collapse--show");
  });
}
