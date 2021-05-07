import Todo from "./Todo.js";
import TodoPicture from "./TodoPicture.js";
import Ui from "./Ui.js";

export default class State {
  constructor() {
    this.currentTodos = [];
    this.currentTodo = null;
  }

  // pagalbiniai metodai
  /**
   * patikrinam ar turime toki id ar ne
   * @param {string} id
   * @returns boolean
   */
  doWeHaveThisId(id) {
    // ar turim toki id kurio ieskom
    let todoIdsArr = this.currentTodos.map((todoObj) => todoObj.id);
    if (!todoIdsArr.includes(id)) {
      return false;
    }
    return true;
  }

  resetTodos() {
    this.currentTodos = [];
    this.render();
    Todo.todoCount = 0;
  }

  addTodo(todo) {
    if (todo instanceof Todo) {
      this.currentTodos.push(todo);
    } else throw new Error("not and instance of todo.");
    this.render();
  }

  deleteTodo(id) {
    // ar turim toki id kurio ieskom
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Delete failed");
    }
    this.currentTodos = this.currentTodos.filter((todoObj) => id !== todoObj.id);
    console.log("todo", id, "was deleted");
    this.render();
  }

  editTodo(id, newTitle) {
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Edit failed");
    }
    let todoToEdit = this.currentTodos.find((todoObj) => id === todoObj.id);
    console.log(`Title: "${todoToEdit.title}" was renamed to "${newTitle}"`);
    todoToEdit.editTitle(newTitle);
  }

  makeTodoEditModeOn(id, editedTitle) {
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Edit failed");
    }
    let todoToToggleEditMode = this.currentTodos.find((todoObj) => id === todoObj.id);
    // tuo atveju kai pereinam is edit mode i paprastas rezma
    if (todoToToggleEditMode.editMode === true) {
      console.log("is edit i paprasta");
      // mes norim paimti ivesties lauko reiksme ir pakeisti title
      todoToToggleEditMode.title = editedTitle;
    }
    todoToToggleEditMode.editMode = !todoToToggleEditMode.editMode;
    // console.log("todoToToggleEditMode", todoToToggleEditMode);

    this.render();
  }

  checkAsDone(id) {
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Mark done failed");
    }
    let todoToToBeChecked = this.currentTodos.find((todoObj) => id === todoObj.id);
    todoToToBeChecked.toggleDoneState();
    this.render();
  }
  get skaitliukas() {
    // reikia gauti kiek is viso yra todo el
    let visoTodosYra = this.currentTodos.length;
    // reikia gauti kiek ju yra pazymeti kaip baigti(done)
    let uzbaigtiTodo = this.doneTodos.length;
    // grazinti ir atspausdinti reiksme per slash '3 / 7'
    console.log(`${uzbaigtiTodo} / ${visoTodosYra}`);
    return `${uzbaigtiTodo} / ${visoTodosYra}`;
  }
  get doneTodos() {
    return this.currentTodos.filter((todoObj) => todoObj.done);
  }
  // 8. sukurti buda matyti tik todo kurie yra paveiksliuko tipo
  get pictureOnlyTodo() {
    return this.currentTodos.filter((todoObj) => todoObj instanceof TodoPicture);
    // return this.currentTodos.filter((todoObj) => todoObj.imgUrl);
  }
  // Jei turesim kitu tipu todo reikia sita metoda atnaujinti
  get simpleTodosOnly() {
    return this.currentTodos.filter((todoObj) => !(todoObj instanceof TodoPicture));
  }
  /**
   * Metodas generuoja galutini saraso vaizda
   *
   */
  render() {
    Ui.apendLiElementsToList(this.currentTodos);
    Ui.counterEl.textContent = this.skaitliukas;
  }
}
