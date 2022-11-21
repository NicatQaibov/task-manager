"use strict";

const inputEl = document.querySelector("input[type = 'text'].new-todo-input");
const form = document.querySelector(".todo-form");
const list = document.querySelector(".todo-list");
const sortBtn = document.querySelector(".todo-sort-btn");
const todos = [];

/* <li class="todo-list-item">
              <p class="todo-list-item-name">name</p>
              <button class = "todo-remove-btn"><img src="images/Group 77.png" alt=""  /></button>
            </li> */

let index = 0;
const createToDoItem = function (userInput) {
  const li = document.createElement("li");
  li.classList.add("todo-list-item");
  li.setAttribute("data-id", index);
  index += 1;

  const p = document.createElement("p");
  p.classList.add("to-do-list-item-name");
  const pText = document.createTextNode(userInput);
  p.appendChild(pText);

  const img = document.createElement("img");
  img.setAttribute("src", "images/Group 77.png");

  const btn = document.createElement("button");
  btn.classList.add("todo-remove-btn");
  btn.setAttribute("type", "button");
  btn.appendChild(img);
  btn.onclick = removeHandler;

  li.append(p, btn);
  list.append(li);

  todos.push(li);
};

const removeHandler = (e) => {
  e.target.parentElement.parentElement.remove();
};

const sortTodoHandler = () => {
  const todos = [...document.querySelectorAll(".todo-list-item")]
    .map((element) => element.textContent)
    .reverse();
  [...document.querySelectorAll(".todo-list-item")].forEach((element) =>
    element.remove()
  );
  todos.forEach((element) => createToDoItem(element));
};

sortBtn.addEventListener("click", sortTodoHandler);

const changeImageOnHover = function (items) {
  for (let item of items) {
    item.children[1].firstElementChild.addEventListener(
      "mouseover",
      function () {
        this.setAttribute("src", "images/Group 70.png");
      }
    );

    item.children[1].firstElementChild.addEventListener(
      "mouseout",
      function () {
        this.setAttribute("src", "images/Group 77.png");
      }
    );
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userInput = inputEl.value;
  if (!userInput) return;

  createToDoItem(userInput);
  changeImageOnHover(list.children);

  inputEl.value = "";
});
