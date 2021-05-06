"use strict"; // here we go again
console.log("app.js");

import Todo from "./class/Todo.js";
import TodoPicture from "./class/TodoPicture.js";
import State from "./class/State.js";
import Ui from "./class/Ui.js";

// state - bus laikoma dabartine todo elementu busena ir pagal ja bus atvaizduojamas html
let st = new State();

const ourTodoData = ["Drink coffe", "Go to park", "walk a dog", "Go to see Stars"];

ourTodoData.forEach((todoTitle) => {
  st.addTodo(new Todo(todoTitle));
});

console.log(st.currentTodos);
st.checkAsDone("t_2");
st.checkAsDone("t_3");
const newEl = Ui.makeLi(st.currentTodos[0]);

console.log(newEl);

st.render();

Ui.mainUlListEl.addEventListener("click", function (event) {
  const currentElClicked = event.target;
  // console.log(event.target);

  if (currentElClicked.classList.contains("make-done")) {
    console.log("make done click");
    // gaunam id to li elemento ant kurio paspaudem
    const idOfCurrentEl = currentElClicked.parentElement.dataset.id;
    st.checkAsDone(idOfCurrentEl);
  }
});
