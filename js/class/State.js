import Todo from "./Todo.js";

export default class State {
  constructor() {
    this.currentTodos = [];
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

  addTodo(todo) {
    if (todo instanceof Todo) {
      this.currentTodos.push(todo);
    } else throw new Error("not and instance of todo.");
  }

  deleteTodo(id) {
    // ar turim toki id kurio ieskom
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Delete failed");
    }
    this.currentTodos = this.currentTodos.filter((todoObj) => id !== todoObj.id);
    console.log("todo", id, "was deleted");
  }

  editTodo(id, newTitle) {
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Edit failed");
    }
    let todoToEdit = this.currentTodos.find((todoObj) => id === todoObj.id);
    console.log(`Title: "${todoToEdit.title}" was renamed to "${newTitle}"`);
    todoToEdit.editTitle(newTitle);
  }

  checkAsDone(id) {
    if (!this.doWeHaveThisId(id)) {
      throw new Error("This todo not found. Mark done failed");
    }
    let todoToToBeChecked = this.currentTodos.find((todoObj) => id === todoObj.id);
    todoToToBeChecked.markDone();
  }
  get skaitliukas() {}
}
