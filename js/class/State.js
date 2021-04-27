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
    if (!this.currentTodos.map((todoObj) => todoObj.id).includes(id)) {
      throw new Error("This todo not found. Delete failed");
    }
    this.currentTodos = this.currentTodos.filter((todoObj) => id !== todoObj.id);
  }
}
