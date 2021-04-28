"use strict"; // here we go again

console.log("app.js");
import Todo from "./class/Todo.js";
import TodoPicture from "./class/TodoPicture.js";
import State from "./class/State.js";

window.kkk = "yes";
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
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint cumque minima commodi a optio, illo fuga voluptates dolorum corrupti! Asperiores temporibus soluta accusamus explicabo, vitae aliquid esse qui velit itaque earum necessitatibus voluptates incidunt a in maxime non fugit natus corrupti, ipsa dolore deserunt porro culpa praesentium eligendi? Labore.",
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

// uzbaikim keleta todo (done, checked);
st.checkAsDone("t_2");
st.checkAsDone("t_4");
st.checkAsDone("t_5");
console.log(st);

console.log("pic todos only", st.pictureOnlyTodo);
console.log("simple todos only", st.simpleTodosOnly);

st.skaitliukas;
window.rez = st;
console.log(st.currentTodos[1].title);

window.boom = function () {
  window.rez.addTodo(new Todo("does it"));
  console.log(window.rez.currentTodos);
};

window.blue = "green";
