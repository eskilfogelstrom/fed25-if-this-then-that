let menuButtonEl = document.querySelector("#menuToggle");
menuButtonEl.addEventListener("click", function () {
  let menuEl = document.querySelector("#menu");
  menuEl.classList.toggle("navbar__menu--show");
});
