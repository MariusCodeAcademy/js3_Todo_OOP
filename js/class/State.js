import Todo from "./Todo.js";

export default class State {
  constructor() {
    this.currentTodos = [];
  }

  addTodo(todo) {
    if (todo instanceof Todo) {
      this.currentTodos.push(todo);
    } else throw new Error("not and instance of todo.");
  }

  deleteTodo(id) {
    // ar turim toki id kurio ieskom
    let todoIdsArr = this.currentTodos.map((todoObj) => todoObj.id);
    if (!todoIdsArr.includes(id)) {
      throw new Error("This todo not found. Delete failed");
    }
    this.currentTodos = this.currentTodos.filter((todoObj) => id !== todoObj.id);
    console.log("todo", id, "was deleted");
  }

  editTodo(id, newTitle) {
    let todoIdsArr = this.currentTodos.map((todoObj) => todoObj.id);
    if (!todoIdsArr.includes(id)) {
      throw new Error("This todo not found. Edit failed");
    }
    let todoToEdit = this.currentTodos.find((todoObj) => id === todoObj.id);
    console.log("todoToEdit", todoToEdit);
    todoToEdit.editTitle(newTitle);
    console.log("todoToEdit", todoToEdit);
  }
}
