"use strict";

// Psuedo-code for form
// 1. When form submitted
// 2. Get input value
// 4. Create new list item element
// 5. Set list item content to new todo
// 6. Append list item into list

// 1. When form submitted
function handleSubmit(e) {
  e.preventDefault();

  // 2. Get input value
  let inputEl = document.querySelector("#todoFormInput");
  let todo = inputEl.value;

  // 4. Create new list item element
  let listItemEl = document.createElement("li");
  // 5. Set list item content to new todo
  listItemEl.textContent = todo;

  // 6. Append list item into list
  let todoListEl = document.querySelector("#todoList");
  todoListEl.append(listItemEl);

  inputEl.value = "";
}

// 1. When form submitted
let formEl = document.querySelector("#todoForm");
formEl.addEventListener("submit", handleSubmit);
