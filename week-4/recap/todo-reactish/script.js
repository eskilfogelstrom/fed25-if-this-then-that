"use strict";

let todos = JSON.parse(localStorage.getItem("todos"));

if (todos === null) {
  todos = [];
}

renderTodos();

function renderTodos() {
  let todoListEl = document.querySelector("#todoList");
  todoListEl.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let listItemEl = document.createElement("li");
    listItemEl.textContent = todo;

    todoListEl.append(listItemEl);
  }
}

function handleSubmit(e) {
  e.preventDefault();

  let inputEl = document.querySelector("#todoFormInput");
  let todo = inputEl.value;

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos();

  inputEl.value = "";
}

// 1. When form submitted
let formEl = document.querySelector("#todoForm");
formEl.addEventListener("submit", handleSubmit);
