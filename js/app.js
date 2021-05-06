"use strict"; // here we go again
console.log("app.js");

import Todo from "./class/Todo.js";
import TodoPicture from "./class/TodoPicture.js";
import State from "./class/State.js";
import Ui from "./class/Ui.js";

// state - bus laikoma dabartine todo elementu busena ir pagal ja bus atvaizduojamas html
let st = new State();

const ourTodoData = ["Drink coffe", "Go to park", "walk a dog"];

ourTodoData.forEach((todoTitle) => {
  st.addTodo(new Todo(todoTitle));
});

console.log(st.currentTodos);
st.checkAsDone("t_2");
st.checkAsDone("t_3");
const newEl = Ui.makeLi(st.currentTodos[0]);

console.log(newEl);

st.render();
