"use strict"; // here we go again
console.log("app.js");

import State from "./class/State.js";
import Ui from "./class/Ui.js";

// state - bus laikoma dabartine todo elementu busena ir pagal ja bus atvaizduojamas html
let st = new State();

console.log(st.currentTodos);
// st.checkAsDone("t_2");
// st.checkAsDone("t_3");
// const newEl = Ui.makeLi(st.currentTodos[0]);

// console.log(newEl);

st.render();

Ui.mainUlListEl.addEventListener("click", function (event) {
  const currentElClicked = event.target;
  // console.log(event.target);

  // pasitikrinam ar paspaudem ant ikonos elemento
  if (currentElClicked.tagName === "I") {
    // console.log("paspaudem ikocna");
    // jei taip tai issisaugom li el id
    const liIdAntKurioPaspaudem = currentElClicked.parentElement.dataset.id;

    // tikrinam ar paspaudem make done iconele
    // check uncheck method
    if (currentElClicked.classList.contains("make-done")) {
      // jei taip tai check unckek el
      st.checkAsDone(liIdAntKurioPaspaudem);
    }
    // jei paspaudem ant siukslines
    if (currentElClicked.classList.contains("delete-icon")) {
      // tai trinam el
      st.deleteTodo(liIdAntKurioPaspaudem);
    }
    // jei paspaudem and edit
    if (currentElClicked.classList.contains("edit-icon")) {
      console.log("edit pressed");

      // gauti nauja title reiksme
      // currentElClicked.parentElementSibling.value
      let naujaTodoReiksme;

      // kad isvengti klaidos pasitikrinam ar turim reiksme ir tik tada vygdom
      // let arYraInputEl = currentElClicked.parentElement.querySelector("input");
      // if (arYraInputEl) naujaTodoReiksme = arYraInputEl.value;

      // ties klaustuku js pasitikrina ar gavo reiksme jei negavo tai kodo nevygdo toliau ir mes
      // ngaunam klaidos
      naujaTodoReiksme = currentElClicked.parentElement.querySelector("input")?.value;
      // console.log("nauja", naujaTodoReiksme);

      st.makeTodoEditModeOn(liIdAntKurioPaspaudem, naujaTodoReiksme);
    }
  } // paspaudem ant iconeles IFAS END
});

Ui.addTodoBtn.addEventListener("click", function () {
  Ui.addTodoFromInput(st);
});

// padaryti kad paspaudues enter ikeltumem nauja todo
Ui.todoInputEl.addEventListener("keypress", function (event) {
  // patikrinti ar paspausta enter
  // console.log(event.key);
  if (event.key === "Enter") {
    // jei taip tai ikelti todo
    Ui.addTodoFromInput(st);
  }
});

// padaryti kad paspauus refresh ikona istitrintu visi todo
Ui.resetBtn.addEventListener("click", function () {
  st.resetTodos();
});

// 2 prideti padarytu ir nepadarytu todo skaitliuka i header
// Ui.counterEl.textContent = st.skaitliukas;

// 3 prideti prie todo data ir laika

// local storage test
// let num1 = 50;
// irasom i narsykles atminti kaip key: value poras
// localStorage.setItem("musuSkaicius", num1);

// gauti reiksmes is narsykles atminties
// let gavom = localStorage.getItem("musuSkaicius");
// console.log("gavom", gavom);
// console.log("gavom tipas", typeof gavom);

// ikeliam masyva i localStorge
// localStorage.setItem("todoMas", ourTodoData);
// console.log("atgal gaunam", localStorage.getItem("todoMas"));

// norint issauti objekta arba masyva mums pirmiausia reikia ji paversti JSON tipo
// duomenimis
// kaip paversti objekta i Json
// JSON.stringify(obj)
// console.log(st.currentTodos);
// // pavercia objekta i json formata
// let ourTodoDataJson = JSON.stringify(st.currentTodos);
// console.log(ourTodoDataJson);

// // atversti duomenis atgal i s json i obj
// let dataFromJson = JSON.parse(ourTodoDataJson);
// console.log("parsinti duomenys", dataFromJson);
