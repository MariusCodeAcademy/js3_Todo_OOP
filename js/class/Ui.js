export default class Ui {
  // nuorodos i html el
  static mainUlListEl = document.getElementById("list");

  static makeLi({ title, done }) {
    let liHtml = `
        <li class="item ${done === true ? "line-through" : ""}">
            <i class="fa ${
              done === true ? "fa-check-circle" : "fa-circle-thin"
            } make-done" aria-hidden="true"></i>
            <span class="text">${title}</span>
            <i class="fa fa-pencil edit-icon" aria-hidden="true"></i>
            <i class="fa fa-trash delete-icon" aria-hidden="true"></i>
        </li>
        `;
    return liHtml;
  }

  /**
   * Generates li elements on the page
   */
  static render(todosArr) {
    Ui.mainUlListEl.innerHTML = "";
    todosArr.forEach((todoObj) => {
      Ui.mainUlListEl.innerHTML += Ui.makeLi(todoObj);
    });
  }
}
