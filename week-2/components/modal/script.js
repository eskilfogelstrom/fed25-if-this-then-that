// -----------------
// Hardcoded one-off version
// -----------------

let modalToggleEl = document.querySelector("#modalToggle");
let modalEl = document.querySelector("#modal");
let modalInnerEl = modalEl.querySelector(".modal__inner");
let closeButtonEl = document.querySelector("#closeButton");

modalToggleEl.addEventListener("click", function () {
  modalEl.classList.add("modal--show");
});

closeButtonEl.addEventListener("click", function () {
  modalEl.classList.remove("modal--show");
});

modalEl.addEventListener("click", function () {
  modalEl.classList.remove("modal--show");
});

modalInnerEl.addEventListener("click", function (e) {
  e.stopPropagation();
});

// -----------------
// Generalized version
// -----------------
let modalButtonEls = document.querySelectorAll("[data-modal]");

for (let modalButtonEl of modalButtonEls) {
  let target = modalButtonEl.dataset.modal;
  let modalEl = document.querySelector("#" + target);

  modalButtonEl.addEventListener("click", function () {
    modalEl.classList.add("modal--show");
  });

  let closeButtonEl = modalEl.querySelector("[data-modal-close]");
  closeButtonEl.addEventListener("click", function () {
    modalEl.classList.remove("modal--show");
  });

  modalEl.addEventListener("click", function (e) {
    if (e.target === modalEl) {
      modalEl.classList.remove("modal--show");
    }
  });
}
