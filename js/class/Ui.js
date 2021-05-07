import Todo from "./Todo.js";
export default class Ui {
  // nuorodos i html el
  static mainUlListEl = document.getElementById("list");
  static addTodoBtn = document.getElementById("add-todo-btn");
  static todoInputEl = document.getElementById("input");
  static resetBtn = document.getElementById("reset");
  static counterEl = document.querySelector(".done-todo-count");

  static makeLi({ title, done, id, editMode }) {
    // clases jei todo nepazymetas kaip done
    let itemClass = "",
      checkClass = "fa-circle-thin";
    if (done === true) {
      // clases kai todo pazymetas kaip done
      itemClass = "line-through";
      checkClass = "fa-check-circle";
    }
    // ar ijungtas edit rezimas
    let inputOrSpan = `<span class="text">${title}</span>`;
    if (editMode === true) {
      inputOrSpan = `<input type="text" class='edit-field' value="${title}" />`;
    }

    let liHtml = `
        <li class="item ${itemClass}" data-id=${id} >
            <i class="fa ${checkClass} make-done" aria-hidden="true"></i>
            ${inputOrSpan}
            <i class="fa fa-pencil edit-icon" aria-hidden="true"></i>
            <i class="fa fa-trash delete-icon" aria-hidden="true"></i>
        </li>
        `;
    return liHtml;
  }

  /**
   * Generates li elements on the page
   * kviesti sita metoda visada kai kazkas vizualiai turetu pasikeisti musu HTML Ui
   */
  static apendLiElementsToList(todosArr) {
    Ui.mainUlListEl.innerHTML = "";
    todosArr.forEach((todoObj) => {
      Ui.mainUlListEl.innerHTML += Ui.makeLi(todoObj);
    });
  }

  static addTodoFromInput(st) {
    // paimti input reiksme
    let newTodoReiksme = Ui.todoInputEl.value;
    if (newTodoReiksme !== "") {
      // is su ja iskviesti state metoda addTodo
      st.addTodo(new Todo(newTodoReiksme));
      Ui.todoInputEl.value = "";
    }
  }
}
