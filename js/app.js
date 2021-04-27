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
  "Go for shoppig", // Todo
  ["find this pole", "south poole.jpg"], // TodoPicture
  "call Jane",
];
todosDataArr.forEach((todoData) => {
  if (typeof todoData === "string") {
    // kai todo yra tekstas
    st.addTodo(new Todo(todoData));
    return;
  }
  if (Array.isArray(todoData)) {
    // kai todo yra masyvas
    st.addTodo(new TodoPicture(...todoData));
    // st.addTodo(new TodoPicture(todoData[0], todoData[1]));
    return;
  }
  throw new Error("not a valid input");
});

// uzbaikim keleta todo (done, checked)

console.log(st);
