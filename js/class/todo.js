export default class Todo {
  static todoCount = 0;
  _title = "";
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
  markDone() {
    this.done = true;
  }
  set title(val) {
    // jei tekstas ilgesntis nei 80 simb
    if (val.length > 80) {
      this.longText = val;
      this._title = val.slice(0, 15) + "...";
    } else {
      this._title = val;
    }
  }
  get title() {
    return this._title;
  }
}
