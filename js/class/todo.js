export default class Todo {
  static todoCount = 0;
  _title = "";
  constructor(title, done = false) {
    //id, title, done, timeStamp
    this.id = "t_" + ++Todo.todoCount;
    this.title = title;
    this.done = done;
    this.timeStamp = new Date();
    // jei si reiksme yra true reikskia mes ta todo el redaguojam
    this.editMode = false;
  }
  editTitle(newTitle) {
    this.title = newTitle;
  }
  toggleDoneState() {
    this.done = !this.done;
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
