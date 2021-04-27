export default class Todo {
  static todoCount = 0;
  constructor(title) {
    //id, title, done, timeStamp
    this.id = "t_" + ++Todo.todoCount;
    this.title = title;
    this.done = false;
    this.timeStamp = new Date();
  }
  editTitle(newTitle) {
    this.title = newTitle;
  }
}
