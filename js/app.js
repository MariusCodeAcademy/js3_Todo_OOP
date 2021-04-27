"use strict"; // here we go again

console.log("app.js");
import Todo from "./class/Todo.js";
import TodoPicture from "./class/TodoPicture.js";
import State from "./class/State.js";

// state - bus laikoma dabartine todo elementu busena ir pagal ja bus atvaizduojamas html
let st = new State();

let todosDataArr = [
  "Buy milk",
  "Do pushups",
  ["got to this mountain", "mountain.jpg"],
  "Read a book",
  "Go for shoppig",
  ["find this pole", "south poole.jpg"],
  "call Jane",
];
todosDataArr.forEach((todoData) => {
  // kai todo yra tekstas
  st.addTodo(new Todo(todoData));
  // kai todo yra masyvas
  st.addTodo(new TodoPicture(todoData));
});

console.log(st);
