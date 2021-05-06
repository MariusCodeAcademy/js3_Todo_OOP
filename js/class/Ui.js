export default class Ui {
  // nuorodos i html el
  static mainUlListEl = document.getElementById("list");

  static makeLi({ title, done, id }) {
    // clases jei todo nepazymetas kaip done
    let itemClass = "",
      checkClass = "fa-circle-thin";
    if (done === true) {
      // clases kai todo pazymetas kaip done
      itemClass = "line-through";
      checkClass = "fa-check-circle";
    }
    let liHtml = `
        <li class="item ${itemClass}" data-id=${id} >
            <i class="fa ${checkClass} make-done" aria-hidden="true"></i>
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
  static renderList(todosArr) {
    Ui.mainUlListEl.innerHTML = "";
    todosArr.forEach((todoObj) => {
      Ui.mainUlListEl.innerHTML += Ui.makeLi(todoObj);
    });
  }
}
