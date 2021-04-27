import Todo from "./Todo.js";

export default class TodoPicture extends Todo {
  constructor(title, imgUrl) {
    super(title);
    this.imgUrl = imgUrl;
  }
}
