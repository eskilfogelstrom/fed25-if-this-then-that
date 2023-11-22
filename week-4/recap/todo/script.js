"use strict";

// Psuedo-code for rendering initial list
// 1. Get all todos from localstorage
// 2. For every todo
// 3. Create new list item element
// 4. Set list item content to todo
// 5. Append list item into list

// 1. Get all todos from localstorage
let todos = JSON.parse(localStorage.getItem("todos"));

// if first time visiting the page
if (todos === null) {
  todos = [];
}

// 2. For every todo
for (let i = 0; i < todos.length; i++) {
  let todo = todos[i];

  // 3. Create new list item element
  let listItemEl = document.createElement("li");
  // 4. Set list item content to todo
  listItemEl.textContent = todo;

  // 5. Append list item into list
  let todoListEl = document.querySelector("#todoList");
  todoListEl.append(listItemEl);
}

// Psuedo-code for form
// 1. When form submitted
// 2. Get input value
// 3. Add it to todo array and store it in localstorage
// 4. Create new list item element
// 5. Set list item content to new todo
// 6. Append list item into list

// 1. When form submitted
function handleSubmit(e) {
  e.preventDefault();

  // 2. Get input value
  let inputEl = document.querySelector("#todoFormInput");
  let todo = inputEl.value;

  // 3. Add it to todo array and store it in localstorage
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

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
