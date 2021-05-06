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

// console.log(newEl);

st.render();

Ui.mainUlListEl.addEventListener("click", function (event) {
  const currentElClicked = event.target;
  // console.log(event.target);

  // pasitikrinam ar paspaudem ant ikonos elemento
  if (currentElClicked.tagName === "I") {
    console.log("paspaudem ikocna");
    // jei taip tai issisaugom li el id
    const liIdAntKurioPaspaudem = currentElClicked.parentElement.dataset.id;

    // tikrinam ar paspaudem make done iconele
    // check uncheck method
    if (currentElClicked.classList.contains("make-done")) {
      // jei taip tai check unckek el
      st.checkAsDone(liIdAntKurioPaspaudem);
    }
    // jei paspaudem ant siukslines
    if (currentElClicked.classList.contains("delete-icon")) {
      // tai trinam el
      st.deleteTodo(liIdAntKurioPaspaudem);
    }
    // jei paspaudem and edit
    if (currentElClicked.classList.contains("edit-icon")) {
      console.log("edit pressed");
      // Gauti dabartine reiksme
      st.makeTodoEditModeOn(liIdAntKurioPaspaudem);
    }
  } // paspaudem ant iconeles IFAS END
});
