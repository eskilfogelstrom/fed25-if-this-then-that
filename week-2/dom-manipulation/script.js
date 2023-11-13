let containerEl = document.querySelector("#container");
containerEl.addEventListener("click", function () {
  alert("Clicked container");
});

let buttonEl = document.querySelector("#button");
buttonEl.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Clicked button");
});
